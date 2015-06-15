'use strict';
var _ = require('../../mylodash/array.js');
function get_integer_interval(number_a, number_b) {

  var result = [];
  result = _().range(number_a,number_b).value();
  return result;

}
module.exports = get_integer_interval;
