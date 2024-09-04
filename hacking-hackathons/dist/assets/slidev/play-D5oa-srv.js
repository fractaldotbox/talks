const __vite__fileDeps=["assets/slidev/DrawingControls-DuhoxpSP.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-CdPxhE6G.js","assets/modules/unplugin-icons-wr4heafX.js","assets/modules/vue-BJPCO1Ie.js","assets/modules/shiki-BGhWjhif.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-CG8lHCtZ.js","assets/index-BqFL7ZR4.js","assets/index-6q20f7h2.css","assets/DrawingPreview-CmeRNKxy.css","assets/slidev/useWakeLock-D0n1HOH9.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CcYeruXd.js","assets/slidev/context-D_mQHdbc.js","assets/useWakeLock-p-WCO-UR.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as v,a7 as E,o as s,c as u,A as e,b as f,e as l,f as N,i as C,g as i,af as A,y as z,k as y,ag as $,a6 as M,O as h,l as m,F as P,x as D,v as R,h as W,t as H}from"../modules/vue-BJPCO1Ie.js";import{v as k,a as B,w as I,x as b,y as w,z as L,A as O,d as V,B as T,l as S,D as U,E as F}from"../index-BqFL7ZR4.js";import{b as G,G as j,c as K,u as X,r as Y,a as q,S as J,_ as Q,o as Z}from"./useWakeLock-D0n1HOH9.js";import{c as ee,a as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CG8lHCtZ.js";import{n as se}from"../modules/unplugin-icons-wr4heafX.js";import"../modules/shiki-BGhWjhif.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CcYeruXd.js";import"./context-D_mQHdbc.js";const oe="/talks/hacking-hackathons/dist/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ne=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:r}){const a=p,n=E(a,"modelValue",r);function d(){n.value=!1}return(_,o)=>(s(),u(A,null,[e(n)?(s(),f("div",ae,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=c=>d())}),l("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[N(_.$slots,"default")],2)])):i("v-if",!0)],1024))}}),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:oe,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),M("dev ")])])],-1),ue=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:r}){const n=E(p,"modelValue",r),d=z(()=>typeof k.info=="string");return(_,o)=>(s(),u(ne,{modelValue:e(n),"onUpdate:modelValue":o[0]||(o[0]=c=>$(n)?n.value=c:null),class:"px-6 py-4"},{default:y(()=>[l("div",le,[d.value?(s(),f("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,ie)):i("v-if",!0),re])]),_:1},8,["modelValue"]))}}),de=v({__name:"Controls",setup(p){const{isEmbedded:r}=B(),a=!k.drawings.presenterOnly&&!r.value,t=h();a&&I(()=>import("./DrawingControls-DuhoxpSP.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(_=>t.value=_.default);const n=h(),d=h();return(_,o)=>(s(),f(P,null,[e(a)&&t.value?(s(),u(e(t),{key:0})):i("v-if",!0),m(G),m(j),n.value?(s(),u(e(n),{key:1})):i("v-if",!0),d.value?(s(),u(e(d),{key:2,modelValue:e(b),"onUpdate:modelValue":o[0]||(o[0]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):i("v-if",!0),e(k).info?(s(),u(ue,{key:3,modelValue:e(w),"onUpdate:modelValue":o[1]||(o[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):i("v-if",!0),m(K)],64))}}),ce=v({__name:"PrintStyle",setup(p){function r(a,{slots:t}){if(t.default)return R("style",t.default())}return(a,t)=>(s(),u(r,null,{default:y(()=>[M(" @page { size: "+D(e(L))+"px "+D(e(O))+"px; margin: 0px; } ",1)]),_:1}))}}),me={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},pe=v({__name:"PresenterMouse",setup(p){return(r,a)=>{const t=se;return e(V).cursor?(s(),f("div",me,[m(t,{class:"absolute stroke-white dark:stroke-black",style:W({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),_e=l("div",{id:"twoslash-container"},null,-1),we=v({__name:"play",setup(p){const{next:r,prev:a,isPrintMode:t}=B(),{isDrawing:n}=ee(),d=H();function _(g){var x;S.value||g.button===0&&((x=g.target)==null?void 0:x.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?r():a())}X(d),Y(),q();const o=z(()=>T.value||S.value),c=h();return(g,x)=>(s(),f(P,null,[e(t)?(s(),u(ce,{key:0})):i("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(F)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(Z)},{default:y(()=>[m(J,{"render-context":"slide"}),m(pe)]),controls:y(()=>[e(t)?i("v-if",!0):(s(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"!opacity-100 right-0":"opacity-0 p-2",e(n)?"pointer-events-none":""]])},[m(Q,{persist:o.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(s(),u(e(c),{key:0,resize:!0})):i("v-if",!0)],2),e(t)?i("v-if",!0):(s(),u(de,{key:1})),_e],64))}});export{we as default};
