'use strict';
var each = require('../../mylodash/array/each.js');
function calculate_elements_sum(collection, element_index) {

  var index = 0;
  // _(collection).first(function () {
  //
  // })
  for (var i = 0; i < collection.length; i++) {
      if (collection[i] === element_index ) {
          index = i;
          break;
      }
  }
  return index;
}
module.exports = calculate_elements_sum;
