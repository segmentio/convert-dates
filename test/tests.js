
describe('convert-dates', function () {

var assert = require('assert')
  , convert = require('convert-dates');

it('should convert dates', function () {
  var obj = { date: new Date() };
  convert(obj, function () { return 'string'; });
  assert(obj.date == 'string');
});

it('shouldnt convert other properties', function () {
  var obj = { number: 42 };
  convert(obj, function () { return 'string'; });
  assert(obj.number != 'string');
});

it('should pass value to converter', function () {
  var date = new Date();
  var obj = { date: date };
  convert(obj, function (val) {
    assert(date == val);
  });
});

});