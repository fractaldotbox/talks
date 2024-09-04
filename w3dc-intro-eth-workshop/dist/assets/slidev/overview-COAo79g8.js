import{d as te,e as ne,_ as oe,f as le}from"../modules/unplugin-icons-xpKoNJ_K.js";import{d as G,a7 as ae,a8 as ie,t as T,a9 as se,D as U,C as ce,a0 as re,n as Q,A as c,o as a,c as g,i as S,h as z,aa as ue,ab as de,b,j as me,J as pe,y as L,O as ve,ac as fe,e as s,F as j,ad as q,k as N,x as y,g as V,l as w}from"../modules/vue-M1BTZfNP.js";import{u as he,a as ge,s as ke,c as _e,C as J,i as be,b as W,t as xe,g as X,p as ye}from"../index-Bz_hBNU-.js";import{u as we,S as Ce,_ as $e,a as De}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-DWRe-w-t.js";import{_ as K}from"./IconButton.vue_vue_type_script_setup_true_lang-C7Tudihg.js";import{_ as Se,C as Ee}from"./ClicksSlider-UMu-fxEV.js";import"../modules/shiki-IgOrI35b.js";const Me=["placeholder"],He=G({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(C,{emit:R}){const o=C,x=R,r=ae(o,"editing",x,{passive:!0}),{info:f,update:$}=we(ie(o,"no")),p=T("");let E;const{ignoreUpdates:k}=se(p,i=>{if(!r.value)return;const m=o.no;clearTimeout(E),E=setTimeout(()=>{$({note:i},m)},500)});U(()=>{var i;return(i=f.value)==null?void 0:i.note},(i="")=>{r.value||(clearTimeout(E),k(()=>{p.value=i}))},{immediate:!0,flush:"sync"});const d=T(),_=T();ce(()=>{var i;r.value&&((i=d.value)==null||i.focus())}),re(d,()=>{r.value=!1});function B(){!o.autoHeight||!d.value||!r.value||d.value.scrollHeight>d.value.clientHeight&&(d.value.style.height=`${d.value.scrollHeight}px`)}function A(i){r.value&&i.metaKey&&i.key==="s"&&(i.preventDefault(),$({note:p.value},o.no))}return U([p,r],()=>{Q(()=>{B()})},{flush:"post",immediate:!0}),(i,m)=>{var M;return c(r)?ue((a(),b("textarea",{key:1,ref_key:"inputEl",ref:d,"onUpdate:modelValue":m[2]||(m[2]=h=>p.value=h),class:S(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",o.class]),style:z([{"line-height":"1.75"},[o.style,_.value!=null?{height:`${_.value}px`}:{}]]),placeholder:C.placeholder,onKeydown:[m[3]||(m[3]=me(h=>r.value=!1,["esc"])),A]},null,46,Me)),[[de,p.value]]):(a(),g(Se,{key:0,class:S(["border-transparent border-2",[o.class,p.value?"":"opacity-25 italic select-none"]]),style:z(o.style),note:p.value||C.placeholder,"note-html":(M=c(f))==null?void 0:M.noteHTML,"clicks-context":C.clicksContext,"auto-scroll":!C.autoHeight,highlight:o.highlight,onMarkerClick:m[0]||(m[0]=(h,H)=>x("markerClick",h,H)),onMarkerDblclick:m[1]||(m[1]=(h,H)=>x("markerDblclick",h,H))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}}}),Ne={class:"h-screen w-screen of-hidden flex"},Te={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Be={class:"relative"},Ie={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},Ve=["onClick"],We={p2:"",border:"t main"},Ke={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},ze={class:"text-3xl op20 mb2"},Ae=["onDblclick"],Le={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Oe={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Re={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},Fe={class:"text-xs op50"},O=450,Ye=G({__name:"overview",setup(C){he({title:`Overview - ${ke}`});const{openInEditor:R,slides:o}=ge(),x=pe(new Map),r=T([]),f=T(null),$=L(()=>o.value.map(t=>{var e,l;return i(((l=(e=t.meta)==null?void 0:e.slide)==null?void 0:l.note)||"")})),p=L(()=>$.value.reduce((t,e)=>t+e,0)),E=L(()=>o.value.map(t=>B(t)).reduce((t,e)=>t+e,0)),k=ve(),d=new WeakMap;function _(t){return d.has(t)||d.set(t,_e(t,J)),d.get(t)}function B(t){var e,l;return((e=t.meta)==null?void 0:e.clicks)||((l=_(t))==null?void 0:l.total)}function A(t){k.value===t?k.value=void 0:k.value=t}function i(t){var e;return((e=t.match(/[\w`'\-]+/g))==null?void 0:e.length)||0}function m(t){const e=t.getBoundingClientRect(),l=20;return e.top>=0-l&&e.left>=0-l&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+l&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+l}function M(){const t=[];Array.from(x.entries()).forEach(([e,l])=>{m(l)&&t.push(e)}),r.value=t}function h(t){const e=document.createElement("a");e.target="_blank",e.href=ye+t.slice(1),e.click()}function H(t){const e=x.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Y(t,e,l){const D=_(l);D.current===e?D.current=J:D.current=e,t.preventDefault()}return fe(()=>{Q(()=>{M()})}),(t,e)=>{const l=te,D=ne,Z=oe,ee=le;return a(),b("div",Ne,[s("nav",Te,[s("div",Be,[s("div",Ie,[(a(!0),b(j,null,q(c(o),(n,v)=>{var u,I,F,P;return a(),b("div",{key:n.no,class:"relative",style:{direction:"ltr"}},[s("button",{class:S(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",r.value.includes(v)?"op100 text-primary bg-gray:5":"op20"]),onClick:Pe=>H(v)},[s("div",null,y(v+1),1)],10,Ve),(I=(u=n.meta)==null?void 0:u.slide)!=null&&I.title?(a(),b("div",{key:0,class:S(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",r.value.includes(v)?"text-primary":"text-main important-text-op-50"])},y((P=(F=n.meta)==null?void 0:F.slide)==null?void 0:P.title),3)):V("v-if",!0)])}),128))])]),s("div",We,[c(be)?(a(),g(K,{key:1,title:c(W)?"Dark mode":"Light mode","pointer-events-none":"",op50:""},{default:N(()=>[c(W)?(a(),g(l,{key:0})):(a(),g(D,{key:1}))]),_:1},8,["title"])):(a(),g(K,{key:0,title:c(W)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=n=>c(xe)())},{default:N(()=>[c(W)?(a(),g(l,{key:0})):(a(),g(D,{key:1}))]),_:1},8,["title"]))])]),s("main",{class:"flex-1 h-full of-auto",style:z(`grid-template-columns: repeat(auto-fit,minmax(${O}px,1fr))`),onScroll:M},[(a(!0),b(j,null,q(c(o),(n,v)=>(a(),b("div",{key:n.no,ref_for:!0,ref:u=>x.set(v,u),class:S(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",v===0?"pt5":""])},[s("div",Ke,[s("div",ze,y(v+1),1),w(K,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:u=>h(c(X)(n,!1))},{default:N(()=>[w(Z)]),_:2},1032,["onClick"]),V("v-if",!0)]),s("div",{class:"flex flex-col gap-2 my5",style:z({width:`${O}px`})},[s("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:u=>h(c(X)(n,!1))},[(a(),g(De,{key:n.no,width:O,class:"pointer-events-none important:[&_*]:select-none"},{default:N(()=>[w(Ce,{"clicks-context":_(n),route:n,"render-context":"overview"},null,8,["clicks-context","route"]),w($e,{page:n.no},null,8,["page"])]),_:2},1024))],40,Ae),B(n)?(a(),g(Ee,{key:0,active:k.value===n,"clicks-context":_(n),class:"w-full mt-2",onDblclick:u=>A(n),onClick:u=>k.value=n},null,8,["active","clicks-context","onDblclick","onClick"])):V("v-if",!0)],4),s("div",Le,[w(K,{title:"Edit Note",class:S(["rounded-full w-9 h-9 text-sm",f.value===n.no?"important:op0":""]),onClick:u=>f.value=n.no},{default:N(()=>[w(ee)]),_:2},1032,["class","onClick"])]),w(He,{no:n.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:k.value===n,editing:f.value===n.no,"clicks-context":_(n),onDblclick:u=>f.value!==n.no?f.value=n.no:null,"onUpdate:editing":e[1]||(e[1]=u=>f.value=null),onMarkerClick:(u,I)=>Y(u,I,n)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),$.value[v]>0?(a(),b("div",Oe,y($.value[v])+" words ",1)):V("v-if",!0)],2))),128))],36),s("div",Re,[s("div",Fe,y(c(o).length)+" slides · "+y(E.value+c(o).length-1)+" clicks · "+y(p.value)+" words ",1)])])}}});export{Ye as default};