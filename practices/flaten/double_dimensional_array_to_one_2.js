'use strict';
var _ = require('../../mylodash/array.js');
function double_to_one(collection) {

  var combine = collection.join().split(',');
  var result = [];
  var no_repeat = [];
  _(combine).each(function(element){
      result.push(Number(element));
  });
  _(result).each(function(element){
      if (!_(no_repeat).exist(element)) {
          no_repeat.push(element);
      }
  });
  return no_repeat;
}

module.exports = double_to_one;
