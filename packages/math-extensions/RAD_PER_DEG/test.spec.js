"use strict";

const { expect } = require( "chai" );
const RAD_PER_DEG = require( "./index" );

describe( "@core-es/math-extensions/RAD_PER_DEG", () => {

    it( "should equal 57.29577951308232", () => {

        expect( RAD_PER_DEG )

            .to.be.a( "number" )
            .that.equals( 57.29577951308232 );

    } );

} );
