import{__assign as r}from"tslib";import{jsxs as i,jsx as e}from"react/jsx-runtime";import{Avatar as o}from"../Avatar/Avatar.js";import{defaultUserAvatar as a}from"../Avatar/default.js";import{Icon as t}from"../Icon/Icon.js";import{IconTypes as l}from"../Icon/type.js";function n(n){var c=n.profile,m=n.className,s=void 0===m?"":m,d=n.handleAvatar;return((null==c?void 0:c.nick)||(null==c?void 0:c.userID))&&i("div",r({className:"profile ".concat(s)},{children:[i("div",r({className:"profile-content"},{children:[e(o,{size:32,image:c.avatar||a,onClick:d}),e("div",r({className:"profile-name"},{children:c.nick||c.userID}))]})),e("div",r({className:"profile-more"},{children:e(t,{type:l.ELLIPSE,width:18,height:5,onClick:d})}))]}))}export{n as Profile};
