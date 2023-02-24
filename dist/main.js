"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(81),s=t.n(i),r=t(645),a=t.n(r)()(s());a.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Balsamiq Sans', sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nul,\np {\n  margin: 0;\n}\n\nh1 {\n  font-size: 1rem;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 30px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 30px 0;\n  justify-content: space-between;\n  width: 90%;\n}\n\n.add-your-list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 12px 0;\n  justify-content: space-between;\n  width: 90%;\n}\n\n.input-list {\n  width: 95%;\n  height: 30px;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n  margin: 12px 0;\n  width: 90%;\n  gap: 12px;\n  justify-content: space-between;\n  list-style-type: none;\n}\n\n.todos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f3f4f6;\n  width: 100%;\n}\n\n.clear-all-completed {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  margin: 24px 0;\n  padding: 10px;\n}\n",""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var c=e[o],l=i.base?c[0]+i.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=s(f,i);i.byIndex=o,n.splice(o,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function s(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=t(r[a]);n[o].references--}for(var c=i(e,s),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,s&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},987:(e,n,t)=>{var i=t(379),s=t.n(i),r=t(795),a=t.n(r),o=t(569),c=t.n(o),l=t(565),d=t.n(l),p=t(216),u=t.n(p),f=t(589),m=t.n(f),y=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),s()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;const v=JSON.parse(localStorage.getItem("tasks"))||[],x=document.querySelector(".the-todos");function g(){x.innerHTML="",v.forEach((e=>{const n=document.createElement("li");n.classList.add("todos");const t=document.createElement("div"),i=document.createElement("i");i.classList.add("bi","bi-app");const s=document.createElement("span");if(e.editMode){const t=document.createElement("input");t.type="text",t.value=e.description,t.addEventListener("keypress",(n=>{if("Enter"===n.key){n.preventDefault();const i=t.value.trim();""!==i&&(e.description=i,e.editMode=!1,localStorage.setItem("tasks",JSON.stringify(v)),g())}})),n.appendChild(t),t.focus()}else s.innerText=e.description,s.setAttribute("task-index",e.index),s.style.display="inline-block",n.appendChild(s);s.setAttribute("task-index",e.index);const r=document.createElement("div");r.classList.add("three-dots");const a=document.createElement("i");a.classList.add("bi","bi-three-dots-vertical");const o=document.createElement("i");o.classList.add("bi","bi-pencil-square"),o.style.display="none";const c=document.createElement("i");c.classList.add("bi","bi-trash"),c.style.display="none",a.addEventListener("click",(()=>{"none"===o.style.display?(o.style.display="block",c.style.display="block",a.style.display="none"):(o.style.display="none",c.style.display="none",a.style.display="block")})),o.addEventListener("click",(e=>{!function(e){const n=e.target.closest(".todos"),t=n.querySelector("span"),i=document.createElement("input");i.type="text",i.value=t.innerText,n.firstElementChild.insertBefore(i,t),t.style.display="none",i.addEventListener("keypress",(e=>{if("Enter"===e.key){e.preventDefault();const n=i.value,t=i.id;console.log(t);const s=parseInt(t.replace("input",""),10),r=v.findIndex((e=>e.index===s)),a={...v[r],description:n},o=[...v.slice(0,r),a,...v.slice(r+1)];""!==n?(localStorage.setItem("tasks",JSON.stringify(o)),v.splice(r,1,a),g()):document.querySelector(".emptylist").style.display="block"}}))}(e)})),c.addEventListener("click",(()=>{!function(e){document.querySelector(`span[task-index="${e}"]`).parentNode.parentNode.remove();const n=v.findIndex((n=>n.index===e));v.splice(n,1),localStorage.setItem("tasks",JSON.stringify(v))}(parseInt(s.getAttribute("task-index"),10))})),t.appendChild(i),t.appendChild(s),n.appendChild(t),r.appendChild(a),r.appendChild(c),r.appendChild(o),n.appendChild(r),x.appendChild(n)})),localStorage.setItem("tasks",JSON.stringify(v))}const b=document.querySelector("#add-your-list");b.addEventListener("submit",(e=>{e.preventDefault();const n=b.todo.value,t=v.length>0?v[v.length-1].index+1:0;v.push({description:n,index:t}),g(),b.reset()}))}},e=>{e(e.s=987)}]);