import{__assign as r}from"tslib";import{jsx as e}from"react/jsx-runtime";import t from"react";import{getTimeStamp as m}from"../untils.js";function i(t){var i=t.message,s=e("div",r({className:"time"},{children:(null==i?void 0:i.time)?m(1e3*i.time):0}));return e("div",r({className:"message-status"},{children:s}))}var s=t.memo(i);function o(t){return e(s,r({},t))}export{o as MessageStatus};
