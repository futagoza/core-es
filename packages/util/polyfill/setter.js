"use strict";

const descriptor = require( "./descriptor" );

/**
 * A simple helper to add a setter.
 * 
 * @param {{}} O The target's object.
 * @param {String|Number|Symbol} name The target's name within `O`.
 * @param {Function} fn Method used as the setter on the target.
 */
function PolyfillSetter( O, name, fn ) {

    if ( typeof O[ name ] === "undefined" )

        Object.defineProperty( O, name, {

            set: fn,
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,

        } );

}

module.exports = PolyfillSetter;
