import{A as h,B as f}from"../modules/unplugin-icons-B4cTqB5L.js";import{d as v,y as b,o as d,b as g,e as n,f as k,h as x,c as $,k as y,A as a,l as c,q as C,s as w}from"../modules/vue-DV_G_5Om.js";import{u,f as B}from"./context-14QtmzT9.js";import"../index-Ck3lJGQl.js";import"../modules/shiki-DAQ-2mwD.js";function l(e){return e.startsWith("/")?"/talks/w3dc-intro-eth-workshop/dist"+e.slice(1):e}function E(e,s=!1){const t=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${l(e)})`:`url("${l(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const P={class:"my-auto w-full"},S=v({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const s=e,t=b(()=>E(s.background,!0));return(o,r)=>(d(),g("div",{class:"slidev-layout cover text-center",style:x(t.value)},[n("div",P,[k(o.$slots,"default")])],4))}}),T=n("h1",null,"W3DC - Intro to ETH Workshop",-1),z=n("p",null,"Meetup of Technical audience around Eth ecosystems during Token2049",-1),A={class:"abs-br m-6 flex gap-2"},H={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},D={__name:"1",setup(e){const{$slidev:s,$nav:t,$clicksContext:o,$clicks:r,$page:I,$renderContext:O,$frontmatter:p}=u();return(W,i)=>{const _=h,m=f;return d(),$(S,C(w(a(B)(a(p),0))),{default:y(()=>[T,z,n("div",A,[n("button",{onClick:i[0]||(i[0]=G=>a(s).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[c(_)]),n("a",H,[c(m)])])]),_:1},16)}}};export{D as default};
