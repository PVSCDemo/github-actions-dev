(()=>{var __webpack_modules__={345:(e,t,r)=>{"use strict";const o=r(495);e.exports=(e,t)=>{const r=`Bearer ${t}`;const a=e.endsWith("/")?e.substr(0,e.lastIndexOf("/")):e;const s={getCard:e=>o(`${a}/io/card/${e}`,{method:"GET",headers:{Authorization:r}}).json(),blockCard:(e,t,s)=>o(`${a}/io/card/${e}`,{method:"PATCH",json:[{op:"replace",path:"/blockReason",value:s},{op:"replace",path:"/isBlocked",value:t}],headers:{Authorization:r}}).json(),moveCard:(e,t,s)=>o(`${a}/io/card/move`,{method:"POST",json:{cardIds:[e],destination:{laneId:t},wipOverrideComment:s},headers:{Authorization:r}}).json(),assignUsers:(e,t,s,n)=>{const i={cardIds:e};if(t&&t.length){i.userIdsToAssign=t}if(s&&s.length){i.userIdsToUnassign=s}if(n){i.wipOverrideComment=n}return o(`${a}/io/card/assign`,{method:"POST",json:i,headers:{Authorization:r}}).json()},addComment:(e,t)=>o(`${a}/io/card/${e}/comment`,{method:"POST",json:{text:t},headers:{Authorization:r}}).json(),createCard:async e=>{const{id:t}=await o(`${a}/io/card`,{method:"POST",json:e,headers:{Authorization:r}}).json();return t},async verifyCardPosition(e,t){const r=await s.getCard(e);return r.lane.id===t}};return s}},970:(e,t,r)=>{"use strict";const{getInput:o,getBooleanInput:a,setFailed:s,setOutput:n,exportVariable:i}=r(389);e.exports={getInputParams({required:e=[],optional:t=[],asBoolean:r=[]}){const s=[];for(const t of e){const e=r.includes(t)?a:o;s.push(e(t,{required:true}))}for(const e of t){const t=r.includes(e)?a:o;s.push(t(e))}return s},reportError(e,t){const r=`${e}; ${t.message}`;n("error",r);i("LK_ERROR_MESSAGE",r);s(t)},validateLeankitUrl(e,t){const r=/^https:\/\/.+\.(leankit\.com|leankit\.io|localkanban\.com)\/?$/i.test(t);if(!r){throw new Error(`Expected a leankit url for '${e}' action parameter`)}}}},389:module=>{module.exports=eval("require")("@actions/core")},495:module=>{module.exports=eval("require")("got")}};var __webpack_module_cache__={};function __nccwpck_require__(e){var t=__webpack_module_cache__[e];if(t!==undefined){return t.exports}var r=__webpack_module_cache__[e]={exports:{}};var o=true;try{__webpack_modules__[e](r,r.exports,__nccwpck_require__);o=false}finally{if(o)delete __webpack_module_cache__[e]}return r.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__={};(()=>{"use strict";const{setOutput:e}=__nccwpck_require__(389);const t=__nccwpck_require__(345);const{getInputParams:r,reportError:o,validateLeankitUrl:a}=__nccwpck_require__(970);(async()=>{const[o,s,n,i,c,_,d,u]=r({required:["host","apiToken","boardId","title"],optional:["customId","externalLink","laneId","typeId"]});a("host",o);const{createCard:l}=t(o,s);const p={boardId:n,title:i};if(d){p.laneId=d}if(u){p.typeId=u}if(c){p.customId=c}if(_){p.externalLink={url:c,label:"Link to Github"}}const m=await l(p);e("createdCardId",m)})().catch((e=>{o("createCard",e)}))})();module.exports=__webpack_exports__})();