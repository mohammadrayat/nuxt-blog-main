import{f as i,y as o,o as c,l as h,g as a,ao as u,a1 as f,O as l,n as p,a2 as d}from"./D0_cRuzV.js";import{_ as m}from"./ouOvWoMh.js";const S=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,n=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=f(l(p().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return d(e,t.src)}return t.src});return(s,e)=>(c(),h(u(a(m)),{src:a(n),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
