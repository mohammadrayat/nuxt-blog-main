import{g as d,L as D,j as y,M as H,u as S,n as g,f as _,N as b,O as j,P as c}from"./D0_cRuzV.js";import q from"./Gbw14hDB.js";import v from"./B8V5eFid.js";import"./BfhMvo41.js";import"./Dym_awWQ.js";import"./CxYJgpPD.js";import"./C2jPFxUH.js";import"./BwboQMKi.js";const a=(p,s=y())=>{const e=d(p),f=g();D(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),f.public.content.host;const u=(t==null?void 0:t.description)||(n==null?void 0:n.description);u&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:u}),t!=null&&t.image||(n==null||n.image),H(()=>S(t))},{immediate:!0})},x=_({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=b(),{tag:f,excerpt:m,path:n,query:t,head:r}=p,u=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||j(y().path),find:"one"},C=(i,o)=>c("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return c(v,l,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:w})=>{var h;return u&&a(i),(h=e.default)==null?void 0:h.call(e,{doc:i,refresh:o,isPartial:w,excerpt:m,...this.$attrs})}:({data:i})=>(u&&a(i),c(q,{value:i,excerpt:m,tag:f,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):C("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||c("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||c("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),I=x;export{I as default};
