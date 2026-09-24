import React,{useState,useEffect} from 'react';
import Website from './components/Website';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/AdminLogin';
import QuoteWizardModal from './components/wizard/QuoteWizardModal';
import {authApi,getStoredToken} from './services/api';
import './styles/redesign.css';
const route=()=>{const h=location.hash.replace(/^#\/?/,'').split('?')[0];return ({about:'studio',gallery:'studio',reviews:'studio','survivor-pledge':'pledge'})[h]||(['procedures','studio','pledge','admin'].includes(h)?h:'home');};
export default function App(){
 const [page,setPage]=useState(route),[user,setUser]=useState(null),[checking,setChecking]=useState(!!getStoredToken()),[booking,setBooking]=useState(null);
 useEffect(()=>{document.documentElement.classList.remove('dark');document.body.classList.remove('dark');const change=()=>{setPage(route());};window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change);},[]);
 useEffect(()=>{if(getStoredToken())authApi.verify().then(r=>{if(r.authenticated)setUser(r.user);}).finally(()=>setChecking(false));},[]);
 useEffect(()=>{window.scrollTo(0,0);document.title=(page==='home'?'Permanent makeup in Folsom':page.charAt(0).toUpperCase()+page.slice(1))+' | The Makeover Mommy';},[page]);
 const navigate=p=>{location.hash=p==='home'?'/':'/'+p;};
 if(page==='admin')return checking?<div className="mm-loading" role="status">Opening the studio…</div>:user?<AdminLayout user={user} onLogout={()=>setUser(null)} onBackToSite={()=>navigate('home')}/>:<AdminLogin onLoginSuccess={setUser} onBackToSite={()=>navigate('home')}/>;
 return <><Website page={page} onBook={service=>setBooking({service:service||''})}/>{booking&&<QuoteWizardModal isOpen initialService={booking.service} onClose={()=>setBooking(null)}/>}</>;
}
