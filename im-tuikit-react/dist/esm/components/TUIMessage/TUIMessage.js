import{__assign as e}from"tslib";import{jsx as t}from"react/jsx-runtime";import s from"react";import{TUIMessageContextProvider as m}from"../../context/TUIMessageContext.js";import{useComponentContext as n}from"../../context/ComponentContext.js";import{useMessageHandler as o}from"./hooks/useMessageHandler.js";import"tim-js-sdk/tim-js-friendship";import"../../constants.js";import"date-fns";import"../Icon/config.js";import"../Icon/type.js";import{TUIMessageDefault as r}from"./TUIMessageDefault.js";import{MessagePlugins as a}from"./MessagePlugins.js";import{MessageContext as l}from"./MessageContext.js";function i(s){var o=s.message,i=s.TUIMessage,g=s.MessagePlugins,p=s.MessageContext,E=s.handleDelete,u=s.CustemElement,c=s.TextElement,f=s.ImageElement,M=s.VideoElement,d=s.AudioElement,j=s.FileElement,x=s.MergerElement,C=s.LocationElement,h=s.FaceElement,I=n(),D=I.MessagePlugins,T=I.MessageContext;return t(m,e({value:{message:o,handleDelete:E,CustemElement:u,TextElement:c,ImageElement:f,VideoElement:M,AudioElement:d,FileElement:j,MergerElement:x,LocationElement:C,FaceElement:h}},{children:t(i||r,{message:o,MessageContext:p||T||l,MessagePlugins:g||D||a})}))}var g=s.memo(i);function p(s){var m=s.message,n=o({message:m}).handleDelMessage;return t(g,e({handleDelete:n},s))}export{p as TUIMessage};
