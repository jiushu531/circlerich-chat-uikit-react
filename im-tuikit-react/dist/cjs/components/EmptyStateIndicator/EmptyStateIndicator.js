"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function i(r){var i=r.listType;return"conversation"===i?t.jsx("p",e.__assign({role:"listitem"},{children:"You have no conversation currently"})):"message"===i||"chat"===i?null:t.jsx("p",{children:"No items exist"})}var n=r(require("react")).default.memo(i);exports.EmptyStateIndicator=n;