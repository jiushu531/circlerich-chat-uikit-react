import{__assign as e,__spreadArray as i}from"tslib";import{jsx as t,jsxs as c}from"react/jsx-runtime";import{Avatar as r}from"../Avatar/Avatar.js";import{Icon as o}from"../Icon/Icon.js";import{IconTypes as n}from"../Icon/type.js";function s(s){var a=s.selectList,l=s.setSelectList;return t("div",e({className:"conversation-create-select-view"},{children:a.map((function(s,m){var f=s.profile,v=s.domList,p=f.nick,d=f.userID,u=f.avatar;return c("div",e({className:"select-view-info"},{children:[t(o,{height:12,width:12,type:n.CLOSE,className:"select-view-info-close",onClick:function(){!function(e,t){e.forEach((function(e){e.checked=!1})),a.splice(t,1),l(i([],a,!0))}(v,m)}}),t(r,{image:u,size:40}),t("div",e({className:"select-view-info-nick"},{children:p||d}))]}),d)}))}))}export{s as ConversationCreateSelectView};