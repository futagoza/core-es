"use strict";

const polyfill = require( "@core-es/util/polyfill/value" );
const implementation = require( "./index" );

polyfill( Math, "RAD_PER_DEG", implementation );
