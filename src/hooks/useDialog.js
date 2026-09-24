import {useEffect,useRef} from 'react';
export default function useDialog(ref,onClose,active=true){
 const close=useRef(onClose);close.current=onClose;
 useEffect(()=>{if(!active||!ref.current)return;const el=ref.current,previous=document.activeElement,overflow=document.body.style.overflow;document.body.style.overflow='hidden';
 const controls=()=>[...el.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]')].filter(x=>x.getClientRects().length);
 controls()[0]?.focus();const key=e=>{if(e.key==='Escape'){e.preventDefault();close.current();}if(e.key==='Tab'){const xs=controls(),first=xs[0],last=xs.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}};el.addEventListener('keydown',key);return()=>{document.body.style.overflow=overflow;el.removeEventListener('keydown',key);previous?.focus();};},[active,ref]);
}