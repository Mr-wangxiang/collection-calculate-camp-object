'use strict';
var _ = require('../../mylodash/array.js');
function choose_no_common_elements(collection_a, collection_b) {

    var result = [];
    _(collection_a).each(function(element){
        if (!_(collection_b).exist(element)) {
            result.push(element);
        }
    });
    return result;
}

module.exports = choose_no_common_elements;
