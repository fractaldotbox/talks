import{d as u,y as p,o as l,b as m,e as i,f,h as _,c as h,k as v,q as k,s as g,A as a}from"../modules/vue-DRUB48JE.js";import{u as d,p as x,f as y}from"./context-CU-i0mvH.js";import{a9 as n}from"../index-wP6QFPNW.js";import"../modules/shiki-ViNHl0or.js";function c(e){return e.startsWith("/")?"/talks/w3dc-pre-devcon-workshop/dist"+e.slice(1):e}function w(e,s=!1){const t=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${c(e)})`:`url("${c(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const B={class:"my-auto w-full"},b=u({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){d();const s=e,t=p(()=>w(s.background,!0));return(o,r)=>(l(),m("div",{class:"slidev-layout cover text-center",style:_(t.value)},[i("div",B,[f(o.$slots,"default")])],4))}}),C=i("h1",null,"W3DC Build on ETH workshop II",-1),I={__name:"1",setup(e){return x(n),d(),(s,t)=>(l(),h(b,k(g(a(y)(a(n),0))),{default:v(()=>[C]),_:1},16))}};export{I as default};
