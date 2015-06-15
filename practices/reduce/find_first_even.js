'use strict';
var _ = require('../../mylodash/array.js');
function find_first_even(collection) {

    var first_even = _(collection).filter(function (element) {
        return element%2 === 0;
    }).first() ;
    return first_even;
}

module.exports = find_first_even;
