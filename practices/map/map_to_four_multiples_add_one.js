'use strict';
var _ = require('../../mylodash/array.js');
var map_to_four_multiples_add_one = function(collection){

    var result = _(collection).map(function(element){
        return (element * 4) + 1;
    }).value();
    return result ;

};

module.exports = map_to_four_multiples_add_one;
