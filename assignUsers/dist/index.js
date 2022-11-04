(()=>{var __webpack_modules__={345:(e,r,s)=>{"use strict";const t=s(495);e.exports=(e,r)=>{const s=`Bearer ${r}`;const o=e.endsWith("/")?e.substr(0,e.lastIndexOf("/")):e;const a={getCard:e=>t(`${o}/io/card/${e}`,{method:"GET",headers:{Authorization:s}}).json(),blockCard:(e,r,a)=>t(`${o}/io/card/${e}`,{method:"PATCH",json:[{op:"replace",path:"/blockReason",value:a},{op:"replace",path:"/isBlocked",value:r}],headers:{Authorization:s}}).json(),moveCard:(e,r,a)=>t(`${o}/io/card/move`,{method:"POST",json:{cardIds:[e],destination:{laneId:r},wipOverrideComment:a},headers:{Authorization:s}}).json(),assignUsers:(e,r,a,n)=>{const i={cardIds:e};if(r&&r.length){i.userIdsToAssign=r}if(a&&a.length){i.userIdsToUnassign=a}if(n){i.wipOverrideComment=n}return t(`${o}/io/card/assign`,{method:"POST",json:i,headers:{Authorization:s}}).json()},addComment:(e,r)=>t(`${o}/io/card/${e}/comment`,{method:"POST",json:{text:r},headers:{Authorization:s}}).json(),createCard:async e=>{const{id:r}=await t(`${o}/io/card`,{method:"POST",json:e,headers:{Authorization:s}}).json();return r},async verifyCardPosition(e,r){const s=await a.getCard(e);return s.lane.id===r}};return a}},970:(e,r,s)=>{"use strict";const{getInput:t,getBooleanInput:o,setFailed:a,setOutput:n,exportVariable:i}=s(389);e.exports={getInputParams({required:e=[],optional:r=[],asBoolean:s=[]}){const a=[];for(const r of e){const e=s.includes(r)?o:t;a.push(e(r,{required:true}))}for(const e of r){const r=s.includes(e)?o:t;a.push(r(e))}return a},reportError(e,r){const s=`${e}; ${r.message}`;n("error",s);i("LK_ERROR_MESSAGE",s);a(r)},validateLeankitUrl(e,r){const s=/^https:\/\/.+\.(leankit\.com|leankit\.io|localkanban\.com)\/?$/i.test(r);if(!s){throw new Error(`Expected a leankit url for '${e}' action parameter`)}}}},389:module=>{module.exports=eval("require")("@actions/core")},495:module=>{module.exports=eval("require")("got")}};var __webpack_module_cache__={};function __nccwpck_require__(e){var r=__webpack_module_cache__[e];if(r!==undefined){return r.exports}var s=__webpack_module_cache__[e]={exports:{}};var t=true;try{__webpack_modules__[e](s,s.exports,__nccwpck_require__);t=false}finally{if(t)delete __webpack_module_cache__[e]}return s.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__={};(()=>{"use strict";const e=__nccwpck_require__(345);const{getInputParams:r,reportError:s,validateLeankitUrl:t}=__nccwpck_require__(970);function parseList(e){if(!e){return[]}return e.trim().split(/\s*,\s*/)}(async()=>{const[s,o,a,n,i,c]=r({required:["host","apiToken","cardIds"],optional:["assignUserIds","unassignUserIds","wipOverrideComment"]});t("host",s);if(!n&&!i){throw new Error("Either assignUserIds or unassignUserIds must be specified")}const _=parseList(a);const d=parseList(n);const u=parseList(i);const{assignUsers:p}=e(s,o);await p(_,d,u,c)})().catch((e=>{s("assignUsers",e.message)}))})();module.exports=__webpack_exports__})();