(()=>{var __webpack_modules__={345:(e,o,r)=>{"use strict";const t=r(495);e.exports=(e,o)=>{const r=`Bearer ${o}`;const a=e.endsWith("/")?e.substr(0,e.lastIndexOf("/")):e;const s={getCard:e=>t(`${a}/io/card/${e}`,{method:"GET",headers:{Authorization:r}}).json(),blockCard:(e,o,s)=>t(`${a}/io/card/${e}`,{method:"PATCH",json:[{op:"replace",path:"/blockReason",value:s},{op:"replace",path:"/isBlocked",value:o}],headers:{Authorization:r}}).json(),moveCard:(e,o,s)=>t(`${a}/io/card/move`,{method:"POST",json:{cardIds:[e],destination:{laneId:o},wipOverrideComment:s},headers:{Authorization:r}}).json(),assignUsers:(e,o,s,n)=>{const i={cardIds:e};if(o&&o.length){i.userIdsToAssign=o}if(s&&s.length){i.userIdsToUnassign=s}if(n){i.wipOverrideComment=n}return t(`${a}/io/card/assign`,{method:"POST",json:i,headers:{Authorization:r}}).json()},addComment:(e,o)=>t(`${a}/io/card/${e}/comment`,{method:"POST",json:{text:o},headers:{Authorization:r}}).json(),createCard:async e=>{const{id:o}=await t(`${a}/io/card`,{method:"POST",json:e,headers:{Authorization:r}}).json();return o},async verifyCardPosition(e,o){const r=await s.getCard(e);return r.lane.id===o}};return s}},970:(e,o,r)=>{"use strict";const{getInput:t,getBooleanInput:a,setFailed:s,setOutput:n,exportVariable:i}=r(389);e.exports={getInputParams({required:e=[],optional:o=[],asBoolean:r=[]}){const s=[];for(const o of e){const e=r.includes(o)?a:t;s.push(e(o,{required:true}))}for(const e of o){const o=r.includes(e)?a:t;s.push(o(e))}return s},reportError(e,o){const r=`${e}; ${o.message}`;n("error",r);i("LK_ERROR_MESSAGE",r);s(o)},validateLeankitUrl(e,o){const r=/^https:\/\/.+\.(leankit\.com|leankit\.io|localkanban\.com)\/?$/i.test(o);if(!r){throw new Error(`Expected a leankit url for '${e}' action parameter`)}}}},389:module=>{module.exports=eval("require")("@actions/core")},495:module=>{module.exports=eval("require")("got")}};var __webpack_module_cache__={};function __nccwpck_require__(e){var o=__webpack_module_cache__[e];if(o!==undefined){return o.exports}var r=__webpack_module_cache__[e]={exports:{}};var t=true;try{__webpack_modules__[e](r,r.exports,__nccwpck_require__);t=false}finally{if(t)delete __webpack_module_cache__[e]}return r.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__={};(()=>{"use strict";const e=__nccwpck_require__(345);const{getInputParams:o,reportError:r,validateLeankitUrl:t}=__nccwpck_require__(970);(async()=>{const[r,a,s,n,i]=o({required:["host","apiToken","cardId","isBlocked"],optional:["blockReason"],asBoolean:["isBlocked"]});t("host",r);const{blockCard:c}=e(r,a);await c(s,n,i)})().catch((e=>{r("blockCard",e)}))})();module.exports=__webpack_exports__})();