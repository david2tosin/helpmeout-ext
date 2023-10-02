/*! For license information please see background.js.LICENSE.txt */
!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(r){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new G(n||[]);return c(i,"_invoke",{value:j(t,r,a)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};l(L,u,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(C([])));E&&E!==o&&i.call(E,u)&&(L=E);var S=x.prototype=w.prototype=Object.create(L);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function n(o,c,a,u){var s=p(e[o],e,c);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==t(l)&&i.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function j(t,e,n){var o=d;return function(i,c){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw c;return{value:r,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=N(a,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function N(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,N(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var c=i.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return c.next=c}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,c(S,"constructor",{value:x,configurable:!0}),c(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,f,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},O(_.prototype),l(_.prototype,s,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var c=new _(h(t,e,r,o),i);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(S),l(S,f,"Generator"),l(S,u,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=C,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var u=i.call(c,"catchLoc"),s=i.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)}))}}var o=function(t){return t.getStream="get-stream",t.redirect="redirect-to-url",t.startRecording="start-recording",t.stopRecording="stop-recording",t.setBadge="set-badge",t.iconClicked="icon-clicked",t}({}),i=function(t){return t.success="success",t.error="error",t.redirect="redirect",t}({}),c=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,chrome.tabs.create({url:r.url});case 2:return t.abrupt("return",{success:!0,message:"Redirected",type:i.success});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,chrome.action.setBadgeText({text:r.text.text});case 3:return t.next=5,chrome.action.setBadgeBackgroundColor({color:r.color.color});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(JSON.stringify(t.t0));case 10:return t.abrupt("return",{success:!0,message:"Badge set",type:i.success});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,t.t0=r.type,t.next=t.t0===o.getStream?4:t.t0===o.redirect?7:t.t0===o.setBadge?10:13;break;case 4:return t.next=6,new Promise(function(){var t=n(e().mark((function t(r,c){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:chrome.tabs&&chrome.tabs.query({active:!0,currentWindow:!0},(function(t){t[0]&&chrome.desktopCapture.chooseDesktopMedia(["screen","window","tab"],t[0],function(){var a=n(e().mark((function n(a,u){var s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("streamId",a),(!a||a.length<1)&&c({success:!1,message:"No stream id",type:i.error}),s={type:o.startRecording,payload:{options:u,streamId:a}},chrome.tabs.sendMessage(t[0].id||0,s,(function(t){null!==t&&void 0!==t&&t.success?r(t):c(t)}));case 4:case"end":return e.stop()}}),n)})));return function(t,e){return a.apply(this,arguments)}}())}));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 6:case 9:case 12:return t.abrupt("return",t.sent);case 7:return t.next=9,c(r.payload);case 10:return t.next=12,a(r.payload);case 13:return t.abrupt("return",{success:!1,message:"Unknown message type",type:i.error});case 14:t.next=20;break;case 16:return t.prev=16,t.t1=t.catch(0),console.error(JSON.stringify(t.t1)),t.abrupt("return",{success:!1,type:i.error,message:(null===t.t1||void 0===t.t1?void 0:t.t1.message)||"Unknown message type"});case 20:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}();chrome.runtime.onMessage.addListener((function(t,e,r){return u(t).then((function(t){r(t)})).catch((function(t){console.error(JSON.stringify(t)),r({success:!1,payload:t,type:i.error,message:(null===t||void 0===t?void 0:t.message)||"Unknown message type"})})),!0})),chrome.action.onClicked.addListener(function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Snappy extension - Successfully installed in: ",r.url);try{r.id&&chrome.tabs.sendMessage(r.id,{type:o.iconClicked})}catch(e){console.error(JSON.stringify(e))}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),chrome.runtime.onConnect.addListener((function(){}));var s=function(){var t=n(e().mark((function t(r,o){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===r||void 0===r||r.forEach(function(){var t=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.js){t.next=2;break}return t.abrupt("return");case 2:chrome.scripting.executeScript({target:{tabId:o,allFrames:!0},files:r.js},(function(){chrome.runtime.lastError})),chrome.scripting.insertCSS({target:{tabId:o},files:r.css},(function(){chrome.runtime.lastError}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}();chrome.runtime.onInstalled.addListener(n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=chrome.runtime.getManifest().content_scripts)&&chrome.windows.getAll((function(t){console.log(r,t),t&&(null===t||void 0===t||t.forEach((function(t){chrome.tabs.query({windowId:t.id},(function(t){console.log("window tabs",t),t.forEach((function(t){t.id&&s(r,t.id)}))}))})))}));case 2:case"end":return t.stop()}}),t)}))))}();
//# sourceMappingURL=background.js.map