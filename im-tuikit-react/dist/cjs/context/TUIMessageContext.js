"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),r=require("react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=n(r).default.createContext(void 0);exports.TUIMessageContext=s,exports.TUIMessageContextProvider=function(r){var n=r.children,u=r.value;return t.jsx(s.Provider,e.__assign({value:u},{children:n}))},exports.useTUIMessageContext=function(e){var t=r.useContext(s);return!t&&e?{}:t};