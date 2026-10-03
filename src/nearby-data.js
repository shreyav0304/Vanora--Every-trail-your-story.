export function validateAnchor(body){
 const {lat,lng,radius}=body;
 if(!Number.isFinite(lat)||!Number.isFinite(lng)||lat<6||lat>38||lng<68||lng>98||![10,25,50].includes(radius))throw new Error('Choose coordinates in India and a supported search radius.');
 return {lat,lng,radius};
}
export function distanceKm(a,b){const rad=n=>n*Math.PI/180,dlat=rad(b.lat-a.lat),dlng=rad(b.lng-a.lng);const h=Math.sin(dlat/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dlng/2)**2;return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(Math.max(0,1-h)));}
export function nearbyQuery({lat,lng,radius}){const around=`(around:${radius*1000},${lat},${lng})`;return `[out:json][timeout:20];(nwr[amenity~"^(hospital|clinic|shelter)$"]${around};nwr[healthcare~"^(hospital|clinic)$"]${around};nwr[tourism~"^(guest_house|hostel|hotel|camp_site|alpine_hut)$"]${around};nwr[highway=rest_area]${around};);out center meta 1500;`;}
export function normaliseNearby(data,anchor){
 if(!Array.isArray(data?.elements)||data.remark)throw new Error('The map provider returned an incomplete result. Please retry.');
 const seen=new Set(),facilities=[];
 for(const e of data.elements){const t=e.tags||{},lat=e.lat??e.center?.lat,lng=e.lon??e.center?.lon;
 if(!Number.isFinite(lat)||!Number.isFinite(lng)||!['node','way','relation'].includes(e.type)||!Number.isSafeInteger(e.id))continue;
 const medical=['hospital','clinic'].includes(t.amenity)?t.amenity:['hospital','clinic'].includes(t.healthcare)?t.healthcare:null;
 const kind=medical||(['guest_house','hostel','hotel','camp_site','alpine_hut'].includes(t.tourism)?t.tourism:t.amenity==='shelter'?'shelter':t.highway==='rest_area'?'rest_area':null);if(!kind)continue;
 const distance=distanceKm(anchor,{lat,lng});if(distance>anchor.radius)continue;
 const name=String(t.name||t['name:en']||'Unnamed mapped place').slice(0,160),key=`${kind}:${name}:${lat.toFixed(4)}:${lng.toFixed(4)}`;if(seen.has(key))continue;seen.add(key);
 const rawPhone=String(t['contact:phone']||t.phone||'').slice(0,100);const phone=rawPhone.split(';')[0].trim();
 facilities.push({id:`${e.type}/${e.id}`,name,kind,group:medical?'care':'rest',lat,lng,distance,phone:rawPhone,dial:/^\+?[\d ()-]{7,25}$/.test(phone)?phone.replace(/[ ()-]/g,''):null,address:[t['addr:street'],t['addr:city'],t['addr:postcode']].filter(Boolean).join(', ').slice(0,250),hours:String(t.opening_hours||'').slice(0,160),emergency:t.emergency==='yes'?'Mapped as yes; unconfirmed':t.emergency==='no'?'Mapped as no':'Not documented',edited:e.timestamp||null,source:`https://www.openstreetmap.org/${e.type}/${e.id}`});
 }
 facilities.sort((a,b)=>a.distance-b.distance);
 const care=[...facilities.filter(f=>f.kind==='hospital').slice(0,8),...facilities.filter(f=>f.kind==='clinic').slice(0,4)].sort((a,b)=>a.distance-b.distance);
 return {care,rest:facilities.filter(f=>f.group==='rest').slice(0,8),truncated:data.elements.length>=1500};
}
export function validSnapshot(d){
 try{validateAnchor(d.anchor)}catch{return false}
 return Number.isFinite(Date.parse(d.fetchedAt))&&['care','rest'].every(k=>Array.isArray(d[k])&&d[k].length<=20&&d[k].every(f=>Number.isFinite(f.lat)&&Math.abs(f.lat)<=90&&Number.isFinite(f.lng)&&Math.abs(f.lng)<=180&&Number.isFinite(f.distance)&&f.distance>=0&&typeof f.name==='string'&&/^https:\/\/www\.openstreetmap\.org\/(node|way|relation)\/\d+$/.test(f.source)&&(!f.dial||/^\+?\d{7,20}$/.test(f.dial))));
}
