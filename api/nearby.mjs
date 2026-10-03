import {handleNearby} from '../server-nearby.mjs';
export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 const send=(status,data)=>res.status(status).json(data);
 if(req.method!=='POST')return send(405,{error:'Use POST for facility searches.'});
 if(req.headers.origin&&req.headers.origin!==`https://${req.headers.host}`&&req.headers.origin!==`http://${req.headers.host}`)return send(403,{error:'Origin rejected'});
 let body=req.body;
 if(typeof body==='string'){try{body=JSON.parse(body)}catch{return send(400,{error:'Invalid request.'})}}
 if(!body||typeof body!=='object')return send(400,{error:'Choose a search point first.'});
 return handleNearby({body,send});
}
