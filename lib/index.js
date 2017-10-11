'use strict';

/*
 * Module dependencies.
 */

var clone = require('@ndhoule/clone');
var each = require('@ndhoule/each');
var type = require('component-type');

/**
 * Recursively convert an `obj`'s dates to new values.
 *
 * @param {Object} obj
 * @param {Function} convert
 * @return {Object}
 */
function convertDates(obj, convert) {
  obj = clone(obj);
  each(function(val, key) {
    if (type(val) === 'date') {
      obj[key] = convert(val);
    }
    if (type(val) === 'object' || type(val) === 'array') {
      obj[key] = convertDates(val, convert);
    }
  }, obj);
  return obj;
}

/*
 * Exports.
 */

module.exports = convertDates;
