import{__assign as e}from"tslib";import{jsx as s,jsxs as n}from"react/jsx-runtime";import l,{useState as o}from"react";import i from"tim-js-sdk/tim-js-friendship";import{MESSAGE_STATUS as t}from"../../constants.js";import{Icon as a}from"../Icon/Icon.js";import{IconTypes as m}from"../Icon/type.js";import{useMessageReply as r}from"./hooks/useMessageReply.js";function c(l){var c=l.message,u=l.children,d=l.Context,p=l.Plugins,b=o(!1),g=b[0],f=b[1],v=r({message:c}),h=v.messageReply,N=v.replyMessage,y=v.sender;return n("div",e({className:"meesage-bubble"},{children:[n("div",e({className:"meesage-bubble-context ".concat(null==c?void 0:c.flow),onMouseEnter:function(){f(!0)},onMouseLeave:function(){f(!1)}},{children:[n("div",e({className:"message-context\n            ".concat(h?"meesage-bubble-reply meesage-bubble-reply-".concat(null==c?void 0:c.flow):"","\n            ").concat((null==c?void 0:c.type)!==i.TYPES.MSG_IMAGE&&(null==c?void 0:c.type)!==i.TYPES.MSG_VIDEO&&(null==c?void 0:c.type)!==i.TYPES.MSG_FILE||(null==c?void 0:c.status)!==t.UNSEND?"":"loading")},{children:[h&&n("main",e({className:"meesage-bubble-reply-main"},{children:[s("header",e({className:"title"},{children:y})),d&&s(d,{message:N})]})),u]})),s("div",e({className:"message-plugin"},{children:g&&p&&s(p,{})}))]})),n("div",e({className:"message-bubble-status icon"},{children:[(null==c?void 0:c.status)===t.FAIL&&s("i",{className:"icon-fail"}),(null==c?void 0:c.status)===t.UNSEND&&s(a,{width:10,height:10,type:m.PROGRESS})]}))]}))}var u=l.memo(c);function d(n){return s(u,e({},n))}export{d as MessageBubble};
