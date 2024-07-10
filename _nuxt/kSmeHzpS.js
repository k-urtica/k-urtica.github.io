import{_ as x,a as g}from"./6TXTOxOe.js";import{d as u,f,o,c as a,a as t,F as b,r as v,b as s,i as n,w as _,g as p,t as r,_ as w,h as y}from"./BkgsoIlR.js";import{n as k}from"./Do5n-NAk.js";const S={class:"grid grid-cols-1 gap-8 sm:grid-cols-2"},T={class:"flex flex-col overflow-hidden rounded-2xl border border-slate-200/10 bg-gray-600/25 shadow-lg shadow-slate-700/20 transition duration-300 hover:bg-slate-500/20 hover:shadow-slate-200/20"},V={class:"aspect-video"},N=["alt","src"],j={class:"p-4"},M={class:"text-center text-lg font-bold text-teal-400"},$={class:"mt-2 text-sm text-slate-300/95"},I={class:"mt-2 text-xs text-amber-300/90"},P=u({__name:"PortfolioLists",setup(h){const c=[{image:"p1.png",title:"Web ToolBox",text:"Web tools for developers that can be used in the browser. This is what I'm most focused on right now😆",tools:"Made with: NuxtJS, Vuetify, Python etc",url:"https://web-toolbox.dev"},{image:"p2.png",title:"日本踏破図🗾",text:"This service allows you to share the prefectures you have visited on a map of Japan!",tools:"Made with: NuxtJS, Vuetify",url:"https://traverse-japan.dev"},{image:"p3.png",title:"Portfolio site",text:"This is my personal website. It has been refined through several renewals🤭",tools:"Made with: NuxtJS, Tailwind CSS",url:"https://k-urtica.github.io"},{image:"p4.png",title:"My Blog",text:"Markdown blog made by Gatsby. I have no experience with react, but I built it from scratch.",tools:"Made with: Gatsby, Tailwind CSS",url:"https://knote.dev"},{image:"p5.png",title:"QT Visualizer",text:"Web service to visualize trends on the technology sharing platform Qiita. This is my first personal project🚀",tools:"Made with: Vue.js, Vuetify, Python etc",url:"https://qtvisualizer.com"}];return(m,d)=>{const l=w,i=f("twemoji");return o(),a("div",null,[t("ul",S,[(o(),a(b,null,v(c,e=>t("li",{key:e.title},[s(l,{to:e.url,target:"_blank"},{default:n(()=>[t("article",T,[t("div",V,[t("img",{alt:e.title,src:`/images/${e.image}`},null,8,N)]),t("section",j,[_((o(),a("h3",M,[p(r(e.title),1)])),[[i]]),_((o(),a("p",$,[p(r(e.text),1)])),[[i]]),t("p",I,r(e.tools),1)])])]),_:2},1032,["to"])])),64))])])}}}),B={class:"px-4 py-16 sm:px-0 sm:py-20"},J=t("header",null,[t("h1",{class:"text-4xl font-bold text-lime-300 underline underline-offset-8"}," Portfolio "),t("p",{class:"mt-6 text-slate-300/95"}," Some of my personal works. ")],-1),C=t("section",{class:"mt-14 text-slate-200"},[t("p",{class:"mt-2"}," I like to work on personal projects outside of work. "),t("p",{class:"mt-2"}," I often use Vue.js/NuxtJS for development tools! ")],-1),D={class:"mt-14"},F=u({__name:"portfolio",setup(h){return y({title:"Portfolio",titleTemplate:"%s | K - Web Developer"}),(c,m)=>{const d=x,l=g,i=P,e=k;return o(),a("div",B,[s(e,{tag:"article",class:"relative p-6 sm:p-9"},{default:n(()=>[s(d,{class:"absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl border-b border-l border-slate-300/20 bg-gray-700/50"}),s(l,null,{default:n(()=>[J,C]),_:1}),s(l,{delay:"0.35s"},{default:n(()=>[t("section",D,[s(i)])]),_:1})]),_:1})])}}});export{F as default};
