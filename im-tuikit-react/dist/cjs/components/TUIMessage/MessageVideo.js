"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),r=require("react/jsx-runtime");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function t(s){var t=s.context;s.message;var i=s.children;return r.jsxs("div",e.__assign({className:"message-video"},{children:[r.jsx("video",{muted:!0,controls:!0,src:t.url}),i]}))}var i=s(require("react")).default.memo(t);exports.MessageVideo=function(s){return r.jsx(i,e.__assign({},s))};