import{r as l,_ as i,a as d,S as m,b as h,j as e,F as u,c as p}from"./index-ddfbd658.js";import{u as v}from"./useTitle-d16d7da9.js";const f=l.lazy(()=>i(()=>import("./product-not-found.component-ae62e692.js"),["assets/product-not-found.component-ae62e692.js","assets/index-ddfbd658.js","assets/index-1207f3df.css","assets/useTitle-d16d7da9.js"])),j=()=>{const{productName:n}=d(),{waferProducts:a}=l.useContext(m),c=h(),o=a.findIndex(r=>(r==null?void 0:r.id)===n),t=a[o];v(t==null?void 0:t.id);const s=r=>{const x=r==="next"?(o+1)%a.length:(o-1+a.length)%a.length;c(`/products/${a[x].id}`)};return t?e.jsxs("article",{className:"overflow-hidden relative py-8 md:py-6 h-[calc(100vh-70px)]",children:[e.jsx(u,{className:"select-none text-4xl cursor-pointer dark:text-yellow dark:hover:text-yellow/80 text-purple hover:text-purple/80 focus:outline-0  absolute z-20 top-1/4 md:top-1/2 left-0 -translate-y-1/2",onClick:()=>s("prev")}),e.jsx(p,{className:"select-none event text-4xl cursor-pointer dark:text-yellow dark:hover:text-yellow/80 text-purple hover:text-purple/80 focus:outline-0  absolute z-20 top-1/4 md:top-1/2 right-0 -translate-y-1/2 translat",onClick:()=>s("next")}),e.jsxs("section",{className:"relative z-10 contain",children:[e.jsx("img",{src:t.coverUrl,alt:`${t.name} box`,className:"select-none h-28 sm:h-36 md:h-48 rotate-6 mx-auto my-10 hover:scale-110 hover:rotate-3 will-change-transform duration-500 shadow-md"},t.id),e.jsx("p",{className:"max-w-md dark:text-white text-black ltr:dark:font-normal ltr:font-bold md:mx-auto md:text-xl rtl:text-2xl",children:t.desc})]}),e.jsx("img",{src:t.characterUrl,alt:`${t.name} character`,className:"absolute bottom-0  ltr:right-0 rtl:left-0 ltr:translate-x-[40%] rtl:-translate-x-[40%] dark:opacity-20 opacity-40 h-[80%] sm:h-[90%] object-contain"},t.id+"_")]}):e.jsx(f,{waferProducts:a})};export{j as default};
