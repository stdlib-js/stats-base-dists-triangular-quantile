// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,l=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&u&&u.call(e,t,r.set),e};var f=t;function _(e){return e!=e}var p=Math.sqrt;function d(e,t,r,n){var o,a;return _(e)||_(t)||_(r)||_(n)||t>n||n>r||e<0||e>1?NaN:(a=(r-t)*(r-n),e<(o=(n-t)/(r-t))?t+p((r-t)*(n-t)*e):e>o?r-p(a*(1-e)):n)}function s(e,t,r){var n,o,a,i;return _(e)||_(t)||_(r)||e>r||r>t?(i=NaN,function(){return i}):(n=(r-e)/(t-e),o=(t-e)*(r-e),a=(t-e)*(t-r),function(i){return _(i)||i<0||i>1?NaN:i<n?e+p(o*i):i>n?t-p(a*(1-i)):r})}f(d,"factory",{configurable:!1,enumerable:!1,writable:!1,value:s}),e.default=d,e.factory=s,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).quantile={});
//# sourceMappingURL=index.js.map
