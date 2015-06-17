'use strict';
var each = require('../../mylodash/array/each.js');
function calculate_elements_sum(collection, element_index) {
    return _(collection).first_index(element_index);
}
module.exports = calculate_elements_sum;
