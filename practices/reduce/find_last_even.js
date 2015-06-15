'use strict';
var _ = require('../../mylodash/array.js');
function find_last_even(collection) {
  var last_even = _(collection).filter(function (element) {
      return element%2 === 0;
  }).last();
  return last_even;
}

module.exports = find_last_even;
