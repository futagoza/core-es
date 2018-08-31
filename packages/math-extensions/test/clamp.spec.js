"use strict";

const { expect } = require( "chai" );
const clamp = require( "../clamp" );

describe( "@core-es/math-extensions/clamp", () => {

    it( "return NaN if any argument is NaN", () => {

        expect( Number.isNaN( clamp( NaN, 1, 3 ) ) ).to.equal( true );
        expect( Number.isNaN( clamp( 2, NaN, 3 ) ) ).to.equal( true );
        expect( Number.isNaN( clamp( 4, 1, NaN ) ) ).to.equal( true );

    } );

    it( "returns a value within the given bounds", () => {

        expect( clamp( 0, 1, 3 ) ).to.equal( 1 );
        expect( clamp( 2, 1, 3 ) ).to.equal( 2 );
        expect( clamp( 4, 1, 3 ) ).to.equal( 3 );

    } );

} );
