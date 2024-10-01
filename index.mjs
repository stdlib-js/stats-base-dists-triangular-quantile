// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function r(t,s,r,i){var d,m;return e(t)||e(s)||e(r)||e(i)||s>i||i>r||t<0||t>1?NaN:(m=(r-s)*(r-i),t<(d=(i-s)/(r-s))?s+n((r-s)*(i-s)*t):t>d?r-n(m*(1-t)):i)}function i(t,r,i){var d,m,a;return e(t)||e(r)||e(i)||t>i||i>r?s(NaN):(d=(i-t)/(r-t),m=(r-t)*(i-t),a=(r-t)*(r-i),function(s){if(e(s)||s<0||s>1)return NaN;if(s<d)return t+n(m*s);if(s>d)return r-n(a*(1-s));return i})}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
