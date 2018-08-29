"use strict";

const { series, src, task } = require( "gulp" );
const eslint = require( "gulp-eslint" );
const mocha = require( "gulp-mocha" );
const pump = require( "pump" );

// Run ESLint on all `.js` and `.ts` files used.
task( "lint", () => pump(

    src( [
        "packages/**/*.js",
        "gulpfile.js"
    ] ),
    eslint( { dotfiles: true } ),
    eslint.format(),
    eslint.failAfterError()

) );

// Run tests.
task( "test", () => pump(

    src( "packages/**/*.{spec,test}.js", { read: false } ),
    mocha()

) );

// Default task.
task( "default", series( "lint", "test" ) );
