'use strict';
var _ = require('../../mylodash/array.js');
function compute_average(collection) {
  var average = _(collection).sum()/collection.length;
  return average;
}

module.exports = compute_average;
