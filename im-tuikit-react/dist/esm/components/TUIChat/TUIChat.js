import{__assign as e,__awaiter as t,__generator as s}from"tslib";import a,{createElement as o,useReducer as r,useRef as n,useEffect as i,useMemo as c}from"react";import{jsx as m,jsxs as u,Fragment as g}from"react/jsx-runtime";import{useTUIKitContext as p}from"../../context/TUIKitContext.js";import{TUIChatStateContextProvider as M}from"../../context/TUIChatStateContext.js";import{TUIChatActionProvider as d}from"../../context/TUIChatActionContext.js";import{ComponentProvider as I}from"../../context/ComponentContext.js";import l from"./hooks/useCreateTUIChatStateContext.js";import{TUIMessage as f}from"../TUIMessage/TUIMessage.js";import"../Icon/config.js";import"../Icon/type.js";import{CONSTANT_DISPATCH_TYPE as v}from"../../constants.js";import{Toast as h}from"../Toast/index.js";import"tim-js-sdk/tim-js-friendship";import"date-fns";import"../TUIMessage/MessageContext.js";import{useMessageReceviedListener as T}from"./hooks/useMessageReceviedListener.js";import{chatReducer as j,initialState as C}from"./TUIChatState.js";import{useCreateMessage as x}from"./hooks/useCreateMessage.js";import{useHandleMessageList as E}from"./hooks/useHandleMessageList.js";import{useHandleMessage as U}from"./hooks/useHandleMessage.js";import{TUIChatHeader as S}from"../TUIChatHeader/TUIChatHeader.js";import{TUIMessageList as _}from"../TUIMessageList/TUIMessageList.js";import{TUIMessageInput as y}from"../TUIMessageInput/TUIMessageInput.js";import{EmptyStateIndicator as L}from"../EmptyStateIndicator/EmptyStateIndicator.js";function H(t){var s=t.conversation,a=t.EmptyPlaceholder,r=void 0===a?m(L,{listType:"chat"}):a,n=p("TUIChat"),i=n.conversation,c=n.tim,u=s||i;return(null==u?void 0:u.conversationID)?o(R,e({tim:c},t,{conversation:u,key:u.conversationID})):r}function R(a){var o=this,p=a.tim,L=a.conversation,H=a.className,R=a.children,D=a.TUIMessage,k=a.TUIChatHeader,P=a.TUIMessageInput,b=a.InputPlugins,w=a.MessagePlugins,G=a.MessageContext,A=a.InputQuote,F=a.onMessageRecevied,N=r(j,e(e({},C),{conversation:L})),O=N[0],q=N[1],Q=n(null),V=n(),K=l(e({tim:p,conversation:L,messageListRef:Q,textareaRef:V},O)),X=x({tim:p,conversation:L}),Y=X.createTextMessage,z=X.createFaceMessage,B=X.createImageMessage,J=X.createVideoMessage,W=X.createFileMessage,Z=E({tim:p,conversation:L,state:O,dispatch:q}),$=Z.getMessageList,ee=Z.updateMessage,te=Z.editLocalmessage,se=Z.removeMessage,ae=U({state:O,dispatch:q,editLocalmessage:te}).operateMessage,oe=function(e){return t(o,void 0,void 0,(function(){var t;return s(this,(function(s){switch(s.label){case 0:ee([e]),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,p.sendMessage(e)];case 2:return s.sent(),te(e),[3,4];case 3:throw t=s.sent(),h({text:t,type:"error"}),te(e),new Error(t);case 4:return[2]}}))}))},re=function(){return t(o,void 0,void 0,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return O.isCompleted?(q({type:v.SET_NO_MORE,value:!0}),[2]):(q({type:v.SET_HIGH_LIGHTED_MESSAGE_ID}),[4,$({nextReqMessageID:O.nextReqMessageID})]);case 1:return e=t.sent(),q({type:v.SET_HISTORY_MESSAGELIST,value:e.data.messageList}),q({type:v.SET_IS_COMPLETE,value:e.data.isCompleted}),q({type:v.SET_NEXT_REQ_MESSAGE_ID,value:e.data.nextReqMessageID}),[2]}}))}))};T(ee,F),i((function(){t(o,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,re()];case 1:return e.sent(),[2]}}))}))}),[]);var ne=c((function(){return{sendMessage:oe,removeMessage:se,editLocalmessage:te,updateMessage:ee,createTextMessage:Y,createFaceMessage:z,createImageMessage:B,createVideoMessage:J,createFileMessage:W,operateMessage:ae,loadMore:re}}),[oe,se,ee,Y,z,B,J,W,te,ae,re]),ie=c((function(){return{TUIMessage:D||f,MessageContext:G,InputPlugins:b,MessagePlugins:w,TUIChatHeader:k,TUIMessageInput:P,InputQuote:A}}),[]);return m("div",e({className:"chat ".concat(H)},{children:m(M,e({value:K},{children:m(d,e({value:ne},{children:m(I,e({value:ie},{children:R||u(g,{children:[m(S,{}),m(_,{}),m(y,{})]})}))}))}))}))}var D=a.memo(H);export{D as TUIChat};
