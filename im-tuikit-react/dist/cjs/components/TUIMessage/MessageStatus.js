"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react/jsx-runtime"),t=require("react"),r=require("../untils.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(t){var i=t.message,a=s.jsx("div",e.__assign({className:"time"},{children:(null==i?void 0:i.time)?r.getTimeStamp(1e3*i.time):0}));return s.jsx("div",e.__assign({className:"message-status"},{children:a}))}var u=i(t).default.memo(a);exports.MessageStatus=function(t){return s.jsx(u,e.__assign({},t))};
