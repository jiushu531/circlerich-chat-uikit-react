import{useLayoutEffect as t}from"react";import i from"tim-js-sdk/tim-js-friendship";import{useTUIKitContext as o}from"../../../context/TUIKitContext.js";import"tslib";import"react/jsx-runtime";function r(r,e){var n=this,E=o("useMessageReceviedListener").tim;t((function(){var t=function(t){e&&"function"==typeof e?e(r,t):r(t.data)};return E.on(i.EVENT.MESSAGE_RECEIVED,t,n),function(){E.off(i.EVENT.MESSAGE_RECEIVED,t,n)}}),[E])}export{r as useMessageReceviedListener};