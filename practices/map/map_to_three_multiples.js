'use strict';
var _ = require('../../mylodash/array.js');
var map_to_three_multiples = function(collections){

    var result = _(collections).map(function(element){
        return element * 3;
    }).value();
    return result ;
};

module.exports = map_to_three_multiples;
