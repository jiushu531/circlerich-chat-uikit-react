import{__assign as t}from"tslib";import{jsxs as e,jsx as n}from"react/jsx-runtime";import{useEffect as o,useState as r}from"react";import{MESSAGE_OPERATE as a}from"../../constants.js";import{useTUIChatStateContext as i}from"../../context/TUIChatStateContext.js";import{useTUIMessageInputContext as u}from"../../context/TUIMessageInputContext.js";function s(){var s=u("TUIMessageInputDefault"),c=s.text,l=s.disabled,d=s.handleChange,f=s.handleKeyDown,p=s.handlePasete,m=s.textareaRef,v=s.focus,x=s.setText,h=i("TUIMessageInputDefault").operateData;o((function(){h[a.REVOKE]&&x(h[a.REVOKE].payload.text)}),[h]),o((function(){var t;return v&&m.current&&(m.current.autofocus=!0,m.current.focus(),null===(t=null==m?void 0:m.current)||void 0===t||t.addEventListener("paste",p)),function(){var t;null===(t=null==m?void 0:m.current)||void 0===t||t.removeEventListener("paste",p)}}),[v]);var b=r(!1),I=b[0],g=b[1];return e("div",t({className:"input-box ".concat(l?"disabled":""," ").concat(I?"tui-kit-input-box--focus":"tui-kit-input-box--blur")},{children:[n("div",t({className:"input-visibility-content"},{children:c})),!l&&n("textarea",{placeholder:"send a message",rows:1,value:c,ref:m,onChange:d,onKeyDown:f,onFocus:function(t){g(!0)},onBlur:function(t){g(!1)}})]}))}export{s as TUIMessageInputDefault};
