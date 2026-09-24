import React, { useState, useEffect } from 'react';
import { quotesApi } from '../../services/api';
export function Status({ value='pending' }) { return <span className={'mm-status mm-status-'+value}>{({pending:'Awaiting review',in_review:'In review',quoted:'Estimate sent',completed:'Completed',archived:'Archived'})[value]||value}</span>; }
export default function DashboardOverview({ onNavigateTab, onSelectQuote, revision }) {
 const [data,setData]=useState(null),[error,setError]=useState(''),[busy,setBusy]=useState(false);
 const load=async()=>{setBusy(true);setError('');try{const [list,stats]=await Promise.all([quotesApi.getQuotes({limit:5}),quotesApi.getStats()]);setData({quotes:list.quotes||[],stats});}catch{setError('The studio data could not be loaded. Please check your connection and retry.');}finally{setBusy(false);}};
 useEffect(()=>{load();},[revision]);
 return <>
  {error&&<div className="mm-error" role="alert">{error} <button onClick={load}>Retry</button></div>}
  <div className="mm-metrics">{[['total','All consultations'],['pending','Awaiting review'],['quoted','Estimates sent'],['completed','Completed']].map(([key,label])=><button key={key} onClick={()=>onNavigateTab('orders')}><span>{label}</span><strong>{data?data.stats[key]??0:'—'}</strong><small>View consultations ↗</small></button>)}</div>
  <section className="mm-admin-panel"><header><div><p className="mm-eyebrow">THE LATEST AT YOUR STUDIO</p><h2>Recent consultations</h2></div><button className="mm-text-link" onClick={()=>onNavigateTab('orders')}>View all ↗</button></header>
   {busy&&!data?<p className="mm-admin-empty" role="status">Loading consultations…</p>:!data?.quotes.length?<div className="mm-admin-empty"><h3>{error?'Your data is unavailable.':'A little space for what’s next.'}</h3><p>{error?'Retry to reconnect to your studio.':'New appointment requests will appear here.'}</p></div>:<div className="mm-records">{data.quotes.map(q=><button className="mm-record" onClick={()=>onSelectQuote(q)} key={q.id}><span className="mm-avatar">{q.name?.slice(0,1)||'C'}</span><span><strong>{q.name}</strong><small>{q.detailedService||q.serviceCategory}</small></span><Status value={q.status}/><span aria-hidden="true">↗</span></button>)}</div>}
  </section>
  <div className="mm-admin-note"><p className="mm-eyebrow">KEEP IT PERSONAL</p><h2>The details make<br/><em>the difference.</em></h2><p>Review a client's preferences, respond to their questions, and help them take the next step.</p><button className="mm-text-link" onClick={()=>onNavigateTab('inbox')}>Open client messages ↗</button></div>
 </>;
}
