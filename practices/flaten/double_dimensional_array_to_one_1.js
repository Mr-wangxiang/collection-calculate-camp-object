'use strict';
var _ = require('../../mylodash/array.js');
function double_to_one(collection) {

    var combine = collection.join().split(',');
    var result = [];
    _(combine).each(function(element){
        result.push(Number(element));
    });
    return result;
}

module.exports = double_to_one;
