import{j as e,I as n,r as u,_ as w,u as b,f as j,g as E,R as h}from"./index-9b1725c5.js";import{u as N}from"./useTitle-bb4120d7.js";const S=({category:t})=>e.jsxs("div",{className:"flex justify-center group absolute",children:[e.jsx("div",{className:"w-28 aspect-[5/7] bg-yellow rounded-lg absolute -translate-x-[10%] -rotate-1 group-hover:-translate-x-[75%] group-hover:translate-y-[16%] group-hover:-rotate-[24deg] time-curve grid place-items-center select-none will-change-transform",children:e.jsx(n,{src:`images/${t}/diva.webp`,alt:"king bag",className:"p-3"})}),e.jsx("div",{className:"w-28 aspect-[5/7] bg-purple rounded-lg absolute rotate-2 group-hover:-translate-x-[25%] group-hover:translate-y-[8%] group-hover:-rotate-[8deg] time-curve grid place-items-center select-none will-change-transform",children:e.jsx(n,{src:`images/${t}/hero.webp`,alt:"hero notebook",className:"p-3"})}),e.jsx("div",{className:"w-28 aspect-[5/7] bg-yellow rounded-lg absolute -translate-x-[6%] -rotate-3 group-hover:translate-x-[25%] group-hover:translate-y-[8%] group-hover:rotate-[8deg] time-curve grid place-items-center select-none will-change-transform",children:e.jsx(n,{src:`images/${t}/magician.webp`,alt:"hero mug",className:"p-3"})}),e.jsx("div",{className:"w-28 aspect-[5/7] bg-purple rounded-lg absolute translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:translate-x-[75%] group-hover:translate-y-[16%] group-hover:rotate-[24deg] time-curve grid place-items-center overflow-hidden select-none will-change-transform",children:e.jsx(n,{src:`images/${t}/king.webp`,alt:"real stick",className:"p-3"})})]}),_=u.lazy(()=>w(()=>import("./lottery.component-392d1323.js"),["assets/lottery.component-392d1323.js","assets/index-9b1725c5.js","assets/index-7ec9f8e4.css","assets/lottery.component-171d1d7a.css"])),l=["t-shirt","bag","notebook","mug"],T={overlay:!1,activeCard:0,sound:{error:!1,win:!1},isDisabled:!1},C=(t,r)=>{switch(r.type){case"SET_OVERLAY":return{...t,overlay:!t.overlay};case"SET_ACTIVE_CARD":return{...t,activeCard:r.payload};case"SET_SOUND":return{...t,sound:r.payload};case"SET_DISABLED":return{...t,isDisabled:r.payload};default:return t}},A=()=>{const[t,r]=u.useReducer(C,T),{overlay:v,activeCard:c,sound:d,isDisabled:m}=t,p=u.useRef(null),[o]=b(["giveaway","products"]);N("giveaway");const i=(a=!1,s=!1)=>{r({type:"SET_SOUND",payload:{error:a,win:s}})},y=()=>{r({type:"SET_OVERLAY"})},f=a=>{a.preventDefault();const s=p.current,g=s.secret.value;g==="9999"||g==="٩٩٩٩"?(r({type:"SET_OVERLAY"}),s.reset()):r({type:"SET_SOUND",payload:{error:!0,win:!1}})},x=a=>{r({type:"SET_DISABLED",payload:!0}),setTimeout(()=>{r({type:"SET_DISABLED",payload:!1})},300);const s=a==="next"?(t.activeCard+1)%l.length:(t.activeCard-1+l.length)%l.length;r({type:"SET_ACTIVE_CARD",payload:s})};return e.jsxs("article",{className:"contain py-6 mx-auto relative",children:[e.jsx("h1",{className:"text-yellow text-center mx-auto ltr:font-bold ltr:text-lg rtl:text-2xl center mb-6 max-w-md h-7",children:o("title")}),e.jsxs("div",{className:"max-w-xs mx-auto",children:[e.jsx("div",{className:"flex justify-center",children:l.map((a,s)=>e.jsx("span",{className:`will-change-transform transition-transform ease-linear duration-[400ms] ${s!==c?"scale-0":""} ${s===(c+1)%l.length?"-translate-x-20 translate-y-24 scale-0":""} ${s===(c-1+l.length)%l.length?"translate-x-20 translate-y-24 scale-0":""}`,children:e.jsx(S,{category:a})},a))}),e.jsxs("div",{className:"mt-48 mb-8 flex justify-around rtl:flex-row-reverse px-10",children:[e.jsx(j,{className:`text-3xl text-yellow hover:text-yellow/80 cursor-pointer ${m?"pointer-events-none":""}`,onClick:()=>x("prev")}),e.jsx(E,{className:`text-3xl text-yellow hover:text-yellow/80 cursor-pointer ${m?"pointer-events-none":""}`,onClick:()=>x("next")})]})]}),e.jsxs("form",{ref:p,onSubmit:f,className:"max-w-md mx-auto",children:[["name","email","phone","secret"].map(a=>e.jsx("input",{type:a==="email"?"email":"text",name:a,placeholder:o(`form.${a}`),className:"form-input mb-4"},a)),e.jsx("button",{className:"form-button w-full cursor-pointer",children:o(o("form.submit"))})]}),v&&e.jsx(_,{categories:l,handleSound:i,setOverlay:y}),e.jsx(h,{src:"sounds/error.mp3",playing:d.error,onEnd:()=>i(!1)}),e.jsx(h,{src:"sounds/win.mp3",playing:d.win,onEnd:()=>i(void 0,!1)})]})};export{A as default};
