"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=o(function(h,v){
var f=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-sqrt/dist');function d(e,r,t,n){var u;return f(e)||f(r)||f(t)||f(n)||r>n||n>t||e<0||e>1?NaN:(u=(n-r)/(t-r),e<u?r+q((t-r)*(n-r)*e):e>u?t-q((t-r)*(t-n)*(1-e)):n)}v.exports=d
});var c=o(function(j,y){
var m=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-sqrt/dist');function F(e,r,t){var n,u,a;if(s(e)||s(r)||s(t)||e>t||t>r)return m(NaN);return n=(t-e)/(r-e),u=(r-e)*(t-e),a=(r-e)*(r-t),I;function I(i){return s(i)||i<0||i>1?NaN:i<n?e+l(u*i):i>n?r-l(a*(1-i)):t}}y.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=N(),R=c();O(x,"factory",R);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
