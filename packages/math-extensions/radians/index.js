"use strict";

const DEG_PER_RAD = require( "@core-es/math-extensions/DEG_PER_RAD" );

/**
 * 
 * 
 * @param {Number} degrees 
 * @returns {Number} 
 */
function radians( degrees ) {

    if ( Number.isNaN( degrees ) ) return NaN;

    if ( degrees === Infinity || degrees === -Infinity ) return degrees;

    return degrees * DEG_PER_RAD;

}

module.exports = radians;
