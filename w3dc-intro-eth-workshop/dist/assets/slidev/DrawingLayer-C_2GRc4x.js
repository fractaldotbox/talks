import{d as l,t as u,ac as c,D as m,E as i,o as p,b as f,i as d,A as t}from"../modules/vue-DV_G_5Om.js";import{u as _}from"./context-14QtmzT9.js";import{c as v}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-D0MPa0bU.js";import"../index-Ck3lJGQl.js";import"../modules/shiki-DAQ-2mwD.js";const x=l({__name:"DrawingLayer",setup(g){const{drauu:e,drawingEnabled:n,loadCanvas:s}=v(),r=_().$scale,a=u();return c(()=>{e.mount(a.value,a.value.parentElement),m(r,o=>e.options.coordinateScale=1/o,{immediate:!0}),s()}),i(()=>{e.unmount()}),(o,w)=>(p(),f("svg",{ref_key:"svg",ref:a,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!t(n),"touch-none":t(n)}])},null,2))}});export{x as default};