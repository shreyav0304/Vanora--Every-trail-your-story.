import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {PGlite} from '@electric-sql/pglite';
test('Supabase migration enforces account isolation and a public-field whitelist in PostgreSQL',async()=>{
 const db=new PGlite();const a='11111111-1111-4111-8111-111111111111',b='22222222-2222-4222-8222-222222222222',act='33333333-3333-4333-8333-333333333333';
 try{
  await db.exec(`create role anon;create role authenticated;create schema auth;create table auth.users(id uuid primary key);create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;grant usage on schema auth to authenticated;grant execute on function auth.uid() to authenticated;insert into auth.users values('${a}'),('${b}');`);
  const migration=readFileSync('supabase/migrations/202610030001_vanora.sql','utf8');await db.exec(migration);await db.exec(migration);
  const asUser=async id=>db.exec(`reset role;set request.jwt.claim.sub='${id}';set role authenticated;`);
  await asUser(a);await db.query('insert into public.vanora_profiles(id,name) values($1,$2)',[a,'A']);
  await assert.rejects(db.query('insert into public.vanora_profiles(id,name) values($1,$2)',[b,'Forged']));
  await db.query('insert into public.vanora_activities(id,user_id,body) values($1,$2,$3)',[act,a,JSON.stringify({title:'Private summit',points:[{lat:18.1,lng:73.1}],photo:'private-photo',sharePhoto:false,secret:'never publish this',distance:2,date:'2026-10-03'})]);
  for(const table of ['plans','nominations'])await db.query(`insert into public.vanora_${table}(user_id,body) values($1,$2)`,[a,'{"title":"Private plan"}']);
  await db.query('insert into public.vanora_saved(user_id,trek) values($1,$2)',[a,'triund']);await db.query('insert into public.vanora_passport(user_id,trek,body) values($1,$2,$3)',[a,'triund','{"note":"private memory"}']);
  await asUser(b);await db.query('insert into public.vanora_profiles(id,name) values($1,$2)',[b,'B']);
  for(const table of ['activities','plans','nominations','saved','passport'])assert.equal((await db.query(`select * from public.vanora_${table}`)).rows.length,0,table);
  assert.equal((await db.query('update public.vanora_activities set shared=true where id=$1 returning id',[act])).rows.length,0);
  await assert.rejects(db.query('insert into public.vanora_social(user_id,target,kind) values($1,$2,$3)',[b,act,'like']));
  await db.exec('reset role;set role anon;');assert.equal((await db.query('select * from public.vanora_public_feed')).rows.length,0);await assert.rejects(db.query('select * from public.vanora_activities'));
  await asUser(a);await db.query('update public.vanora_activities set shared=true where id=$1',[act]);
  await asUser(b);await db.query('insert into public.vanora_social(user_id,target,kind,body) values($1,$2,$3,$4)',[b,act,'comment','Lovely']);
  await db.exec('reset role;set role anon;');let post=(await db.query('select * from public.vanora_public_feed')).rows[0];assert.equal(post.activity.title,'Private summit');assert.ok(!('points' in post.activity));assert.ok(!('secret' in post.activity));assert.ok(!('photo' in post.activity));assert.equal(post.comments[0].name,'B');assert.equal(post.comments[0].body,'Lovely');assert.ok(!('email' in post));
  await asUser(a);await db.query("update public.vanora_activities set body=body||'{\"sharePhoto\":true}'::jsonb where id=$1",[act]);await db.exec('reset role;set role anon;');post=(await db.query('select * from public.vanora_public_feed')).rows[0];assert.equal(post.activity.photo,'private-photo');
  await asUser(a);await db.query('update public.vanora_activities set shared=false where id=$1',[act]);await db.exec('reset role;set role anon;');assert.equal((await db.query('select * from public.vanora_public_feed')).rows.length,0);
 }finally{await db.close()}
});
