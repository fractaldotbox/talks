const __vite__fileDeps=["assets/slidev/DrawingControls-DlJmY3qw.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-C6_B019b.js","assets/modules/unplugin-icons-CNXnRN0B.js","assets/modules/vue-CYluwPbu.js","assets/modules/shiki-HRe8g_By.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-CX0t_iEv.js","assets/index-LmSyHfx8.js","assets/monaco/bundled-types-BMw347Nk.js","assets/modules/file-saver-igGfcqei.js","assets/monaco/bundled-types-Cjcdkwd9.css","assets/index-LUMFkV-u.css","assets/DrawingPreview-CmeRNKxy.css","assets/slidev/useWakeLock-BuupMeVh.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-BEQUNaFE.js","assets/slidev/title-renderer.md_vue_type_script_setup_true_lang-De18wqEH.js","assets/slidev/context-CLLQMIBk.js","assets/useWakeLock-p-WCO-UR.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as v,a7 as E,o,c as u,H as e,b as f,e as l,f as B,i as C,g as i,af as H,y as z,k as y,ag as $,a6 as M,S as h,l as m,F as P,x as D,v as R,h as W,t as I}from"../modules/vue-CYluwPbu.js";import{a as N,l as b,m as w,s as V,n as L,h as S,w as T,o as A}from"../index-LmSyHfx8.js";import{b as O,G as U,c as j,u as F,r as G,a as K,S as X,_ as Y,o as q}from"./useWakeLock-BuupMeVh.js";import{c as k,_ as J,h as Q,j as Z}from"../monaco/bundled-types-BMw347Nk.js";import{c as ee,a as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CX0t_iEv.js";import{n as oe}from"../modules/unplugin-icons-CNXnRN0B.js";import"../modules/shiki-HRe8g_By.js";import"../modules/file-saver-igGfcqei.js";import"./IconButton.vue_vue_type_script_setup_true_lang-BEQUNaFE.js";import"./title-renderer.md_vue_type_script_setup_true_lang-De18wqEH.js";import"./context-CLLQMIBk.js";const se="/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ne=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(p,{emit:r}){const a=p,n=E(a,"modelValue",r);function d(){n.value=!1}return(_,s)=>(o(),u(H,null,[e(n)?(o(),f("div",ae,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),l("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[B(_.$slots,"default")],2)])):i("v-if",!0)],1024))}}),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),M("dev ")])])],-1),ue=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(p,{emit:r}){const n=E(p,"modelValue",r),d=z(()=>typeof k.info=="string");return(_,s)=>(o(),u(ne,{modelValue:e(n),"onUpdate:modelValue":s[0]||(s[0]=c=>$(n)?n.value=c:null),class:"px-6 py-4"},{default:y(()=>[l("div",le,[d.value?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,ie)):i("v-if",!0),re])]),_:1},8,["modelValue"]))}}),de=v({__name:"Controls",setup(p){const{isEmbedded:r}=N(),a=!k.drawings.presenterOnly&&!r.value,t=h();a&&J(()=>import("./DrawingControls-DlJmY3qw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])).then(_=>t.value=_.default);const n=h(),d=h();return(_,s)=>(o(),f(P,null,[e(a)&&t.value?(o(),u(e(t),{key:0})):i("v-if",!0),m(O),m(U),n.value?(o(),u(e(n),{key:1})):i("v-if",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(b),"onUpdate:modelValue":s[0]||(s[0]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):i("v-if",!0),e(k).info?(o(),u(ue,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):i("v-if",!0),m(j)],64))}}),ce=v({__name:"PrintStyle",setup(p){function r(a,{slots:t}){if(t.default)return R("style",t.default())}return(a,t)=>(o(),u(r,null,{default:y(()=>[M(" @page { size: "+D(e(Q))+"px "+D(e(Z))+"px; margin: 0px; } ",1)]),_:1}))}}),me={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},pe=v({__name:"PresenterMouse",setup(p){return(r,a)=>{const t=oe;return e(V).cursor?(o(),f("div",me,[m(t,{class:"absolute stroke-white dark:stroke-black",style:W({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),_e=l("div",{id:"twoslash-container"},null,-1),Ce=v({__name:"play",setup(p){const{next:r,prev:a,isPrintMode:t}=N(),{isDrawing:n}=ee(),d=I();function _(g){var x;S.value||g.button===0&&((x=g.target)==null?void 0:x.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?r():a())}F(d),G(),K();const s=z(()=>L.value||S.value),c=h();return(g,x)=>(o(),f(P,null,[e(t)?(o(),u(ce,{key:0})):i("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(A)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(T).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(q)},{default:y(()=>[m(X,{"render-context":"slide"}),m(pe)]),controls:y(()=>[e(t)?i("v-if",!0):(o(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(n)?"pointer-events-none":""]])},[m(Y,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):i("v-if",!0)],2),e(t)?i("v-if",!0):(o(),u(de,{key:1})),_e],64))}});export{Ce as default};
