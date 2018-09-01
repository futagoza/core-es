"use strict";

const polyfill = require( "@core-es/util/polyfill/value" );
const implementation = require( "./index" );

polyfill( Math, "degrees", implementation );
