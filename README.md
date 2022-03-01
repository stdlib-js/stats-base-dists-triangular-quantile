<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Triangular][triangular-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_quantile_function" align="center" raw="Q(p;a,b,c) = \begin{cases} a + \sqrt{(b-a)(c-a)p} & \text{ for } 0 \le p \le F(c) \\ b - \sqrt{(b-a)(b-c)(1-p)} & \text{ for } F(c) \le p \le 1 \end{cases}" alt="Quantile function for a triangular distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;a,b,c) = \begin{cases} a + \sqrt{(b-a)(c-a)p} &amp; \text{ for } 0 \le p \le F(c) \\ b - \sqrt{(b-a)(b-c)(1-p)} &amp; \text{ for } F(c) \le p \le 1 \end{cases}" data-equation="eq:triangular_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/quantile/docs/img/equation_triangular_quantile_function.svg" alt="Quantile function for a triangular distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the lower limit, `b` is the upper limit and `c` is the mode.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-triangular-quantile
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-triangular-quantile' );
```

#### quantile( p, a, b, c )

Evaluates the [quantile function][quantile-function] for a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```javascript
var y = quantile( 0.9, -1.0, 1.0, 0.0 );
// returns ~0.553

y = quantile( 0.1, -1.0, 1.0, 0.5 );
// returns ~-0.452

y = quantile( 0.1, -20.0, 0.0, -2.0 );
// returns -14.0

y = quantile( 0.8, 0.0, 20.0, 0.0 );
// returns ~11.056
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0, 0.5 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0, 0.5 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0, 0.5 );
// returns NaN

y = quantile( 0.1, NaN, 1.0, 0.5 );
// returns NaN

y = quantile( 0.1, 0.0, NaN, 0.5 );
// returns NaN

y = quantile( 0.1, 0.0, 1.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = quantile( 0.1, 1.0, 0.0, 1.5 );
// returns NaN

y = quantile( 0.1, 1.0, 0.0, -1.0 );
// returns NaN

y = quantile( 0.1, 0.0, -1.0, 0.5 );
// returns NaN
```

#### quantile.factory( a, b, c )

Returns a function for evaluating the [quantile function][quantile-function] of a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```javascript
var myquantile = quantile.factory( 2.0, 4.0, 2.5 );
var y = myquantile( 0.4 );
// returns ~2.658

y = myquantile( 0.8 );
// returns ~3.225
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var quantile = require( '@stdlib/stats-base-dists-triangular-quantile' );

var a;
var b;
var c;
var p;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    p = randu();
    a = randu() * 10.0;
    b = a + (randu() * 40.0);
    c = a + ((b-a) * randu());
    y = quantile( p, a, b, c );
    console.log( 'p: %d, a: %d, b: %d, c: %d, Q(p;a,b,c): %d', p.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-triangular-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-triangular-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-triangular-quantile/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-triangular-quantile/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-triangular-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-triangular-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-triangular-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-triangular-quantile/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-triangular-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-triangular-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-triangular-quantile/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-triangular-quantile/main/LICENSE

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
