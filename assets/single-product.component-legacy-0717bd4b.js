System.register(["./index-legacy-07ae37ea.js","./useTitle-legacy-753332a2.js"],(function(t,e){"use strict";var l,s,a,r,o,c,n,i,x;return{setters:[t=>{l=t.a,s=t.r,a=t.S,r=t.b,o=t.j,c=t.F,n=t.c,i=t.I},t=>{x=t.u}],execute:function(){t("default",(()=>{const{productName:t}=l(),{waferProducts:e}=s.useContext(a),d=r(),m=e.findIndex((e=>e.id===t)),h=e[m];x(h.id);const u=t=>{const l="next"===t?(m+1)%e.length:(m-1+e.length)%e.length;d(`/products/${e[l].id}`)};return h&&o.jsxs("article",{className:"overflow-hidden relative py-8 md:py-6 h-[calc(100vh-70px)]",children:[o.jsx(c,{className:"select-none text-4xl cursor-pointer text-yellow hover:text-yellow/80 focus:outline-0  absolute z-20 top-1/4 md:top-1/2 left-0 -translate-y-1/2",onClick:()=>u("prev")}),o.jsx(n,{className:"select-none event text-4xl cursor-pointer text-yellow hover:text-yellow/80 focus:outline-0  absolute z-20 top-1/4 md:top-1/2 right-0 -translate-y-1/2 translat",onClick:()=>u("next")}),o.jsxs("section",{className:"relative z-10 contain",children:[o.jsx(i,{src:h.coverUrl,alt:`${h.name} box`,className:"select-none h-28 sm:h-36 md:h-48 rotate-6 mx-auto my-10 hover:scale-110 hover:rotate-3 will-change-transform duration-500 shadow-md"},h.id),o.jsx("p",{className:"max-w-md text-white md:mx-auto md:text-xl rtl:text-2xl",children:h.desc})]}),o.jsx(i,{src:h.characterUrl,alt:`${h.name} character`,className:"absolute bottom-0  ltr:right-0 rtl:left-0 ltr:translate-x-[40%] rtl:-translate-x-[40%] opacity-20 h-[80%] sm:h-[90%] object-contain"},h.id+"_")]})}))}}}));
