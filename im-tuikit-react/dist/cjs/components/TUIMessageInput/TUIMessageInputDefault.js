"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),n=require("react"),s=require("../../constants.js"),a=require("../../context/TUIChatStateContext.js"),u=require("../../context/TUIMessageInputContext.js");exports.TUIMessageInputDefault=function(){var r=u.useTUIMessageInputContext("TUIMessageInputDefault"),o=r.text,i=r.disabled,c=r.handleChange,l=r.handleKeyDown,d=r.handlePasete,f=r.textareaRef,x=r.focus,p=r.setText,v=a.useTUIChatStateContext("TUIMessageInputDefault").operateData;n.useEffect((function(){v[s.MESSAGE_OPERATE.REVOKE]&&p(v[s.MESSAGE_OPERATE.REVOKE].payload.text)}),[v]),n.useEffect((function(){var e;return x&&f.current&&(f.current.autofocus=!0,f.current.focus(),null===(e=null==f?void 0:f.current)||void 0===e||e.addEventListener("paste",d)),function(){var e;null===(e=null==f?void 0:f.current)||void 0===e||e.removeEventListener("paste",d)}}),[x]);var E=n.useState(!1),I=E[0],g=E[1];return t.jsxs("div",e.__assign({className:"input-box ".concat(i?"disabled":""," ").concat(I?"tui-kit-input-box--focus":"tui-kit-input-box--blur")},{children:[t.jsx("div",e.__assign({className:"input-visibility-content"},{children:o})),!i&&t.jsx("textarea",{placeholder:"send a message",rows:1,value:o,ref:f,onChange:c,onKeyDown:l,onFocus:function(e){g(!0)},onBlur:function(e){g(!1)}})]}))};