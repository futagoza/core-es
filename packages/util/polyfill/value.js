"use strict";

const descriptor = require( "./descriptor" );

/**
 * A simple helper to polyfill the target if it is `undefined`.
 * 
 * @param {{}} O The target's object.
 * @param {String|Number|Symbol} name The target's name within `O`.
 * @param {*} value Polyfill implementation for the target.
 */
function PolyfillValue( O, name, value ) {

    if ( typeof O[ name ] === "undefined" )

        Object.defineProperty( O, name, {

            value: value,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,

        } );

}

module.exports = PolyfillValue;
