'use strict';
var _ = require('../../mylodash/array.js');
function map_to_even(collection){

    var result = _(collection).map(function(element){
        return element * 2;
    }).value();
    return result;

}
module.exports = map_to_even;
