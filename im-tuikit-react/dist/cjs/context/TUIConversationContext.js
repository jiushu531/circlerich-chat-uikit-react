"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),r=require("react/jsx-runtime"),t=require("react"),s=require("../components/TUIConversationList/TUIConversationList.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("tim-js-sdk/tim-js-friendship"),require("../components/TUIProfile/TUIProfileDefault.js"),require("../constants.js"),require("date-fns"),require("../components/Icon/config.js"),require("../components/Icon/type.js"),require("../components/TUIMessage/MessageContext.js"),require("../components/TUIMessageInput/hooks/useHandleQuoteMessage.js"),require("../components/Switch/Switch.js");var o=n(t).default.createContext(void 0);exports.TUIConversationContext=o,exports.TUIConversationProvider=function(t){var n=t.children,i=t.value;return r.jsx(o.Provider,e.__assign({value:i},{children:n||r.jsx(s.TUIConversationList,{})}))};