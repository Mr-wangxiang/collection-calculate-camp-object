'use strict';
var _ = require('../../mylodash/array.js');
function calculate_elements_sum(collection, element_index) {
  var index = 0;
 
  _.each(collection,function (element, i) {
      if (element === element_index) {
          index = i;
      }
  });
  return index;
}

module.exports = calculate_elements_sum;
