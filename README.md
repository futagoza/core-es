[![Travis](https://img.shields.io/travis/com/futagoza/core-es.svg)](https://travis-ci.com/futagoza/core-es)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

My own collection of ponyfills and polyfills for ES2017+ usable in [Node.js v6+](https://nodejs.org/en/blog/release/v6.0.0/) environments, with a selected subset of these packages usable in most browsers via [Babel](https://babeljs.io/) and [package bundlers](#package-bundlers). 

# packages

| package | npm version |
| ------- | ----------- |
| [@futagoza/core-js](https://github.com/futagoza/core-es/tree/master/packages/core-js) | [![npm](https://img.shields.io/npm/v/@futagoza/core-js.svg)](https://www.npmjs.com/package/@futagoza/core-js) |
| [@core-es/math-extensions](https://github.com/futagoza/core-es/tree/master/packages/math-extensions) | [![npm](https://img.shields.io/npm/v/@core-es/math-extensions.svg)](https://www.npmjs.com/package/@core-es/math-extensions) |
| [@core-es/util](https://github.com/futagoza/core-es/tree/master/packages/util) | [![npm](https://img.shields.io/npm/v/@core-es/util.svg)](https://www.npmjs.com/package/@core-es/util) |

# package bundlers

It is recommended to use a package (or if you prefer, _web application_) bundler in your projects build setup, so that you can cherry pick the modules you want to use from these packages via imports (that's what I made them for 😄). I recommend using one of these four:

* [Rollup](https://rollupjs.org/)
* [Browserify](http://browserify.org/)
* [Parcel](https://parceljs.org/)
* [Webpack](https://webpack.js.org/)

# license

Copyright © 2018+ Futago-za Ryuu, [https://github.com/futagoza](https://github.com/futagoza)<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT).
