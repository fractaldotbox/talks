import{d as m,M as f,y as h,r as x,o as n,b as v,e,a6 as a,x as r,A as g,c as p,k as u,g as d,p as k,a as S}from"../modules/vue-DV_G_5Om.js";import{a as b,_ as y}from"../index-BbfGzEun.js";import"../modules/shiki-DAQ-2mwD.js";const N=o=>(k("data-v-7b9c85b0"),o=o(),S(),o),w={class:"grid justify-center text-center pt-15% gap-5"},B=N(()=>e("h1",{class:"text-9xl font-light"}," 404 ",-1)),C={class:"text-2xl"},I={class:"op-60"},R={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},V=m({__name:"404",setup(o){const{currentRoute:l}=f(),{total:i}=b(),s=h(()=>{const c=l.value.path.match(/\d+/);if(c){const t=+c[0];if(t>0&&t<=i.value)return t}return null});return(_,c)=>{const t=x("RouterLink");return n(),v("div",w,[e("div",null,[B,e("p",C,[a(" Page "),e("code",I,r(g(l).path),1),a(" not found ")])]),e("div",R,[s.value!==1?(n(),p(t,{key:0,to:"/",class:"page-link"},{default:u(()=>[a(" Go Home ")]),_:1})):d("v-if",!0),s.value?(n(),p(t,{key:1,to:`/${s.value}`,class:"page-link"},{default:u(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):d("v-if",!0)])])}}}),A=y(V,[["__scopeId","data-v-7b9c85b0"]]);export{A as default};