import{__assign as e}from"tslib";import{useReducer as t}from"react";import{CONSTANT_DISPATCH_TYPE as a}from"../../../constants.js";import{useEmojiPicker as s}from"./useEmojiPicker.js";import{useMessageInputText as n}from"./useMessageInputText.js";import{useUploadPicker as o}from"./useUploadPicker.js";var r={text:""},i=function(t,s){return s.type===a.SET_TEXT?e(e({},t),{text:null==s?void 0:s.getNewText(t.text)}):t},d=function(a){var d=t(i,r),m=d[0],l=d[1],c=a.focus,f=a.textareaRef,x=n({state:m,dispatch:l,textareaRef:f,focus:c}),p=x.handleChange,u=x.handleSubmit,h=x.handleKeyDown,T=x.handlePasete,g=x.insertText,j=x.setText,E=s({state:m,dispatch:l,textareaRef:f,insertText:g}),M=E.onSelectEmoji,S=E.sendFaceMessage,P=o().sendUploadMessage;return e(e({},m),{handleChange:p,handleSubmit:u,handleKeyDown:h,handlePasete:T,onSelectEmoji:M,sendFaceMessage:S,sendUploadMessage:P,textareaRef:f,insertText:g,setText:j,focus:c})};export{d as useMessageInputState};