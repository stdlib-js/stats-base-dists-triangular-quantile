// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};var c=e;function f(e){return e!=e}var _=Math.sqrt;function p(e,t,r,n){var o,a;return f(e)||f(t)||f(r)||f(n)||t>n||n>r||e<0||e>1?NaN:(a=(r-t)*(r-n),e<(o=(n-t)/(r-t))?t+_((r-t)*(n-t)*e):e>o?r-_(a*(1-e)):n)}return c(p,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r){var n,o,a,i;return f(e)||f(t)||f(r)||e>r||r>t?(i=NaN,function(){return i}):(n=(r-e)/(t-e),o=(t-e)*(r-e),a=(t-e)*(t-r),function(i){return f(i)||i<0||i>1?NaN:i<n?e+_(o*i):i>n?t-_(a*(1-i)):r})}}),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).quantile=t();
//# sourceMappingURL=index.js.map
