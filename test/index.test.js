'use strict';

var assert = require('proclaim');
var convert = require('../lib');

describe('convert-dates', function() {
  it('should convert dates', function() {
    var obj = { date: new Date() };
    var clone = convert(obj, function() { return 'string'; });
    assert(clone.date === 'string');
  });

  it('should convert nested dates', function() {
    var obj = { nested: { date: new Date() } };
    var clone = convert(obj, function() { return 'string'; });
    assert(clone.nested.date === 'string');
  });

  it('shouldnt convert other properties', function() {
    var obj = { number: 42 };
    var clone = convert(obj, function() { return 'string'; });
    assert(clone.number !== 'string');
  });

  it('should pass value to converter', function() {
    var date = new Date();
    var obj = { date: date };
    convert(obj, function(val) {
      assert(date.getTime() === val.getTime());
    });
  });
});
