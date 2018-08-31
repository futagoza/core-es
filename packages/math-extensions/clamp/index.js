"use strict";

/**
 * Clamp a number.
 * 
 * @param {Number} x The current number
 * @param {Number} lower The minimum number
 * @param {Number} upper The maximum number
 * @returns {Number} The clamed value.
 */
function clamp( x, lower, upper ) {

    if ( Number.isNaN( x ) ) return NaN;
    if ( Number.isNaN( lower ) ) return NaN;
    if ( Number.isNaN( upper ) ) return NaN;

    const max = Math.max( x, lower );
    const min = Math.min( max, upper );

    return min;

}

module.exports = clamp;
