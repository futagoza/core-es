"use strict";

/**
 * Contains the default descriptor values used when using `Object.defineProperty`.
 */
const descriptor = {

    /**
     * Can the property's value be changed after `Object.defineProperty` is used?
     */
    writable: false,

    /**
     * Is the property's descriptor change-able after `Object.defineProperty` is used?
     */
    configurable: true,

    /**
     * Will the property apear during enumeration (e.g. `for` loops)?
     */
    enumerable: false,

};

module.exports = descriptor;
