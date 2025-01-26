import{_ as v}from"./DCxEjjTS.js";import $ from"./R084upHM.js";import{f as b,m as A,ae as T,ax as M,c as _,R as N,j as C,o as d,a as e,b as o,w as r,d as u,t as k,g as i,z as I,q as x,ay as F,p as z,h as y,s as g,A as B,y as D,l as w,ac as R}from"./D0_cRuzV.js";import{_ as S}from"./DlAUqK2U.js";import"./KHrQAPUS.js";const O=Symbol.for("nuxt:client-only"),V=b({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(m,{slots:t,attrs:s}){const c=A(!1);return T(()=>{c.value=!0}),M(O,!0),n=>{var f;if(c.value)return(f=t.default)==null?void 0:f.call(t);const l=t.fallback||t.placeholder;if(l)return l();const a=n.fallback||n.placeholder||"",p=n.fallbackTag||n.placeholderTag||"span";return _(p,s,a)}}}),W=()=>N("color-mode").value,j={class:"py-5 border-b dark:border-gray-800 font-semibold"},q={class:"flex px-6 container max-w-5xl justify-between mx-auto items-baseline"},H={class:"flex items-baseline space-x-5"},P={class:"text-base sm:text-2xl font-bold"},E={class:"flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg"},G={title:"About Me"},Q=b({__name:"header",setup(m){const t=W();function s(l){t.preference=l}const c=C();function n(l){return c.path.startsWith(l)}return(l,a)=>{const p=v,f=$,h=V;return d(),_("div",j,[e("div",q,[e("ul",H,[e("li",P,[o(p,{to:"/",class:x({underline:(l._.provides[F]||l.$route).path==="/"})},{default:r(()=>[u(k(i(I).homeTitle),1)]),_:1},8,["class"])])]),e("ul",E,[e("li",null,[o(p,{to:"/blogs",class:x({underline:n("/blogs")})},{default:r(()=>a[2]||(a[2]=[u(" Blogs ")])),_:1},8,["class"])]),e("li",null,[o(p,{to:"/categories",class:x({underline:n("/categories")})},{default:r(()=>a[3]||(a[3]=[u(" Categories ")])),_:1},8,["class"])]),e("li",G,[o(p,{to:"/about","aria-label":"About me",class:x({underline:(l._.provides[F]||l.$route).path==="/about"})},{default:r(()=>a[4]||(a[4]=[u(" About ")])),_:1},8,["class"])]),e("li",null,[o(h,null,{fallback:r(()=>[o(f,{name:"svg-spinners:180-ring",size:"20"})]),default:r(()=>[i(t).value==="light"?(d(),_("button",{key:0,name:"light-mode",title:"Light",class:"hover:scale-110 transition-all ease-out hover:cursor-pointer",onClick:a[0]||(a[0]=L=>s("dark"))},[o(f,{name:"icon-park:moon",size:"20"})])):z("",!0),i(t).value==="dark"?(d(),_("button",{key:1,name:"dark-mode",title:"Dark",class:"hover:scale-110 transition-all ease-out hover:cursor-pointer",onClick:a[1]||(a[1]=L=>s("light"))},[o(f,{name:"noto:sun",size:"20"})])):z("",!0)]),_:1})])])])])}}}),J={class:"py-2 dark:text-zinc-300"},K=b({__name:"site",setup(m){return(t,s)=>(d(),_("div",null,[s[0]||(s[0]=e("p",{class:"text-black dark:text-zinc-300 text-base py-1 font-semibold"},"About This Site",-1)),e("p",J,k(i(y).aboutTheSite),1)]))}}),U={class:"text-black dark:text-zinc-300 text-2xl py-1 font-semibold"},X={class:"py-2 dark:text-zinc-300"},Y={class:"my-3 space-x-3 pb-3"},Z=b({__name:"developer",setup(m){return(t,s)=>{const c=$,n=v;return d(),_("div",null,[e("p",U,k(i(y).author),1),e("p",X,k(i(y).aboutAuthor),1),e("div",Y,[o(n,{to:i(g).githubLink,target:"_blank",class:"p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]","aria-label":"Github"},{default:r(()=>[o(c,{name:"fa:github",size:"1em"})]),_:1},8,["to"]),o(n,{to:i(g).linkedinLink,target:"_blank",class:"p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]","aria-label":"LinkedIn"},{default:r(()=>[o(c,{name:"fa:linkedin-square",size:"1em"})]),_:1},8,["to"]),o(n,{to:i(g).twitterLink,target:"_blank",class:"p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]","aria-label":"Twitter"},{default:r(()=>[o(c,{name:"fa:twitter-square",size:"1em"})]),_:1},8,["to"]),o(n,{to:i(g).stackoverflowLink,target:"_blank",class:"p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]","aria-label":"StackOverflow"},{default:r(()=>[o(c,{name:"fa:stack-overflow",size:"1em"})]),_:1},8,["to"])])])}}}),tt={},et={class:"flex flex-col dark:text-zinc-300 my-5 md:my-0 md:justify-self-center"};function ot(m,t){const s=v;return d(),_("div",et,[t[4]||(t[4]=e("p",{class:"text-black dark:text-zinc-300 text-base font-semibold"},"Quick Link",-1)),o(s,{to:"/",class:"hover:underline"},{default:r(()=>t[0]||(t[0]=[u(" Home ")])),_:1}),o(s,{to:"/blogs",class:"hover:underline"},{default:r(()=>t[1]||(t[1]=[u(" Blogs ")])),_:1}),o(s,{to:"/categories",class:"hover:underline"},{default:r(()=>t[2]||(t[2]=[u(" Categories ")])),_:1}),o(s,{to:"/about",class:"hover:underline"},{default:r(()=>t[3]||(t[3]=[u(" About Me ")])),_:1})])}const st=S(tt,[["render",ot]]),nt={class:"dark:text-zinc-300"},at=["href"],rt=b({__name:"connect",setup(m){return(t,s)=>(d(),_("div",null,[s[0]||(s[0]=e("p",{class:"text-black dark:text-zinc-300 text-base font-semibold"},"Connect With Me",-1)),e("p",nt,k(i(y).authorInterest),1),e("a",{href:`mailto: ${i(B).mailAddress}`,class:"block text-center w-full bg-sky-700 p-2 rounded-lg text-[#F1F2F4] mt-3 text-sm"}," Sent Mail ",8,at)]))}}),lt={class:"py-5 border-t dark:border-gray-800 mt-5 text-zinc-700 dark:text-zinc-300"},it={class:"px-6 container max-w-5xl mx-auto"},ct={class:"grid grid-cols-1 md:grid-cols-3"},dt={class:"border-t dark:border-gray-800 mt-5 text-center p-2"},ut={href:"/rss.xml","aria-label":"Website RSS Feed"},_t={class:"px-3"},mt=b({__name:"footer",setup(m){const t=C(),s=D(()=>t.fullPath.replace("/",""));return(c,n)=>{const l=K,a=Z,p=st,f=rt,h=$;return d(),_("div",lt,[e("div",it,[e("div",ct,[i(s)==="about"?(d(),w(l,{key:0})):(d(),w(a,{key:1})),o(p),o(f)]),e("div",dt,[n[0]||(n[0]=u(" © 2020-2024 No Right is reserved. Who cares 🤷‍♂️? It's ")),n[1]||(n[1]=e("a",{href:"https://github.com/nurriyad/blog",target:"_blank",rel:"nofollow",class:"underline"},"open source",-1)),n[2]||(n[2]=u(" anyway. ")),e("a",ut,[e("span",_t,[o(h,{name:"bi:rss-fill"})])])])])])}}}),pt={},ft={class:"gd-container font-spacegrotesk"},bt={class:"fixed w-full bg-[#F1F2F4] dark:bg-slate-950 z-10"};function kt(m,t){const s=Q,c=mt;return d(),_("div",ft,[e("header",bt,[o(s)]),e("main",null,[t[0]||(t[0]=e("div",{class:"p-9"},null,-1)),R(m.$slots,"default",{},void 0,!0)]),e("footer",null,[o(c)])])}const $t=S(pt,[["render",kt],["__scopeId","data-v-6b416664"]]);export{$t as default};
