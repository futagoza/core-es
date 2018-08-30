"use strict";

const descriptor = require( "./descriptor" );

/**
 * A simple helper to add a getter.
 * 
 * @param {{}} O The target's object.
 * @param {String|Number|Symbol} name The target's name within `O`.
 * @param {Function} fn Method used as the getter on the target.
 */
function PolyfillGetter( O, name, fn ) {

    if ( typeof O[ name ] === "undefined" )

        Object.defineProperty( O, name, {

            get: fn,
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,

        } );

}

module.exports = PolyfillGetter;
