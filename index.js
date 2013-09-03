
var is = require('is');


/**
 * Expose `convertDates`.
 */

module.exports = convertDates;


/**
 * Recursively convert an `obj`'s dates to new values.
 *
 * @param {Object} obj
 * @param {Function} convert
 * @return {Object}
 */

function convertDates (obj, convert) {
  for (var key in obj) {
    var val = obj[key];
    if (is.date(val)) obj[key] = convert(val);
    if (is.object(val)) convertDates(val, convert);
  }
}