import{Q as m,y as f,b as h,e,a6 as s,x as r,H as x,c as p,k as u,g as i,r as v,o as l,p as g,a as k}from"../modules/vue-CYluwPbu.js";import{_ as S,a as y}from"../index-LmSyHfx8.js";import"../monaco/bundled-types-BMw347Nk.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-HRe8g_By.js";const N=o=>(g("data-v-d53ab9c2"),o=o(),k(),o),w={class:"grid justify-center text-center pt-15% gap-5"},B=N(()=>e("h1",{class:"text-9xl font-light"}," 404 ",-1)),I={class:"text-2xl"},R={class:"op-60"},b={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},C={__name:"404",setup(o){const{currentRoute:n}=m(),{total:d}=y(),a=f(()=>{const c=n.value.path.match(/\d+/);if(c){const t=+c[0];if(t>0&&t<=d.value)return t}return null});return(_,c)=>{const t=v("RouterLink");return l(),h("div",w,[e("div",null,[B,e("p",I,[s(" Page "),e("code",R,r(x(n).path),1),s(" not found ")])]),e("div",b,[a.value!==1?(l(),p(t,{key:0,to:"/",class:"page-link"},{default:u(()=>[s(" Go Home ")]),_:1})):i("v-if",!0),a.value?(l(),p(t,{key:1,to:`/${a.value}`,class:"page-link"},{default:u(()=>[s(" Go to Slide "+r(a.value),1)]),_:1},8,["to"])):i("v-if",!0)])])}}},D=S(C,[["__scopeId","data-v-d53ab9c2"]]);export{D as default};
