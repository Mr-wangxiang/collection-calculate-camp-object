'use strict';
var _ = require('../../mylodash/array.js');
function choose_even(collection) {
  var result = _(collection).filter(function(element){
                return element%2 === 0;
    }).value();
  return result;
}

module.exports = choose_even;
