import{d as b,u as R,e as f,i as g,r as h,c as k,b as t,t as a,a as w,w as x,o as V,l as y,_ as B}from"./index-d7cd13da.js";import{a as C}from"./OmdbService-b1192f50.js";const D={class:"about"},N=["src","alt"],T=b({__name:"AboutView",setup(A){const p=R(),e=f();return g(()=>{C(p.params.id.toString()).then(l=>{e.value=l,console.log(l)})}),(l,G)=>{var o,n,s,u,i,r,c,_,d,v;const m=h("RouterLink");return V(),k("div",D,[t("h3",null,a((o=e.value)==null?void 0:o.Title),1),t("p",null,a((n=e.value)==null?void 0:n.Plot),1),t("ul",null,[t("li",null,"Runtime: "+a((s=e.value)==null?void 0:s.Runtime),1),t("li",null,"Genre: "+a((u=e.value)==null?void 0:u.Genre),1),t("li",null,"Year: "+a((i=e.value)==null?void 0:i.Year),1),t("li",null,"Director: "+a((r=e.value)==null?void 0:r.Director),1),t("li",null,"Rating: "+a((c=e.value)==null?void 0:c.imdbRating),1),t("li",null,"Rated: "+a((_=e.value)==null?void 0:_.Rated),1)]),t("img",{src:(d=e.value)==null?void 0:d.Poster,alt:(v=e.value)==null?void 0:v.Title,width:"200"},null,8,N),w(m,{to:"/"},{default:x(()=>[y("take me back")]),_:1})])}}});const M=B(T,[["__scopeId","data-v-d8b9a304"]]);export{M as default};
