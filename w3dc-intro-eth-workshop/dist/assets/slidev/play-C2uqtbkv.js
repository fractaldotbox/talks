const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-GuI0pvcT.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-DIMpKi1B.js","assets/modules/unplugin-icons-B4cTqB5L.js","assets/modules/vue-DV_G_5Om.js","assets/modules/shiki-DAQ-2mwD.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-D0MPa0bU.js","assets/index-Ck3lJGQl.js","assets/index-4vHxiaAS.css","assets/DrawingPreview-4pyxlqgN.css","assets/slidev/useWakeLock-D29SY5cE.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CLfnsmgG.js","assets/slidev/context-14QtmzT9.js","assets/useWakeLock-CGy-I0RI.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as _,a7 as M,o as s,c as d,A as e,b as v,e as i,f as W,i as C,g as n,af as A,y as D,k as y,ag as E,a6 as P,O as h,l as p,F as B,x as z,v as H,h as R,t as T,ah as I}from"../modules/vue-DV_G_5Om.js";import{v as k,a as N,w as L,x as w,y as b,z as O,A as F,d as V,B as S,D as G,E as U,F as j,l as $,G as K}from"../index-Ck3lJGQl.js";import{b as X,G as Y,c as q,u as J,r as Q,a as Z,S as ee,_ as te,o as se}from"./useWakeLock-D29SY5cE.js";import{c as oe,a as ae}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-D0MPa0bU.js";import{n as le}from"../modules/unplugin-icons-B4cTqB5L.js";import"../modules/shiki-DAQ-2mwD.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CLfnsmgG.js";import"./context-14QtmzT9.js";const ie="/talks/w3dc-intro-eth-workshop/dist/assets/logo-BYkHSa_O.png",ne={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},re=_({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:r}){const a=m,l=M(a,"modelValue",r);function u(){l.value=!1}return(f,o)=>(s(),d(A,null,[e(l)?(s(),v("div",ne,[i("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=c=>u())}),i("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[W(f.$slots,"default")],2)])):n("v-if",!0)],1024))}}),de={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ue=["innerHTML"],ce=i("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[i("div",{class:"flex gap-1 children:my-auto"},[i("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),i("img",{class:"w-5 h-5",src:ie,alt:"Slidev logo"}),i("div",{style:{color:"#2082A6"}},[i("b",null,"Sli"),P("dev ")])])],-1),pe=_({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:r}){const l=M(m,"modelValue",r),u=D(()=>typeof k.info=="string");return(f,o)=>(s(),d(re,{modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=c=>E(l)?l.value=c:null),class:"px-6 py-4"},{default:y(()=>[i("div",de,[u.value?(s(),v("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,ue)):n("v-if",!0),ce])]),_:1},8,["modelValue"]))}}),me=_({__name:"Controls",setup(m){const{isEmbedded:r}=N(),a=!k.drawings.presenterOnly&&!r.value,t=h();a&&L(()=>import("./DrawingControls-GuI0pvcT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(f=>t.value=f.default);const l=h(),u=h();return(f,o)=>(s(),v(B,null,[e(a)&&t.value?(s(),d(e(t),{key:0})):n("v-if",!0),p(X),p(Y),l.value?(s(),d(e(l),{key:1})):n("v-if",!0),u.value?(s(),d(e(u),{key:2,modelValue:e(w),"onUpdate:modelValue":o[0]||(o[0]=c=>E(w)?w.value=c:null)},null,8,["modelValue"])):n("v-if",!0),e(k).info?(s(),d(pe,{key:3,modelValue:e(b),"onUpdate:modelValue":o[1]||(o[1]=c=>E(b)?b.value=c:null)},null,8,["modelValue"])):n("v-if",!0),p(q)],64))}}),fe=_({__name:"PrintStyle",setup(m){function r(a,{slots:t}){if(t.default)return H("style",t.default())}return(a,t)=>(s(),d(r,null,{default:y(()=>[P(" @page { size: "+z(e(O))+"px "+z(e(F))+"px; margin: 0px; } ",1)]),_:1}))}}),ve={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},_e=_({__name:"PresenterMouse",setup(m){return(r,a)=>{const t=le;return e(V).cursor?(s(),v("div",ve,[p(t,{class:"absolute stroke-white dark:stroke-black",style:R({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),ge=i("div",{id:"twoslash-container"},null,-1),$e=_({__name:"play",setup(m){const{next:r,prev:a,isPrintMode:t}=N(),{isDrawing:l}=oe(),u=T();function f(g){var x;$.value||g.button===0&&((x=g.target)==null?void 0:x.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?r():a())}J(u),Q(),Z(),I(D(()=>`
vite-error-overlay {
  --width: calc(100vw - ${S.value?0:G.value}px);
  --height: calc(100vh - ${S.value?U.value:0}px);
  position: fixed;
  left: 0;
  top: 0;
  width: calc(var(--width) / var(--slidev-slide-scale));
  height: calc(var(--height) / var(--slidev-slide-scale));
  transform-origin: top left;
  transform: scale(var(--slidev-slide-scale));
}`));const o=D(()=>j.value||$.value),c=h();return(g,x)=>(s(),v(B,null,[e(t)?(s(),d(fe,{key:0})):n("v-if",!0),i("div",{id:"page-root",ref_key:"root",ref:u,class:C(["grid",e(S)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(ae,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(K).width.value:void 0,"is-main":"",onPointerdown:f,onContextmenu:e(se)},{default:y(()=>[p(ee,{"render-context":"slide"}),p(_e)]),controls:y(()=>[e(t)?n("v-if",!0):(s(),v("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[o.value?"!opacity-100 right-0":"opacity-0 p-2",e(l)?"pointer-events-none":""]])},[p(te,{persist:o.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e($)?(s(),d(e(c),{key:0,resize:!0})):n("v-if",!0)],2),e(t)?n("v-if",!0):(s(),d(me,{key:1})),ge],64))}});export{$e as default};
