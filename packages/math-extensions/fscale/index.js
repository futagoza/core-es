"use strict";

const scale = require( "@core-es/math-extensions/scale" );

/**
 * 
 * 
 * @param {Number} x 
 * @param {Number} inLow 
 * @param {Number} inHigh 
 * @param {Number} outLow 
 * @param {Number} outHigh 
 * @returns {Number} 
 */
function fscale( x, inLow, inHigh, outLow, outHigh ) {

    const result = scale( x, inLow, inHigh, outLow, outHigh );

    return Number.isNaN( result ) ? result : Math.fround( result );

}

module.exports = fscale;
