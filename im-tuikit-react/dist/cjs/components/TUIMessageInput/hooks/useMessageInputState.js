"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react"),t=require("../../../constants.js"),a=require("./useEmojiPicker.js"),n=require("./useMessageInputText.js"),r=require("./useUploadPicker.js"),i={text:""},u=function(s,a){return a.type===t.CONSTANT_DISPATCH_TYPE.SET_TEXT?e.__assign(e.__assign({},s),{text:null==a?void 0:a.getNewText(s.text)}):s};exports.useMessageInputState=function(t){var o=s.useReducer(u,i),d=o[0],c=o[1],l=t.focus,x=t.textareaRef,T=n.useMessageInputText({state:d,dispatch:c,textareaRef:x,focus:l}),g=T.handleChange,p=T.handleSubmit,_=T.handleKeyDown,h=T.handlePasete,f=T.insertText,j=T.setText,P=a.useEmojiPicker({state:d,dispatch:c,textareaRef:x,insertText:f}),M=P.onSelectEmoji,S=P.sendFaceMessage,E=r.useUploadPicker().sendUploadMessage;return e.__assign(e.__assign({},d),{handleChange:g,handleSubmit:p,handleKeyDown:_,handlePasete:h,onSelectEmoji:M,sendFaceMessage:S,sendUploadMessage:E,textareaRef:x,insertText:f,setText:j,focus:l})};
