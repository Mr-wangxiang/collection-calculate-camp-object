'use strict';
var _ = require('../../mylodash/array.js');
function collect_all_even(collection) {

  var result = _(collection).filter(function(element){
      return element%2 === 0;
  }).value();
  return result;
}


module.exports = collect_all_even;
