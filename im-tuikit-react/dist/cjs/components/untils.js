"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("date-fns"),r=require("tim-js-sdk/tim-js-friendship");require("tslib"),require("react/jsx-runtime"),require("react"),require("./Icon/config.js"),require("./Icon/type.js");var t=require("./Avatar/default.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=a(r);function i(e){return!!/^[\],:{}\s]*$/.test(e.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))}exports.JSONStringToParse=function(e){return i(e)?JSON.parse(e):e},exports.getTimeStamp=function(r){return r?e.isThisYear(r)?e.isToday(r)?e.format(r,"p"):e.isYesterday(r)?e.formatDistance(r,new Date):e.isThisWeek(r)?e.format(r,"eeee"):e.format(r,"MMM dd"):e.format(r,"yyyy MMM dd"):""},exports.handleDisplayAvatar=function(e,r){void 0===r&&(r=s.default.TYPES.CONV_C2C);var a=e;if(!e)switch(r){case s.default.TYPES.CONV_C2C:a=t.defaultUserAvatar;break;case s.default.TYPES.CONV_GROUP:default:a=t.defaultGroupAvatarWork}return a},exports.isJSON=i;
