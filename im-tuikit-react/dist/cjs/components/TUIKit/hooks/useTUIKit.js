"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react");exports.useTUIKit=function(o){var r=o.tim,n=t.useState(),a=n[0],i=n[1],s=t.useState(),u=s[0],c=s[1],l=t.useState(!1),v=l[0],f=l[1],d=t.useState(!1),I=d[0],S=d[1];t.useEffect((function(){e.__awaiter(void 0,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){switch(e.label){case 0:return[4,null==r?void 0:r.getMyProfile()];case 1:return t=e.sent(),c(null==t?void 0:t.data),[2]}}))}))}),[r]);var h=t.useCallback((function(e){e&&(null==r||r.setMessageRead({conversationID:e.conversationID})),a&&e.conversationID!==a.conversationID&&f(!1),i(e)}),[r]);return{conversation:a,setActiveConversation:h,myProfile:u,TUIManageShow:v,setTUIManageShow:f,TUIProfileShow:I,setTUIProfileShow:S}};
