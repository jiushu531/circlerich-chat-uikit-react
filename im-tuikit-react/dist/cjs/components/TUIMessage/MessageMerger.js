"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react/jsx-runtime");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function t(r){var t=r.context,a=r.message,i=r.children;return s.jsxs("div",e.__assign({className:"bubble message-merger bubble-".concat(a.flow)},{children:[s.jsx("h3",{children:t.title}),s.jsx("ul",e.__assign({className:"message-merger-list"},{children:(null==t?void 0:t.abstractList.length)>0&&t.abstractList.map((function(r,t){var a=r+t;return s.jsx("li",e.__assign({className:"message-merger-item"},{children:r}),a)}))})),i]}))}var a=r(require("react")).default.memo(t);exports.MessageMerger=function(r){return s.jsx(a,e.__assign({},r))};