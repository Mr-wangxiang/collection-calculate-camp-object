'use strict';
var _ = require('../../../mylodash/array.js');

function average_uneven(collection) {

    return = _(collection).average(function (element) {
        return element%2 !== 0;
    });
}

module.exports = average_uneven;
