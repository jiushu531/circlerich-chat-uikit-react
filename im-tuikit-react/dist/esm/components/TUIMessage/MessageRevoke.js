import{__assign as e}from"tslib";import{jsx as o,jsxs as n}from"react/jsx-runtime";import r,{useCallback as t}from"react";import i from"tim-js-sdk/tim-js-friendship";import{MESSAGE_OPERATE as s,MESSAGE_FLOW as l}from"../../constants.js";import{useTUIChatActionContext as m}from"../../context/TUIChatActionContext.js";function a(r){var a=r.message,c=m().operateMessage,d=t((function(){var e;c(((e={})[s.REVOKE]=a,e))}),[c]);return n("div",e({className:"bubble message-system message-revoke"},{children:[(null==a?void 0:a.flow)===l.IN&&o("span",{children:(null==a?void 0:a.nick)||(null==a?void 0:a.from)}),(null==a?void 0:a.flow)!==l.IN&&o("span",{children:"you "}),o("span",{children:"recalled a message"}),(null==a?void 0:a.flow)===l.OUT&&(null==a?void 0:a.type)===i.TYPES.MSG_TEXT&&o("span",e({className:"edit",role:"button",tabIndex:0,onClick:d},{children:" Re-edit"}))]}))}var c=r.memo(a);function d(n){return o(c,e({},n))}export{d as MessageRevoke};
