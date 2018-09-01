"use strict";

/**
 * 
 * 
 * @param {Number} x value to scale
 * @param {Number} inLow 
 * @param {Number} inHigh 
 * @param {Number} outLow 
 * @param {Number} outHigh 
 * @returns {Number} 
 */
function scale( x, inLow, inHigh, outLow, outHigh ) {

    if ( Number.isNaN( x ) ) return NaN;
    if ( Number.isNaN( inLow ) ) return NaN;
    if ( Number.isNaN( inHigh ) ) return NaN;
    if ( Number.isNaN( outLow ) ) return NaN;
    if ( Number.isNaN( outHigh ) ) return NaN;

    if ( x === Infinity || x === -Infinity ) return x;

    let result = x - inLow;
    result *= outHigh - outLow;
    result /= inHigh - inLow;
    result += outLow;
    return result;

}

module.exports = scale;
