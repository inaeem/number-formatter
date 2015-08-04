'use strict';

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', function() {
    it('should convert single digits', function() {
        var result = numFormatter(1, 'en');
        expect(result).to.equal('1');
    });

    it('should convert double digits', function() {
        var result = numFormatter(12, 'en');
        expect(result).to.equal('12');
    });

    it('should convert triple digits', function() {
        var result = numFormatter(123, 'en');
        expect(result).to.equal('123');
    });

});
