"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),r=require("react"),n=require("../Icon/Icon.js"),i=require("../Icon/type.js");exports.WithText=function(s){var u=s.value,c=s.confirm,o=s.className,a=r.useRef(),l=r.useState(u),f=l[0],v=l[1];return r.useLayoutEffect((function(){var e;null===(e=null==a?void 0:a.current)||void 0===e||e.focus(),v(f)}),[a,u]),t.jsxs("div",e.__assign({className:"edit ".concat(o)},{children:[t.jsx("input",{ref:a,type:"text",value:f,onChange:function(e){v(e.target.value)}}),t.jsx(n.Icon,{className:"icon",width:15,height:10.5,type:i.IconTypes.CONFIRM,onClick:function(){c(f)}})]}))};
