"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("../../../constants.js");exports.useHandleMessage=function(s){s.state;var r=s.dispatch;return{operateMessage:e.useCallback((function(e){r({type:t.CONSTANT_DISPATCH_TYPE.OPERATE_MESSAGE,value:e})}),[r])}};