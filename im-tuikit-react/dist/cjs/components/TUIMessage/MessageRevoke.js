"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react/jsx-runtime"),t=require("react"),n=require("tim-js-sdk/tim-js-friendship"),r=require("../../constants.js"),i=require("../../context/TUIChatActionContext.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=a(t),o=a(n);function u(n){var a=n.message,l=i.useTUIChatActionContext().operateMessage,u=t.useCallback((function(){var e;l(((e={})[r.MESSAGE_OPERATE.REVOKE]=a,e))}),[l]);return s.jsxs("div",e.__assign({className:"bubble message-system message-revoke"},{children:[(null==a?void 0:a.flow)===r.MESSAGE_FLOW.IN&&s.jsx("span",{children:(null==a?void 0:a.nick)||(null==a?void 0:a.from)}),(null==a?void 0:a.flow)!==r.MESSAGE_FLOW.IN&&s.jsx("span",{children:"you "}),s.jsx("span",{children:"recalled a message"}),(null==a?void 0:a.flow)===r.MESSAGE_FLOW.OUT&&(null==a?void 0:a.type)===o.default.TYPES.MSG_TEXT&&s.jsx("span",e.__assign({className:"edit",role:"button",tabIndex:0,onClick:u},{children:" Re-edit"}))]}))}var c=l.default.memo(u);exports.MessageRevoke=function(t){return s.jsx(c,e.__assign({},t))};