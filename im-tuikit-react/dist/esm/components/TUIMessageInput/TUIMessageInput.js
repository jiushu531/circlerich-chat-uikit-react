import{__assign as t}from"tslib";import{jsx as e,jsxs as o}from"react/jsx-runtime";import s from"react";import r from"tim-js-sdk/tim-js-friendship";import{TUIMessageInputContextProvider as n}from"../../context/TUIMessageInputContext.js";import{useCreateMessageInputContext as i}from"./hooks/useCreateMessageInputContext.js";import{useMessageInputState as m}from"./hooks/useMessageInputState.js";import"../../constants.js";import{useTUIKitContext as u}from"../../context/TUIKitContext.js";import{useTUIChatStateContext as a}from"../../context/TUIChatStateContext.js";import{useComponentContext as p}from"../../context/ComponentContext.js";import"./hooks/useHandleQuoteMessage.js";import{EmptyStateIndicator as I}from"../EmptyStateIndicator/EmptyStateIndicator.js";import{InputQuoteDefalut as f}from"./InputQuoteDefalut.js";import{TUIMessageInputDefault as c}from"./TUIMessageInputDefault.js";import{InputPluginsDefalut as l}from"./InputPluginsDefalut.js";function d(o){var s=o.children,p=o.disabled,I=o.focus,f=void 0===I||I,c=o.plugins,l=o.showNumber,d=void 0===l?1:l,g=o.MoreIcon,j=m(o),x=u("TUIMessageInput").conversation,h=a("TUIMessageInput").textareaRef,M=x.type===r.TYPES.CONV_SYSTEM,T=i(t(t(t({},j),o),{textareaRef:h,disabled:p||M,focus:f,plugins:c,showNumber:d,MoreIcon:g}));return e(n,t({value:T},{children:s}))}function g(s){var r=s.TUIMessageInput,n=s.InputPlugins,i=s.InputQuote,m=p(),u=m.TUIMessageInput,a=m.InputPlugins,g=m.InputQuote,j=r||u||c,x=n||a||l||I;return e("div",t({className:"tui-message-input"},{children:o(d,t({},s,{children:[e(i||g||f,{}),o("div",t({className:"tui-message-input-main"},{children:[e(x,{}),e(j,{})]}))]}))}))}var j=s.memo(g);export{j as TUIMessageInput};