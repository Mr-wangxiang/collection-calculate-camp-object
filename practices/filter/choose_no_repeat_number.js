'use strict';
var _ = require('../../mylodash/array.js');
function choose_no_repeat_number(collection) {
  var result = [];
  _(collection).each(function(element){
      if (!_(result).exist(element)) {
          result.push(element);
      }
  });
  return result;
 }

module.exports = choose_no_repeat_number;
