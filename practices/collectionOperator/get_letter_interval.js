'use strict';
var _ = require('../../mylodash/array.js');
function get_charcode(element){
    return String.fromCharCode(element+96);
}
function get_letter_interval(number_a, number_b) {
  var result = _().range(number_a,number_b).map(function (element) {
      return get_charcode(element);
  }).value();
  return result;
}

module.exports = get_letter_interval;
