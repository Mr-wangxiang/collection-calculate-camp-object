'use strict';
var _ = require('../../../mylodash/array.js');
function from_char_code(num) {
    return String.fromCharCode(num+96);
}
function average_to_letter(collection) {

  var array = [];
  var result = 0;
  _(collection).each(function (element) {
      array.push(element);
  });
  var average = Math.ceil(_(array).average());
  result = from_char_code(average);
  return result;
}

module.exports = average_to_letter;
