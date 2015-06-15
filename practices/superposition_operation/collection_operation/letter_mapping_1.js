'use strict';
var _ = require('../../../mylodash/array.js');
function from_char_code(num) {
    return String.fromCharCode(num+96);
}

function even_to_letter(collection) {

  var array = [];
  _(collection).each(function (element) {
      array.push(element);
  });
  var result = _(array).filter(function (element) {
      return element%2 === 0;
  }).map(function (element) {
      return from_char_code(element);
  }).value();
  return result;
}

module.exports = even_to_letter;
