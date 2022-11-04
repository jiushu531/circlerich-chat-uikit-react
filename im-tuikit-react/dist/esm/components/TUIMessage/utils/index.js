import{__assign as a}from"tslib";import{decodeText as t}from"./decodeText.js";import{MESSAGE_STATUS as c}from"../../../constants.js";import e from"tim-js-sdk/tim-js-friendship";import{JSONStringToParse as o}from"../../untils.js";function n(a){var t=a.split(".");return t[t.length-1]}function s(a){var t,c,o,s,r,i={message:a,text:""},p=a.nick||(null===(t=null==a?void 0:a.payload)||void 0===t?void 0:t.userIDList.join(","));switch((null===(o=null===(c=null==a?void 0:a.payload)||void 0===c?void 0:c.memberList)||void 0===o?void 0:o.length)>0&&(p="",null===(r=null===(s=null==a?void 0:a.payload)||void 0===s?void 0:s.memberList)||void 0===r||r.map((function(a){return p+="".concat((null==a?void 0:a.nick)||(null==a?void 0:a.userID),","),a})),p=p.slice(0,-1)),a.payload.operationType){case e.TYPES.GRP_TIP_MBR_JOIN:i.text="".concat(p," ").concat(n("message.tip.加入群组"));break;case e.TYPES.GRP_TIP_MBR_QUIT:i.text="".concat(n("message.tip.群成员"),"：").concat(p," ").concat(n("message.tip.退出群组"));break;case e.TYPES.GRP_TIP_MBR_KICKED_OUT:i.text="".concat(n("message.tip.群成员"),"：").concat(p," ").concat(n("message.tip.被")).concat(a.payload.operatorID).concat(n("message.tip.踢出群组"));break;case e.TYPES.GRP_TIP_MBR_SET_ADMIN:i.text="".concat(n("message.tip.群成员"),"：").concat(p," ").concat(n("message.tip.成为管理员"));break;case e.TYPES.GRP_TIP_MBR_CANCELED_ADMIN:i.text="".concat(n("message.tip.群成员"),"：").concat(p," ").concat(n("message.tip.被撤销管理员"));break;case e.TYPES.GRP_TIP_GRP_PROFILE_UPDATED:i.text=function(a){var t=a.payload,c=t.newGroupProfile,e=t.operatorID,o="",s=Object.keys(c)[0];switch(s){case"muteAllMembers":o=c[s]?"".concat(n("message.tip.管理员")," ").concat(e," ").concat(n("message.tip.开启全员禁言")):"".concat(n("message.tip.管理员")," ").concat(e," ").concat(n("message.tip.取消全员禁言"));break;case"ownerID":o="".concat(c[s]," ").concat(n("message.tip.成为新的群主"));break;case"groupName":o="".concat(e," ").concat(n("message.tip.修改群名为")," ").concat(c[s]);break;case"notification":o="".concat(e," ").concat(n("message.tip.发布新公告"))}return o}(a);break;case e.TYPES.GRP_TIP_MBR_PROFILE_UPDATED:a.payload.memberList.map((function(a){return a.muteTime>0?i.text="".concat(n("message.tip.群成员"),"：").concat(a.userID).concat(n("message.tip.被禁言")):i.text="".concat(n("message.tip.群成员"),"：").concat(a.userID).concat(n("message.tip.被取消禁言")),a}));break;default:i.text="[".concat(n("message.tip.群提示消息"),"]")}return i}function r(a){return{text:t(a.payload)}}function i(a){var t={message:a,name:"",url:""};return t.name=a.payload.data,a.payload.data.indexOf("@2x")<0&&(t.name="".concat(t.name,"@2x")),t.url="https://web.sdk.qcloud.com/im/assets/face-elem/".concat(t.name,".png"),t}function p(a){var t={lon:"",lat:"",href:"",url:"",description:"",message:a};return t.lon=a.payload.longitude.toFixed(6),t.lat=a.payload.latitude.toFixed(6),t.href="https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&"+"pointx=".concat(t.lon,"&pointy=").concat(t.lat,"&name=").concat(a.payload.description),t.url="https://apis.map.qq.com/ws/staticmap/v2/?"+"center=".concat(t.lat,",").concat(t.lon,"&zoom=10&size=300*150&maptype=roadmap&")+"markers=size:large|color:0xFFCCFF|label:k|".concat(t.lat,",").concat(t.lon,"&")+"key=UBNBZ-PTP3P-TE7DB-LHRTI-Y4YLE-VWBBD",t.description=a.payload.description,t}function l(a){return{progress:(null==a?void 0:a.status)===c.UNSEND&&a.progress,url:a.payload.imageInfoArray[1].url,message:a}}function m(a){var t,e;return{progress:(null==a?void 0:a.status)===c.UNSEND&&(null==a?void 0:a.progress),url:null===(t=null==a?void 0:a.payload)||void 0===t?void 0:t.videoUrl,snapshotUrl:null===(e=null==a?void 0:a.payload)||void 0===e?void 0:e.snapshotUrl,message:a}}function d(a){return{progress:(null==a?void 0:a.status)===c.UNSEND&&a.progress,url:a.payload.url,message:a,second:a.payload.second}}function u(a){var t="";return t=a.payload.fileSize>=1048576?"".concat((a.payload.fileSize/1048576).toFixed(2)," Mb"):a.payload.fileSize>=1024?"".concat((a.payload.fileSize/1024).toFixed(2)," Kb"):"".concat(a.payload.fileSize.toFixed(2),"B"),{progress:(null==a?void 0:a.status)===c.UNSEND&&a.progress,url:a.payload.fileUrl,message:a,name:a.payload.fileName,size:t}}function g(t){return a({message:t},t.payload)}function y(a){var t={},c={};try{t=o(a.payload.data)}catch(a){t={}}if(1!==t.businessID)return"";try{c=o(t.data)}catch(a){c={}}switch(t.actionType){case 1:return c.call_end>=0&&!t.groupID?"".concat(n("message.custom.talkTime"),"：").concat(T(c.call_end)):t.groupID?"".concat(n("message.custom.groupCallEnd")):c.data&&"switchToAudio"===c.data.cmd?"".concat(n("message.custom.switchToAudioCall")):c.data&&"switchToVideo"===c.data.cmd?"".concat(n("message.custom.switchToVideoCall")):"".concat(n("message.custom.all"));case 2:return"".concat(n("message.custom.cancel"));case 3:return c.data&&"switchToAudio"===c.data.cmd?"".concat(n("message.custom.switchToAudioCall")):c.data&&"switchToVideo"===c.data.cmd?"".concat(n("message.custom.switchToVideoCall")):"".concat(n("message.custom.accepted"));case 4:return"".concat(n("message.custom.rejected"));case 5:return c.data&&"switchToAudio"===c.data.cmd?"".concat(n("message.custom.switchToAudioCall")):c.data&&"switchToVideo"===c.data.cmd?"".concat(n("message.custom.switchToVideoCall")):"".concat(n("message.custom.noResp"));default:return""}}function I(a){return{message:a,custom:y(a)||(null==a?void 0:a.payload)||"[".concat(n("message.custom.custom"),"]")}}function f(a){var t=a.payload.groupProfile.name||a.payload.groupProfile.groupID;switch(a.payload.operationType){case 1:return"".concat(a.payload.operatorID," ").concat(n("message.tip.申请加入群组"),"：").concat(t);case 2:return"".concat(n("message.tip.成功加入群组"),"：").concat(t);case 3:return"".concat(n("message.tip.申请加入群组"),"：").concat(t," ").concat(n("message.tip.被拒绝"));case 4:return"".concat(n("message.tip.你被管理员")).concat(a.payload.operatorID," ").concat(n("message.tip.踢出群组"),"：").concat(t);case 5:return"".concat(n("message.tip.群"),"：").concat(t," ").concat(n("message.tip.被")," ").concat(a.payload.operatorID," ").concat(n("message.tip.解散"));case 6:return"".concat(a.payload.operatorID," ").concat(n("message.tip.创建群"),"：").concat(t);case 7:case 12:return"".concat(a.payload.operatorID," ").concat(n("message.tip.邀请你加群"),"：").concat(t);case 8:return"".concat(n("message.tip.你退出群组"),"：").concat(t);case 9:return"".concat(n("message.tip.你被")).concat(a.payload.operatorID," ").concat(n("message.tip.设置为群"),"：").concat(t," ").concat(n("message.tip.的管理员"));case 10:return"".concat(n("message.tip.你被")).concat(a.payload.operatorID," ").concat(n("message.tip.撤销群"),"：").concat(t," ").concat(n("message.tip.的管理员身份"));case 13:return"".concat(a.payload.operatorID," ").concat(n("message.tip.同意加群"),"：").concat(t);case 14:return"".concat(a.payload.operatorID," ").concat(n("message.tip.拒接加群"),"：").concat(t);case 255:return"".concat(n("message.tip.自定义群系统通知"),": ").concat(a.payload.userDefinedField);default:return""}}function T(a){var t,c,e,o,n=a;return n>=3600?(c=parseInt("".concat(n/3600),10)<10?"0".concat(parseInt("".concat(n/3600),10)):parseInt("".concat(n/3600),10),e=parseInt("".concat(n%60/60),10)<10?"0".concat(parseInt("".concat(n%60/60),10)):parseInt("".concat(n%60/60),10),(o=n%3600<10?"0".concat(n%3600):n%3600)>60&&(e=parseInt("".concat(o/60),10)<10?"0".concat(parseInt("".concat(o/60),10)):parseInt("".concat(o/60),10),o=o%60<10?"0".concat(o%60):o%60),t="".concat(c,":").concat(e,":").concat(o)):n>=60&&n<3600?(e=parseInt("".concat(n/60),10)<10?"0".concat(parseInt("".concat(n/60),10)):parseInt("".concat(n/60),10),o=n%60<10?"0".concat(n%60):n%60,t="00:".concat(e,":").concat(o)):n<60&&(o=n<10?"0".concat(n):n,t="00:00:".concat(o)),t}export{y as extractCallingInfoFromMessage,T as formatTime,d as handleAudioMessageShowContext,I as handleCustomMessageShowContext,i as handleFaceMessageShowContext,u as handleFileMessageShowContext,l as handleImageMessageShowContext,p as handleLocationMessageShowContext,g as handleMergerMessageShowContext,r as handleTextMessageShowContext,s as handleTipMessageShowContext,m as handleVideoMessageShowContext,f as translateGroupSystemNotice};
