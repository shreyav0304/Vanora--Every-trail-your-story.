-- Run once in the Supabase SQL Editor. No existing app data is deleted.
begin;
create table if not exists public.vanora_profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 name text not null check (length(name) between 1 and 60),
 experience text not null default 'Beginner' check (experience in ('Beginner','Regular','Experienced')),
 regions jsonb not null default '[]' check (jsonb_typeof(regions)='array')
);
create table if not exists public.vanora_activities (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references public.vanora_profiles(id) on delete cascade,
 body jsonb not null check (jsonb_typeof(body)='object' and octet_length(body::text)<=2500000),
 shared boolean not null default false
);
create table if not exists public.vanora_saved (
 user_id uuid not null references public.vanora_profiles(id) on delete cascade,
 trek text not null check (length(trek)<=200), primary key(user_id,trek)
);
create table if not exists public.vanora_plans (
 id uuid primary key default gen_random_uuid(),user_id uuid not null references public.vanora_profiles(id) on delete cascade,
 body jsonb not null check (jsonb_typeof(body)='object' and octet_length(body::text)<=20000)
);
create table if not exists public.vanora_passport (
 user_id uuid not null references public.vanora_profiles(id) on delete cascade,
 trek text not null check (length(trek)<=200),body jsonb not null check(octet_length(body::text)<=4000),primary key(user_id,trek)
);
create table if not exists public.vanora_nominations (
 id uuid primary key default gen_random_uuid(),user_id uuid not null references public.vanora_profiles(id) on delete cascade,
 body jsonb not null check(jsonb_typeof(body)='object' and octet_length(body::text)<=10000)
);
create table if not exists public.vanora_social (
 user_id uuid not null references public.vanora_profiles(id) on delete cascade,
 target text not null check(length(target)<=100),kind text not null check(kind in ('like','comment','follow')),
 body text check(length(body)<=500),primary key(user_id,target,kind)
);
create index if not exists vanora_activities_user on public.vanora_activities(user_id);
create index if not exists vanora_activities_shared on public.vanora_activities(shared) where shared;
create index if not exists vanora_plans_user on public.vanora_plans(user_id);
create index if not exists vanora_nominations_user on public.vanora_nominations(user_id);
create index if not exists vanora_social_target on public.vanora_social(target,kind);

-- The only elevated helper answers a yes/no question; it returns no private rows.
create or replace function public.vanora_can_interact(p_target text,p_kind text)
returns boolean language sql stable security definer set search_path = '' as $$
 select case when p_kind='follow' then exists(select 1 from public.vanora_profiles where id::text=p_target)
 else exists(select 1 from public.vanora_activities where id::text=p_target and shared) end;
$$;
revoke all on function public.vanora_can_interact(text,text) from public,anon;
grant execute on function public.vanora_can_interact(text,text) to authenticated;

alter table public.vanora_profiles enable row level security;
alter table public.vanora_activities enable row level security;
alter table public.vanora_saved enable row level security;
alter table public.vanora_plans enable row level security;
alter table public.vanora_passport enable row level security;
alter table public.vanora_nominations enable row level security;
alter table public.vanora_social enable row level security;
drop policy if exists vanora_profile_owner on public.vanora_profiles;
create policy vanora_profile_owner on public.vanora_profiles for all to authenticated using(id=(select auth.uid())) with check(id=(select auth.uid()));
drop policy if exists vanora_activity_owner on public.vanora_activities;
create policy vanora_activity_owner on public.vanora_activities for all to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()));
drop policy if exists vanora_saved_owner on public.vanora_saved;
create policy vanora_saved_owner on public.vanora_saved for all to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()));
drop policy if exists vanora_plan_owner on public.vanora_plans;
create policy vanora_plan_owner on public.vanora_plans for all to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()));
drop policy if exists vanora_passport_owner on public.vanora_passport;
create policy vanora_passport_owner on public.vanora_passport for all to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()));
drop policy if exists vanora_nomination_owner on public.vanora_nominations;
create policy vanora_nomination_owner on public.vanora_nominations for all to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()));
drop policy if exists vanora_social_read on public.vanora_social;
drop policy if exists vanora_social_write on public.vanora_social;
drop policy if exists vanora_social_delete on public.vanora_social;
drop policy if exists vanora_social_update on public.vanora_social;
create policy vanora_social_read on public.vanora_social for select to authenticated using(user_id=(select auth.uid()));
create policy vanora_social_write on public.vanora_social for insert to authenticated with check(user_id=(select auth.uid()) and public.vanora_can_interact(target,kind));
create policy vanora_social_update on public.vanora_social for update to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()) and public.vanora_can_interact(target,kind));
create policy vanora_social_delete on public.vanora_social for delete to authenticated using(user_id=(select auth.uid()));

revoke all on public.vanora_profiles,public.vanora_activities,public.vanora_saved,public.vanora_plans,public.vanora_passport,public.vanora_nominations,public.vanora_social from public,anon;
grant select,insert,update,delete on public.vanora_profiles,public.vanora_activities,public.vanora_saved,public.vanora_plans,public.vanora_passport,public.vanora_nominations,public.vanora_social to authenticated;

-- Deliberately owner-executed: public readers receive this fixed whitelist only.
-- Never add full body, GPS points, email, private plans, or session data here.
create or replace view public.vanora_public_feed with (security_barrier=true) as
 select a.id,a.user_id as "user",p.name,
 jsonb_build_object('title',a.body->'title','trek',a.body->'trek','distance',a.body->'distance',
 'gain',a.body->'gain','seconds',a.body->'seconds','date',a.body->'date','sharePhoto',a.body->'sharePhoto') ||
 case when a.body->'sharePhoto'='true'::jsonb then jsonb_build_object('photo',a.body->'photo') else '{}'::jsonb end as activity,
 (select count(*) from public.vanora_social s where s.target=a.id::text and s.kind='like') as likes,
 coalesce((select jsonb_agg(jsonb_build_object('body',s.body,'name',sp.name)) from public.vanora_social s join public.vanora_profiles sp on sp.id=s.user_id where s.target=a.id::text and s.kind='comment'),'[]'::jsonb) as comments
 from public.vanora_activities a join public.vanora_profiles p on p.id=a.user_id where a.shared;
revoke all on public.vanora_public_feed from public;
grant select on public.vanora_public_feed to anon,authenticated;
commit;
