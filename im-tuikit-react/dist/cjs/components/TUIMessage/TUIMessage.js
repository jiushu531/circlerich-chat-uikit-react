"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react/jsx-runtime"),t=require("react"),n=require("../../context/TUIMessageContext.js"),r=require("../../context/ComponentContext.js"),a=require("./hooks/useMessageHandler.js");require("tim-js-sdk/tim-js-friendship"),require("../../constants.js"),require("date-fns"),require("../Icon/config.js"),require("../Icon/type.js");var l=require("./TUIMessageDefault.js"),i=require("./MessagePlugins.js"),u=require("./MessageContext.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function g(t){var a=t.message,o=t.TUIMessage,g=t.MessagePlugins,m=t.MessageContext,M=t.handleDelete,d=t.CustemElement,c=t.TextElement,x=t.ImageElement,E=t.VideoElement,j=t.AudioElement,q=t.FileElement,f=t.MergerElement,C=t.LocationElement,I=t.FaceElement,p=r.useComponentContext(),v=p.MessagePlugins,T=p.MessageContext,h=o||l.TUIMessageDefault,P=g||v||i.MessagePlugins,D=m||T||u.MessageContext,U={message:a,handleDelete:M,CustemElement:d,TextElement:c,ImageElement:x,VideoElement:E,AudioElement:j,FileElement:q,MergerElement:f,LocationElement:C,FaceElement:I};return s.jsx(n.TUIMessageContextProvider,e.__assign({value:U},{children:s.jsx(h,{message:a,MessageContext:D,MessagePlugins:P})}))}var m=o(t).default.memo(g);exports.TUIMessage=function(t){var n=t.message,r=a.useMessageHandler({message:n}).handleDelMessage;return s.jsx(m,e.__assign({handleDelete:r},t))};
