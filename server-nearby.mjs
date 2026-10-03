import {validateAnchor,nearbyQuery,normaliseNearby} from './src/nearby-data.js';
let active=0;
export async function fetchNearby(body,fetcher=fetch){
 const anchor=validateAnchor(body);
 const endpoint=process.env.OVERPASS_URL||'https://overpass-api.de/api/interpreter';
 const response=await fetcher(endpoint,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','User-Agent':'VanoraLocalMVP/1.0'},body:new URLSearchParams({data:nearbyQuery(anchor)}),signal:AbortSignal.timeout(25000)});
 if(!response.ok)throw new Error('Facility lookup is unavailable. Retry later or use the external map searches.');
 return {...normaliseNearby(await response.json(),anchor),anchor,fetchedAt:new Date().toISOString(),source:'OpenStreetMap contributors via Overpass',sourceUrl:'https://www.openstreetmap.org/copyright'};
}
export async function handleNearby({body,send}){
 try{validateAnchor(body)}catch(e){send(400,{error:e.message});return}
 if(active>=2){send(429,{error:'Facility searches are busy. Please retry shortly.'});return}
 active++;
 try{send(200,await fetchNearby(body))}catch{send(502,{error:'Facility lookup is unavailable or incomplete. Retry later or use the external map searches.'})}finally{active--}
}
