"use strict";(self.webpackChunkwebpack_set_up=self.webpackChunkwebpack_set_up||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(81),s=t.n(i),a=t(645),r=t.n(a)()(s());r.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Balsamiq Sans', sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nul,\np {\n  margin: 0;\n}\n\nh1 {\n  font-size: 1rem;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 30px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 30px 0;\n  justify-content: space-between;\n  width: 90%;\n}\n\n.add-your-list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 12px 0;\n  justify-content: space-between;\n  width: 90%;\n}\n\n.input-list {\n  width: 95%;\n  height: 30px;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n  margin: 12px 0;\n  width: 90%;\n  gap: 12px;\n  justify-content: space-between;\n  list-style-type: none;\n}\n.tick-task {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  border: none;\n}\n\n.todos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f3f4f6;\n  width: 100%;\n}\n\n.clear-all-completed {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 120px;\n  margin: 24px 0;\n  padding: 10px;\n}",""]);const o=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,s,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},r=[],o=0;o<e.length;o++){var c=e[o],l=i.base?c[0]+i.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=s(f,i);i.byIndex=o,n.splice(o,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function s(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,s){var a=i(e=e||[],s=s||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var o=t(a[r]);n[o].references--}for(var c=i(e,s),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,s&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},987:(e,n,t)=>{var i=t(379),s=t.n(i),a=t(795),r=t.n(a),o=t(569),c=t.n(o),l=t(565),d=t.n(l),p=t(216),u=t.n(p),f=t(589),m=t.n(f),y=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u(),s()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;const v=JSON.parse(localStorage.getItem("tasks"))||[],x=document.querySelector(".the-todos");function b(){x.innerHTML="",v.forEach(((e,n)=>{const t=document.createElement("li");t.classList.add("todos"),e.index=n;const i=document.createElement("div");i.classList.add("tick-task");const s=document.createElement("i");s.classList.add("bi","bi-app");const a=document.createElement("span");if(e.editMode){const n=document.createElement("input");n.type="text",n.value=e.description,n.addEventListener("keypress",(t=>{if("Enter"===t.key){t.preventDefault();const i=n.value.trim();""!==i&&(e.description=i,e.editMode=!1,localStorage.setItem("tasks",JSON.stringify(v)))}})),t.appendChild(n),n.focus()}else a.innerText=e.description,a.setAttribute("task-index",e.index),a.style.display="inline-block",t.appendChild(a);a.setAttribute("task-index",e.index);const r=document.createElement("div");r.classList.add("three-dots");const o=document.createElement("i");o.classList.add("bi","bi-three-dots-vertical");const c=document.createElement("i");c.classList.add("bi","bi-pencil-square"),c.style.display="none";const l=document.createElement("i");l.classList.add("bi","bi-trash"),l.setAttribute("trash-id",e.index),l.style.display="none",o.addEventListener("click",(()=>{"none"===c.style.display?(c.style.display="block",l.style.display="block",o.style.display="none"):(c.style.display="none",l.style.display="none",o.style.display="block")})),c.addEventListener("click",(e=>{!function(e,n){const t=e.target.closest(".todos"),i=t.querySelector("span"),s=document.createElement("input");s.type="text",s.value=i.innerText,t.firstElementChild.insertBefore(s,i),i.style.display="none",s.addEventListener("keypress",(e=>{if("Enter"===e.key){e.preventDefault();const t=s.value,a=parseInt(i.getAttribute("task-index"),10),r=v.findIndex((e=>e.index===a));""!==t?(v[r].description=t,v[r].editMode=!1,localStorage.setItem("tasks",JSON.stringify(v)),n()):document.querySelector(".emptylist").style.display="block"}}))}(e,b)})),l.addEventListener("click",(()=>{!function(e,n){n.querySelector("span").closest("li").remove();const t=v.findIndex((n=>n.index===e));v.splice(t,1),v.forEach(((e,n)=>{e.index=n})),localStorage.setItem("tasks",JSON.stringify(v))}(parseInt(a.getAttribute("task-index"),10),l.closest("li"))})),i.appendChild(s),i.appendChild(a),t.appendChild(i),r.appendChild(o),r.appendChild(l),r.appendChild(c),t.appendChild(r),x.appendChild(t)})),localStorage.setItem("tasks",JSON.stringify(v))}b();const g=document.querySelector("#add-your-list");g.addEventListener("submit",(e=>{e.preventDefault();const n=g.todo.value,t=v.length;v.push({description:n,index:t,completed:!1}),b(),g.reset()}))}},e=>{e(e.s=987)}]);