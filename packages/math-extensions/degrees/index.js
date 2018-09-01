"use strict";

const RAD_PER_DEG = require( "@core-es/math-extensions/RAD_PER_DEG" );

/**
 * 
 * 
 * @param {Number} radians 
 * @returns {Number} 
 */
function degrees( radians ) {

    if ( Number.isNaN( radians ) ) return NaN;

    if ( radians === Infinity || radians === -Infinity ) return radians;

    return radians * RAD_PER_DEG;

}

module.exports = degrees;
