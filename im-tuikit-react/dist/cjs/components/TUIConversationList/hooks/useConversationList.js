"use strict";var e=require("tslib"),t=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(require("tim-js-sdk/tim-js-friendship"));module.exports=function(r,n){var a=this,o=t.useState([]),s=o[0],u=o[1];return t.useEffect((function(){var t;t="reload",e.__awaiter(a,void 0,void 0,(function(){var a,o,d,l;return e.__generator(this,(function(c){switch(c.label){case 0:return"reload"===t&&u([]),a="reload"===t?0:s.length,[4,null==r?void 0:r.getConversationList()];case 1:return 0===(null==(o=c.sent())?void 0:o.code)&&(d=o.data.conversationList.filter((function(e){return e.type!==i.default.TYPES.CONV_SYSTEM})),l="reload"===t?d:e.__spreadArray(e.__spreadArray([],s,!0),[d],!1),u(l),!a&&n&&n(l,u)),[2]}}))}))}),[r]),{conversationList:s,setConversationList:u}};
