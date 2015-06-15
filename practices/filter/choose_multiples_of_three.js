'use strict';
var _ = require('../../mylodash/array.js');
function choose_multiples_of_three(collection) {

  var result = _(collection).filter(function(element){
                return element%3 === 0;
    }).value();
  return result;
}

module.exports = choose_multiples_of_three;
