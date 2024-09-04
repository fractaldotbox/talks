import{M as E,N as I}from"../modules/unplugin-icons-C-w51ylo.js";import{d as L,t as H,aD as P,C as S,ac as V,y as x,aE as q,o as c,b as A,f as M,A as h,c as k,g as T,i as z,h as R,k as m,l as W,m as K,q as O,s as U,e,a6 as f}from"../modules/vue-8M7_bU4y.js";import{v as B,ag as j,C as X,ah as F,ai as G}from"../index-BH09lyd2.js";import{u as $,f as J}from"./context-BIdlf2JM.js";import{_ as Q}from"./two-cols.vue_vue_type_script_setup_true_lang-D1IhCm_7.js";import"../modules/shiki-BpHt4X3T.js";const Y=["title"],Z=L({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:B.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(_){const t=_,{$clicksContext:o}=$(),a=H(),u=j();P(()=>{o.unregister(u)}),S(()=>{var s;(s=a.value)==null||s.classList.toggle("slidev-code-line-numbers",t.lines)}),V(()=>{var r;if(!o||!((r=t.ranges)!=null&&r.length))return;const s=o.calculateSince(t.at,t.ranges.length-1);o.register(u,s);const i=x(()=>s?Math.max(0,o.current-s.start+1):X),l=x(()=>t.finally==="last"?t.ranges.at(-1):t.finally.toString());S(()=>{if(!a.value)return;let d=t.ranges[i.value]??l.value;const v=d==="hide";a.value.classList.toggle(F,v),v&&(d=t.ranges[i.value+1]??l.value);const C=a.value.querySelector(".shiki"),b=Array.from(C.querySelectorAll("code > .line")),N=b.length;if(G(d,N,t.startLine,n=>[b[n]]),t.maxHeight){const n=Array.from(C.querySelectorAll(".line.highlighted"));n.reduce((w,D)=>D.offsetHeight+w,0)>a.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:y}=q();function g(){var i,l;const s=(l=(i=a.value)==null?void 0:i.querySelector(".slidev-code"))==null?void 0:l.textContent;s&&y(s)}return(s,i)=>{const l=E,r=I;return c(),A("div",{ref_key:"el",ref:a,class:z(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.lines}]),style:R({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0,"--start":t.startLine})},[M(s.$slots,"default"),h(B).codeCopy?(c(),A("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:h(p)?"Copied":"Copy",onClick:i[0]||(i[0]=d=>g())},[h(p)?(c(),k(l,{key:0,class:"p-2 w-8 h-8"})):(c(),k(r,{key:1,class:"p-2 w-8 h-8"}))],8,Y)):T("v-if",!0)],6)}}}),ee=e("h1",null,"in your browser: window.ethereum",-1),te=e("ul",null,[e("li",null,[e("p",null,[f("On "),e("a",{href:"https://app.uniswap.org/",target:"_blank"},"Uniswap"),f(" with metamask")]),e("ul",null,[e("li",null,'Try in Dev Console "window.ethereum"'),e("li",null,"On incognito?"),e("li",null,"Before & after unlocking metamask?"),e("li",null,"Ledger unplugged?")])]),e("li",null,[e("p",null,[e("a",{href:"https://eips.ethereum.org/EIPS/eip-1193",target:"_blank"},"EIP-1193")])]),e("li",null,[e("p",null,"Metamask injected the window.ethereum provider")]),e("li",null,[e("p",null,[e("a",{href:"https://docs.walletconnect.com/advanced/providers/ethereum",target:"_blank"},"Wallet Connect provider")])])],-1),se=e("ul",null,[e("li",null,"Try running the sample code in the spec, e.g.")],-1),ie=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-ts"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"ethereum")]),f(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  ."),e("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"request"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({ "),e("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"method"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"eth_accounts"),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," })")])])],-1),de={__name:"64",setup(_){const{$slidev:t,$nav:o,$clicksContext:a,$clicks:u,$page:p,$renderContext:y,$frontmatter:g}=$();return(s,i)=>{const l=Z;return c(),k(Q,O(U(h(J)(h(g),63))),{right:m(r=>[se,W(l,K({},{ranges:[]}),{default:m(()=>[ie]),_:1},16)]),default:m(()=>[ee,te]),_:1},16)}}};export{de as default};
