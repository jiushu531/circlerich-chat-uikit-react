"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");require("tslib"),require("react/jsx-runtime");var t=require("../../../context/TUIChatActionContext.js");exports.useEmojiPicker=function(r){r.textareaRef;var a=r.insertText,s=t.useTUIChatActionContext(),n=s.sendMessage,i=s.createFaceMessage;return{onSelectEmoji:function(e){a(e.data)},sendFaceMessage:e.useCallback((function(e){var t=i({payload:e});n(t)}),[])}};
