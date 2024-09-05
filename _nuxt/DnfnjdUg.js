import{j as $,k as w,l as v,m as S,p as R,d as k,q as x,s as T,v as z,x as q,I as F}from"./BTbEEq1f.js";const P=Object.freeze({left:0,top:0,width:16,height:16}),A=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),L=Object.freeze({...P,...A});Object.freeze({...L,body:"",hidden:!1});function B(e,c){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in c)n+=" "+s+'="'+c[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}const E=/(-?[0-9.]*[0-9]+[0-9.]*)/g,W=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function C(e,c,n){if(c===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*c*n)/n;if(typeof e!="string")return e;const s=e.split(E);if(s===null||!s.length)return e;const t=[];let o=s.shift(),r=W.test(o);for(;;){if(r){const l=parseFloat(o);isNaN(l)?t.push(o):t.push(Math.ceil(l*c*n)/n)}else t.push(o);if(o=s.shift(),o===void 0)return t.join("");r=!r}}function _(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function D(e){return"data:image/svg+xml,"+_(e)}function G(e){return'url("'+D(e)+'")'}function U(e){const[c,n,s,t]=e;if(s!==t){const o=Math.max(s,t);return[c-(o-s)/2,n-(o-t)/2,o,o]}return e}const K=Object.freeze({width:null,height:null}),J=Object.freeze({...K,...A});function Q(e,c="defs"){let n="";const s=e.indexOf("<"+c);for(;s>=0;){const t=e.indexOf(">",s),o=e.indexOf("</"+c);if(t===-1||o===-1)break;const r=e.indexOf(">",o);if(r===-1)break;n+=e.slice(t+1,o).trim(),e=e.slice(0,s).trim()+e.slice(r+1)}return{defs:n,content:e}}function X(e,c){return e?"<defs>"+e+"</defs>"+c:c}function Y(e,c,n){const s=Q(e);return X(s.defs,c+s.content+n)}const Z=e=>e==="unset"||e==="undefined"||e==="none";function e1(e,c){const n={...L,...e},s={...J,...c},t={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,s].forEach(g=>{const h=[],O=g.hFlip,H=g.vFlip;let m=g.rotate;O?H?m+=2:(h.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),h.push("scale(-1 1)"),t.top=t.left=0):H&&(h.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),h.push("scale(1 -1)"),t.top=t.left=0);let d;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:d=t.height/2+t.top,h.unshift("rotate(90 "+d.toString()+" "+d.toString()+")");break;case 2:h.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:d=t.width/2+t.left,h.unshift("rotate(-90 "+d.toString()+" "+d.toString()+")");break}m%2===1&&(t.left!==t.top&&(d=t.left,t.left=t.top,t.top=d),t.width!==t.height&&(d=t.width,t.width=t.height,t.height=d)),h.length&&(o=Y(o,'<g transform="'+h.join(" ")+'">',"</g>"))});const r=s.width,l=s.height,i=t.width,a=t.height;let u,f;r===null?(f=l===null?"1em":l==="auto"?a:l,u=C(f,i/a)):(u=r==="auto"?i:r,f=l===null?C(u,a/i):l==="auto"?a:l);const y={},M=(g,h)=>{Z(h)||(y[g]=h.toString())};M("width",u),M("height",f);const N=[t.left,t.top,i,a];return y.viewBox=N.join(" "),{attributes:y,viewBox:N,body:o}}function t1(e){const c={display:"inline-block",width:"1em",height:"1em"},n=e.varName;switch(e.pseudoSelector&&(c.content="''"),e.mode){case"background":n&&(c["background-image"]="var(--"+n+")"),c["background-repeat"]="no-repeat",c["background-size"]="100% 100%";break;case"mask":c["background-color"]="currentColor",n&&(c["mask-image"]=c["-webkit-mask-image"]="var(--"+n+")"),c["mask-repeat"]=c["-webkit-mask-repeat"]="no-repeat",c["mask-size"]=c["-webkit-mask-size"]="100% 100%";break}return c}function c1(e,c){const n={},s=c.varName,t=e1(e);let o=t.viewBox;o[2]!==o[3]&&(c.forceSquare?o=U(o):n.width=C("1em",o[2]/o[3]));const r=B(t.body.replace(/currentColor/g,c.color||"black"),{viewBox:`${o[0]} ${o[1]} ${o[2]} ${o[3]}`,width:`${o[2]}`,height:`${o[3]}`}),l=G(r);if(s)n["--"+s]=l;else switch(c.mode){case"background":n["background-image"]=l;break;case"mask":n["mask-image"]=n["-webkit-mask-image"]=l;break}return n}const b={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function n1(e,c="expanded"){const n=[];for(let s=0;s<e.length;s++){const{selector:t,rules:o}=e[s];let l=(t instanceof Array?t.join(c==="compressed"?",":", "):t)+b.selectorStart[c],i=!0;for(const a in o)i||(l+=";"),l+=b.rule[c].replace("{key}",a)+o[a],i=!1;l+=b.selectorEnd[c],n.push(l)}return n.join(c==="compressed"?"":`
`)}function s1(e,c={}){const n=c.customise?c.customise(e.body):e.body,s=c.mode||(c.color||!n.includes("currentColor")?"background":"mask");let t=c.varName;t===void 0&&s==="mask"&&(t="svg");const o={...c,mode:s,varName:t};s==="background"&&delete o.varName;const r={...c.rules,...t1(o),...c1({...L,...e,body:n},o)},l=c.iconSelector||".icon";return n1([{selector:l,rules:r}],o.format)}let I=!1;function j(){if(I)return;const e=JSON.parse('[{"prefix":"mdi","icons":{"home-circle-outline":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8m0-18C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-1 12h2v3h3v-5h2l-6-5l-6 5h2v5h3z\\"/>"},"vuejs":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M2 3h3.5L12 15l6.5-12H22L12 21zm4.5 0h3L12 7.58L14.5 3h3L12 13.08z\\"/>"},"nuxt":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M21.8 18.36L16.03 8.08c-.1-.08-.4-.65-1-.65c-.25 0-.6.1-.96.65l-.74 1.18l-2.02-3.61c-.05-.1-.4-.65-1-.65c-.25 0-.65.1-.95.65L2.18 18.31c-.05.1-.35.69-.05 1.19c.1.25.4.5 1.06.5h17.66c.1 0 .75 0 1.05-.5c.1-.24.2-.64-.1-1.14m-13.7-.05l-.15.55H3.24l7.12-12.52l2.3 4.13zm1.11.55l4.11-7.2l4.18 7.2zm9.53 0l-.2-.55L14 10.46l1.03-1.73l5.72 10.13z\\"/>"},"vuetify":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M12 11.64L7.92 2h8.16zm0 10.31L3.27 4.91h4.57L12 14.47l4.16-9.56h4.57z\\"/>"},"language-javascript":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M3 3h18v18H3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55c1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08c-.58 0-.82-.4-1.09-.87zm5.98-.18c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03z\\"/>"},"language-typescript":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M3 3h18v18H3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03zM13 11.25H8v1.5h1.5V20h1.75v-7.25H13z\\"/>"},"tailwind":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12\\"/>"},"language-html5":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"m12 17.56l4.07-1.13l.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58l-2.22.6l-2.22-.6l-.14-1.66h-2l.29 3.19zM4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8z\\"/>"},"language-python":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M19.14 7.5A2.86 2.86 0 0 1 22 10.36v3.78A2.86 2.86 0 0 1 19.14 17H12c0 .39.32.96.71.96H17v1.68a2.86 2.86 0 0 1-2.86 2.86H9.86A2.86 2.86 0 0 1 7 19.64v-3.75a2.85 2.85 0 0 1 2.86-2.85h5.25a2.85 2.85 0 0 0 2.85-2.86V7.5zm-4.28 11.79c-.4 0-.72.3-.72.89s.32.71.72.71a.71.71 0 0 0 .71-.71c0-.59-.32-.89-.71-.89m-10-1.79A2.86 2.86 0 0 1 2 14.64v-3.78A2.86 2.86 0 0 1 4.86 8H12c0-.39-.32-.96-.71-.96H7V5.36A2.86 2.86 0 0 1 9.86 2.5h4.28A2.86 2.86 0 0 1 17 5.36v3.75a2.85 2.85 0 0 1-2.86 2.85H8.89a2.85 2.85 0 0 0-2.85 2.86v2.68zM9.14 5.71c.4 0 .72-.3.72-.89s-.32-.71-.72-.71c-.39 0-.71.12-.71.71s.32.89.71.89\\"/>"},"language-java":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M16.5 6.08s-6.84 1.71-3.56 5.48c.97 1.11-.25 2.11-.25 2.11s2.45-1.25 1.31-2.85c-1.06-1.47-1.86-2.2 2.5-4.74m-4.47 1.2C16.08 4.08 14 2 14 2c.84 3.3-2.96 4.3-4.33 6.36c-.94 1.4.46 2.91 2.33 4.64c-.71-1.7-3.22-3.16.03-5.72M9.37 17.47c-3.08.86 1.88 2.63 5.79.96c-.38-.15-.75-.33-1.1-.54c-1.36.31-2.76.37-4.14.18c-1.31-.16-.55-.6-.55-.6m5.32-1.68c-1.75.38-3.56.47-5.34.26c-1.31-.13-.45-.77-.45-.77c-3.4 1.13 1.88 2.4 6.6 1.02c-.29-.11-.57-.3-.81-.51m3.42 3.3s.57.47-.61.83c-2.28.68-9.43.89-11.41.03c-.71-.31.63-.74 1.05-.83c.23-.06.46-.08.69-.08c-.79-.54-5.13 1.1-2.19 1.56c7.97 1.3 14.54-.6 12.47-1.51m-2.74-4.86c.29-.19.6-.35.92-.49c0 0-1.51.26-3.02.4c-1.6.16-3.21.18-4.81.06c-2.35-.31 1.29-1.2 1.29-1.2c-1.1 0-2.18.26-3.16.75c-2.05 1 5.1 1.45 8.78.48m.9 2.42c-.02.04-.04.07-.08.1c5.01-1.31 3.17-4.64.77-3.81c-.13.06-.24.14-.31.25c.14-.05.28-.09.43-.12c1.2-.24 2.92 1.63-.81 3.58m.13 4.61c-3.01.52-6.09.56-9.12.14c0 0 .46.38 2.81.53c3.6.23 9.13-.13 9.26-1.83c.03.01-.23.65-2.95 1.16\\"/>"},"aws":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M7.64 10.38c0 .25.02.45.07.62c.05.12.12.28.21.46c.04.04.05.1.05.15c0 .07-.04.13-.13.2l-.42.28c-.06.04-.12.06-.17.06c-.07 0-.13-.04-.2-.1c-.09-.1-.17-.2-.24-.31c-.06-.11-.13-.24-.2-.39c-.52.61-1.17.92-1.96.92c-.56 0-1-.16-1.33-.48c-.32-.32-.49-.75-.49-1.29c0-.55.2-1 .6-1.36c.41-.34.95-.52 1.63-.52c.23 0 .44.02.71.06c.23.03.5.08.76.14v-.48c0-.51-.1-.84-.31-1.07c-.22-.21-.57-.3-1.08-.3c-.24 0-.48.03-.72.08c-.25.06-.49.13-.72.23c-.11.04-.2.07-.23.08c-.05.02-.08.02-.11.02c-.09 0-.14-.06-.14-.2v-.33c0-.1.01-.18.05-.23q.045-.075.18-.12c.24-.14.51-.24.84-.32a4 4 0 0 1 1.04-.13q1.185 0 1.74.54c.37.36.55.91.55 1.64v2.15zm-2.7 1.02c.22 0 .44-.04.68-.12s.45-.23.63-.43c.11-.13.19-.27.25-.43c0-.16.05-.35.05-.58v-.27c-.2-.07-.4-.07-.62-.12a7 7 0 0 0-.62-.04c-.45 0-.77.09-.99.27s-.32.43-.32.76c0 .32.07.56.24.71c.16.17.39.25.7.25m5.34.71a.6.6 0 0 1-.28-.06c-.03-.05-.08-.14-.12-.26L8.32 6.65c-.04-.15-.06-.22-.06-.27c0-.11.05-.17.16-.17h.65c.13 0 .22.02.26.07c.06.04.1.13.14.26l1.11 4.4l1.04-4.4c.03-.13.07-.22.13-.26c.05-.04.14-.07.25-.07h.55c.12 0 .21.02.26.07c.05.04.1.13.13.26L14 11l1.14-4.46c.04-.13.09-.22.13-.26c.06-.04.14-.07.26-.07h.62c.11 0 .17.06.17.17c0 .03-.01.07-.02.12c0 0-.02.08-.04.15l-1.61 5.14c-.04.14-.08.21-.15.26c-.04.04-.13.07-.24.07h-.57c-.13 0-.19-.02-.27-.07a.45.45 0 0 1-.12-.26L12.27 7.5l-1.03 4.28q-.045.195-.12.27a.5.5 0 0 1-.27.06zm8.55.18c-.33 0-.7-.04-1.03-.12s-.59-.17-.76-.26a.5.5 0 0 1-.21-.19a.4.4 0 0 1-.04-.18v-.34c0-.14.05-.2.15-.2h.12c.04 0 .1.05.17.08c.22.1.47.18.73.23c.27.05.54.08.79.08c.42 0 .75-.07.97-.22c.23-.17.35-.36.35-.63c0-.19-.07-.34-.18-.47c-.12-.12-.35-.24-.67-.34l-.97-.3c-.48-.16-.84-.38-1.06-.68a1.58 1.58 0 0 1-.33-.97c0-.28.06-.52.18-.73c.12-.22.28-.4.46-.55c.22-.15.44-.26.71-.34q.39-.12.84-.12q.21 0 .45.03c.14.02.28.05.42.07c.14.04.26.07.38.11s.2.08.28.12c.09.05.16.1.2.16s.06.13.06.22v.32q0 .21-.15.21c-.05 0-.14-.03-.26-.08c-.37-.17-.8-.26-1.27-.26c-.38 0-.66.06-.89.19c-.2.12-.31.32-.31.59c0 .19.07.35.2.47c.13.13.38.25.73.37l.95.3c.48.14.82.36 1.03.64q.3.405.3.93c0 .28-.06.54-.17.77c-.12.22-.28.42-.5.58c-.19.17-.44.29-.72.38s-.62.13-.95.13m1.25 3.24C17.89 17.14 14.71 18 12 18c-3.85 0-7.3-1.42-9.91-3.77c-.21-.19-.02-.44.23-.29c2.82 1.63 6.29 2.62 9.89 2.62c2.43 0 5.1-.5 7.55-1.56c.37-.15.68.26.32.53M21 14.5c-.29-.37-1.86-.18-2.57-.1c-.21.03-.24-.16-.05-.3c1.25-.87 3.31-.6 3.54-.33c.24.3-.06 2.36-1.23 3.34c-.19.15-.36.07-.28-.11c.27-.68.86-2.16.59-2.5\\"/>"},"star":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z\\"/>"},"open-in-new":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z\\"/>"},"arrow-right":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z\\"/>"},"github":{"width":24,"height":24,"body":"<path fill=\\"currentColor\\" d=\\"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2\\"/>"}}}]');for(const c of e)$(c);I=!0}async function o1(e,c){if(!e)return null;j();const n=S(e);if(n)return n;const s=new Promise(t=>R([e],()=>t())).catch(()=>null);return c>0?await Promise.race([s,new Promise(t=>setTimeout(()=>t(),c))]):await s,S(e)}function V(e){const c=w().icon,n=(c.collections||[]).sort((s,t)=>t.length-s.length);return v(()=>{var r;const s=e(),t=s.startsWith(c.cssSelectorPrefix)?s.slice(c.cssSelectorPrefix.length):s,o=((r=c.aliases)==null?void 0:r[t])||t;if(!o.includes(":")){const l=n.find(i=>o.startsWith(i+"-"));return l?l+":"+o.slice(l.length+1):o}return o})}let p;function l1(e){return e.replace(/([^\w-])/g,"\\$1")}function r1(){if(p)return p;p=new Set;const e=n=>{if(n=n.replace(/^:where\((.*)\)$/,"$1").trim(),n.startsWith("."))return n},c=n=>{if(n!=null&&n.length)for(const s of n){s!=null&&s.cssRules&&c(s.cssRules);const t=s==null?void 0:s.selectorText;if(typeof t=="string"){const o=e(t);o&&p.add(o)}}};for(const n of document.styleSheets)try{const s=n.cssRules||n.rules;c(s)}catch{}return p}const i1=k({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e){const c=x(),n=w().icon,s=v(()=>e.name?n.cssSelectorPrefix+e.name:"");function t(l){var u,f;if(!l)return;const i=S(l);if(i)return i;const a=(f=(u=c.payload)==null?void 0:u.data)==null?void 0:f[l];if(a)return q(l,a),a}const o=v(()=>"."+l1(s.value));function r(l,i=!0){let a=o.value;n.cssWherePseudo&&(a=`:where(${a})`);const u=s1(l,{iconSelector:a,format:"compressed",customise:e.customize});return n.cssLayer&&i?`@layer ${n.cssLayer} { ${u} }`:u}{const l=r1();async function i(a){if(l.has(o.value))return;const u=document.createElement("style");u.textContent=r(a);const f=document.head.querySelector('style, link[rel="stylesheet"]');f?document.head.insertBefore(u,f):document.head.appendChild(u),l.add(o.value)}T(()=>e.name,()=>{if(l.has(o.value))return;const a=t(e.name);a?i(a):o1(e.name,n.fetchTimeout).then(u=>{u&&i(u)}).catch(()=>null)},{immediate:!0})}return()=>z("span",{class:["iconify",s.value,n.class]})}}),a1=k({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},async setup(e,{slots:c}){const n=x(),s=w().icon,t=V(()=>e.name),o="i-"+t.value;if(t.value){const r=n.payload.data[o];r?q(t.value,r):j()}return()=>z(F,{icon:t.value,ssr:!0,class:s.class,customise:e.customize},c)}}),h1=k({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1}},async setup(e,{slots:c}){const n=x(),s=w().icon,t=V(()=>e.name),o=v(()=>{var i;return((i=n.vueApp)==null?void 0:i.component(t.value))||((e.mode||s.mode)==="svg"?a1:i1)}),r=v(()=>{const i=e.size||s.size;return i?{fontSize:Number.isNaN(+i)?i:i+"px"}:null}),l=e.customize||s.customize;return()=>z(o.value,{...s.attrs,name:t.value,class:s.class,style:r.value,customize:l},c)}});export{h1 as default};