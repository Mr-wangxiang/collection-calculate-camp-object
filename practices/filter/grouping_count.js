'use strict';
var _ = require('../../mylodash/array.js');
function grouping_count(collection) {

  var temp = {};
  _(collection).each(function(element){
      temp[element] = temp[element] || 0;
      temp[element]++;
  });
  return temp;

}

module.exports = grouping_count;
