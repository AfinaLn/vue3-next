import{d as u,r as v,o as d,c as p,a as n,t as m,p as g,b as y,e as l,f as b,g as k,h as x,i as S,j as V,k as E}from"./vendor.558d5d3d.js";const $=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};$();var L="./assets/logo.03d6d6da.png";var H=(t,s)=>{const a=t.__vccOpts||t;for(const[o,e]of s)a[o]=e;return a};const i=t=>(g("data-v-5fd84752"),t=t(),y(),t),I=i(()=>n("p",null,[l(" Recommended IDE setup: "),n("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),l(" + "),n("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),O=i(()=>n("p",null,[l("See "),n("code",null,"README.md"),l(" for more information.")],-1)),j=i(()=>n("p",null,[n("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),l(" | "),n("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),A=i(()=>n("p",null,[l(" Edit "),n("code",null,"components/HelloWorld.vue"),l(" to test hot module replacement. ")],-1)),D=u({props:{msg:null},setup(t){const s=v(0);return(a,o)=>(d(),p("div",null,[n("h1",null,m(t.msg),1),I,O,j,n("button",{type:"button",onClick:o[0]||(o[0]=e=>s.value++)},"count is: "+m(s.value),1),A]))}});var N=H(D,[["__scopeId","data-v-5fd84752"]]);const P=n("img",{alt:"Vue logo",src:L},null,-1),C=u({setup(t){return(s,a)=>(d(),p("div",null,[P,b(N,{msg:"Hello Vue 3 + TypeScript + Vita"})]))}}),R="modulepreload",_={},W="./",w=function(s,a){return!a||a.length===0?s():Promise.all(a.map(o=>{if(o=`${W}${o}`,o in _)return;_[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":R,e||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),e)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",h)})})).then(()=>s())},B={},T={},q=[{path:"/",name:"Home",component:B},{path:"/vuex",name:"Vuex",component:T},{path:"/axios",name:"Axios",component:()=>w(()=>import("./axios.ddfba3bc.js"),[])}],F=k({history:x(),routes:q}),K={count:0};var M=S({state(){return K},mutations:{increment(t){t.count++}},actions:{increment(t){t.commit("increment")}},getters:{double(t){return 2*t.count}}});V(C).use(F).use(M).use(E).mount("#app");
