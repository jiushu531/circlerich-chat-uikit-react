import{__assign as e}from"tslib";import{jsx as t,jsxs as r}from"react/jsx-runtime";import i,{useState as a,useEffect as o}from"react";import n from"tim-js-sdk/tim-js-friendship";import{Avatar as l}from"../Avatar/Avatar.js";import{handleDisplayAvatar as c}from"../untils.js";import{Icon as s}from"../Icon/Icon.js";import{IconTypes as m}from"../Icon/type.js";import{useTUIKitContext as d}from"../../context/TUIKitContext.js";function h(i){var h=i.title,u=i.avatar;i.isOnline;var v=i.conversation,f=a(""),p=f[0],S=f[1],N=a(""),E=N[0],P=N[1];o((function(){switch(S(h),P(u),null==v?void 0:v.type){case n.TYPES.CONV_C2C:T(v.userProfile);break;case n.TYPES.CONV_GROUP:C(v.groupProfile);break;case n.TYPES.CONV_SYSTEM:S("System Notice");break;default:S("")}}),[v]);var T=function(e){p||S((null==e?void 0:e.nick)||(null==e?void 0:e.userID)),E||P(c(e.avatar))},C=function(e){p||S((null==e?void 0:e.name)||(null==e?void 0:e.groupID)),E||P(c(e.avatar,n.TYPES.CONV_GROUP))},I=d().setTUIManageShow;return r("header",e({className:"tui-chat-header"},{children:[r("div",e({className:"tui-chat-header-left ".concat((null==v?void 0:v.type)===n.TYPES.CONV_SYSTEM?"system":"")},{children:[(null==v?void 0:v.type)!==n.TYPES.CONV_SYSTEM&&t(l,{size:32,image:E}),t("div",e({className:"header-content"},{children:t("h3",e({className:"title"},{children:p}))}))]})),t("div",e({className:"tui-chat-header-right"},{children:t("div",e({className:"header-handle"},{children:t(s,{className:"header-handle-more",onClick:function(){I(!0)},type:m.ELLIPSE,width:18,height:5})}))}))]}),null==v?void 0:v.conversationID)}var u=i.memo(h);function v(r){var i=e({},r);return t(u,e({},i))}export{v as TUIChatHeaderDefault};
