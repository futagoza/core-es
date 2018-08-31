"use strict";

const test = require( "eslint-config-futagozaryuu/test" );

module.exports = {

    "extends": "futagozaryuu/node-v6",
    "overrides": [
        {
            "files": [ "*.test.js", "*.spec.js" ],
            ...test
        }
    ],
    "root": true,

};
