'use strict';
var _ = require('../../mylodash/array.js');
function get_charcode(element){
    return String.fromCharCode(element+96);
}

var number_map_to_word = function(collection){
    var array = [];
    _(collection).each(function(element){
        array.push(element);
    });
    var result = [];
    _(collection).each(function(element){
        result.push(get_charcode(element));
    });
    return result;
};

module.exports = number_map_to_word;
