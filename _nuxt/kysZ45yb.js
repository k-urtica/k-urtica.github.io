import{_ as L,a as $}from"./B_NIkgir.js";import{m as z,a as C,b as T,c as j,d as I,e as N,f as D,g as J,h as V,i as A,j as B,k as F,l as P,_ as w,n as H,o as G}from"./GnasKPPN.js";import{d as f,o as s,c as n,F as g,r as h,a as t,b as e,t as d,e as M,u as k,f as S,w as x,g as a,h as O,i as c,_ as E}from"./CgZjrU6s.js";const K={class:"grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"},W={class:"mt-3 text-slate-100"},Q={class:"mt-1 flex justify-center text-yellow-200/90"},R=f({__name:"SkillLists",setup(b){const l=[{icon:C,title:"Vue.js",rating:4,color:"#41b883"},{icon:T,title:"NuxtJS",rating:5,color:"#00DC82"},{icon:j,title:"Vuetify",rating:5,color:"#7BC6FF"},{icon:I,title:"TailwindCSS",rating:3,color:"#38bdf8"},{icon:N,title:"HTML/CSS",rating:4,color:"#e44d26"},{icon:D,title:"JavaScript",rating:3,color:"#f0db4f"},{icon:J,title:"TypeScript",rating:3,color:"#007acc"},{icon:V,title:"Python",rating:3,color:"#306998"},{icon:A,title:"Java/Spring",rating:5,color:"#f89820"},{icon:B,title:"SQL",rating:2,color:"#bae6fd"},{icon:F,title:"Docker",rating:3,color:"#0db7ed"},{icon:P,title:"AWS",rating:3,color:"#ff9900"}];return(y,_)=>{const i=w;return s(),n("ul",K,[(s(),n(g,null,h(l,({title:o,color:r,icon:m,rating:u})=>t("li",{key:o,class:"flex flex-col rounded-xl border border-slate-200/20 bg-slate-700/30 p-4 text-center shadow-lg shadow-gray-500/10"},[e(i,{icon:m,color:r,size:"36",class:"mx-auto"},null,8,["icon","color"]),t("h3",W,d(o),1),t("div",Q,[(s(!0),n(g,null,h(u,p=>(s(),M(i,{key:p,icon:k(z),size:"14"},null,8,["icon"]))),128))])])),64))])}}}),U={class:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"},q={class:"mx-auto"},X={class:"text-5xl"},Y={class:"mt-3 font-bold text-zinc-50"},Z={class:"mt-1 text-sm text-zinc-300/95"},tt=f({__name:"LikeLists",setup(b){const l=[{icon:"💻",title:"Programming",text:"I code almost every day."},{icon:"🗺",title:"Travel",text:"Seeking beautiful landscapes."},{icon:"♨",title:"Onsen",text:"Pride of Japan."},{icon:"🎮",title:"Games",text:"Especially RPG."}];return(y,_)=>{const i=S("twemoji");return s(),n("div",null,[t("ul",U,[(s(),n(g,null,h(l,o=>t("li",{key:o.title,class:"flex flex-col rounded-2xl border border-slate-200/20 bg-slate-700/30 p-4 text-center shadow-lg shadow-gray-900/20"},[t("div",q,[x((s(),n("span",X,[a(d(o.icon),1)])),[[i]])]),t("h3",Y,d(o.title),1),t("p",Z,d(o.text),1)])),64))])])}}}),et={class:"flex min-h-dvh items-center px-5 py-20"},st=t("header",null,[t("h1",{class:"text-4xl font-bold text-orange-200 underline underline-offset-8"}," About "),t("p",{class:"mt-6 text-zinc-200/90"}," Brief introduction about me. ")],-1),ot={class:"mt-14 text-zinc-200"},nt=t("p",{class:"mt-2"}," Hi there👋 I'm K. ",-1),it=t("p",{class:"mt-2"}," I'm a web developer working in Tokyo, Japan. I have been working as a developer since 2013. ",-1),at=t("p",{class:"mt-2"}," I have worked for several companies and participated in a number of interesting projects there. ",-1),ct=t("p",{class:"mt-2"}," 👶Currently on leave to raise my cute baby! (through Oct. 2022) ",-1),lt=[nt,it,at,ct],rt={class:"mt-14"},dt=t("h2",{class:"mb-3 text-2xl font-bold text-orange-200"}," Skills ",-1),_t={class:"text-zinc-300/80"},mt=t("br",null,null,-1),ut={class:"mt-14"},pt=t("h2",{class:"mb-3 text-2xl font-bold text-orange-200"}," Likes ",-1),gt=t("p",{class:"text-zinc-200"}," Some of my favorite things. ",-1),ht={class:"text-zinc-200"},xt={class:"mt-14"},ft=t("h2",{class:"mb-3 text-2xl font-bold text-orange-200"}," Contact ",-1),bt={class:"text-zinc-200"},kt=f({__name:"about",setup(b){return O({title:"About",titleTemplate:"%s | K - Web Developer"}),(l,y)=>{const _=L,i=$,o=R,r=E,m=tt,u=w,p=H,v=S("twemoji");return s(),n("div",et,[e(p,{tag:"article",class:"mx-auto max-w-5xl p-8"},{default:c(()=>[e(_,{class:"absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl border-b border-l border-zinc-300/20 bg-gray-700/50"}),e(i,null,{default:c(()=>[st,x((s(),n("section",ot,lt)),[[v]])]),_:1}),e(i,{delay:"0.35s"},{default:c(()=>[t("section",rt,[dt,x((s(),n("p",_t,[a(" Note: 😅It may seem a bit silly to describe one's own skills in this way. "),mt,a(" And, of course, there are things not written here! ")])),[[v]]),e(o,{class:"mt-6"})]),t("section",ut,[pt,gt,t("p",ht,[a(" A scene from the travel can be seen "),e(r,{to:"/picture",class:"text-orage-200 underline underline-offset-2"},{default:c(()=>[a(" here. ")]),_:1})]),e(m,{class:"mt-6"})]),t("section",xt,[ft,t("p",bt,[a(" Contact me on "),e(r,{to:"https://twitter.com/k_urtica",target:"_blank",class:"inline-flex items-center gap-1 text-orange-200"},{default:c(()=>[a(" Twitter "),e(u,{size:"16",icon:k(G)},null,8,["icon"])]),_:1})])])]),_:1})]),_:1})])}}});export{kt as default};