import{__assign as e}from"tslib";import{jsx as r,jsxs as n}from"react/jsx-runtime";import t from"react";import{JSONStringToParse as o}from"../untils.js";function i(t){var i=t.context,l=t.message,u=t.children;return n("div",e({className:"bubble message-custom bubble-".concat(l.flow)},{children:[function(n){if("Hyperlink"===n.data){var t=o(null==n?void 0:n.extension);return null==t?void 0:t.item.map((function(n){return r("a",e({target:"_blank",href:n.value,rel:"noreferrer"},{children:n.value}),n.value)}))}return n.extension}(null==i?void 0:i.custom),u]}))}var l=t.memo(i);function u(n){return r(l,e({},n))}export{u as MessageCustom};