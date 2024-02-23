"use strict";var o=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var c=o(function(h,N){
var s=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-sqrt/dist');function d(t,r,e,n){var u,f,a;return s(t)||s(r)||s(e)||s(n)||r>n||n>e||t<0||t>1?NaN:(u=(n-r)/(e-r),f=(e-r)*(n-r),a=(e-r)*(e-n),t<u?r+q(f*t):t>u?e-q(a*(1-t)):n)}N.exports=d
});var x=o(function(j,y){
var m=require('@stdlib/utils-constant-function/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-sqrt/dist');function F(t,r,e){var n,u,f;if(v(t)||v(r)||v(e)||t>e||e>r)return m(NaN);return n=(e-t)/(r-t),u=(r-t)*(e-t),f=(r-t)*(r-e),a;function a(i){return v(i)||i<0||i>1?NaN:i<n?t+l(u*i):i>n?r-l(f*(1-i)):e}}y.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=c(),R=x();O(I,"factory",R);module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
