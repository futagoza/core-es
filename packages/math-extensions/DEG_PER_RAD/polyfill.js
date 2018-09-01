"use strict";

const polyfill = require( "@core-es/util/polyfill/value" );
const implementation = require( "./index" );

polyfill( Math, "DEG_PER_RAD", implementation );
