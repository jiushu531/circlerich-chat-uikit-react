"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react/jsx-runtime"),r=require("react");require("../../constants.js");var t=require("./hooks/useMessageContextHandler.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function n(r){var a=r.message,n=t.useMessageContextHandler({message:a}).context;return s.jsx("div",e.__assign({className:"bubble message-system"},{children:s.jsx("div",{children:n})}))}var u=a(r).default.memo(n);exports.MessageSystem=function(r){return s.jsx(u,e.__assign({},r))};