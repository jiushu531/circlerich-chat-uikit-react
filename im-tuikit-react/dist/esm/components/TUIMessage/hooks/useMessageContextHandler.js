import e from"tim-js-sdk/tim-js-friendship";import{translateGroupSystemNotice as a,handleTipMessageShowContext as S,handleLocationMessageShowContext as s,handleMergerMessageShowContext as r,handleCustomMessageShowContext as E,handleFileMessageShowContext as T,handleVideoMessageShowContext as G,handleAudioMessageShowContext as c,handleImageMessageShowContext as M,handleFaceMessageShowContext as P,handleTextMessageShowContext as _}from"../utils/index.js";var i=function(i){var t,Y=i.message;if(Y)switch(null==Y?void 0:Y.type){case e.TYPES.MSG_TEXT:t=_(Y);break;case e.TYPES.MSG_FACE:t=P(Y);break;case e.TYPES.MSG_IMAGE:t=M(Y);break;case e.TYPES.MSG_AUDIO:t=c(Y);break;case e.TYPES.MSG_VIDEO:t=G(Y);break;case e.TYPES.MSG_FILE:t=T(Y);break;case e.TYPES.MSG_CUSTOM:t=E(Y);break;case e.TYPES.MSG_MERGER:t=r(Y);break;case e.TYPES.MSG_LOCATION:t=s(Y);break;case e.TYPES.MSG_GRP_TIP:t=S(Y);break;case e.TYPES.MSG_GRP_SYS_NOTICE:t=a(Y)}return{context:t,message:Y}};export{i as useMessageContextHandler};
