export default async function handler(req,res){
 const origin=process.env.STUDIO_API_URL;
 if(!origin)return res.status(503).json({error:'The studio connection is not configured. Please contact the studio directly.'});
 try{
  const base=new URL(origin);if(base.protocol!=='https:')throw new Error('HTTPS backend required');
  const incoming=new URL(req.url,'https://local.invalid');
  const target=new URL(incoming.pathname+incoming.search,base.origin);
  const headers={'Content-Type':'application/json'};if(req.headers.authorization)headers.Authorization=req.headers.authorization;
  const response=await fetch(target,{method:req.method,headers,body:['GET','HEAD'].includes(req.method)?undefined:JSON.stringify(req.body),redirect:'error',signal:AbortSignal.timeout(15000)});
  const data=await response.json();res.setHeader('Cache-Control','no-store');return res.status(response.status).json(data);
 }catch{return res.status(502).json({error:'The studio connection is temporarily unavailable.'});}
}
