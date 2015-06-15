'use strict';
var _ = require('../../mylodash/array.js')
function collect_last_element(collection) {

  var result = _(collection).last();
  return result;
}

module.exports = collect_last_element;
