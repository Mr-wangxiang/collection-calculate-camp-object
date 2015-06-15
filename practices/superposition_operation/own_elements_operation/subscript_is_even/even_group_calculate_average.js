'use strict';
var _ = require('../../../../mylodash/array.js');
var even_group_calculate_average = function(collection){
        var result_array = [];
        var temp = {};
        _(collection).filter(function(element, i){
            return (i+1)%2 === 0 && element %2 === 0;
        }).each(function(element){
            temp[(element+'').length] = temp[(element+'').length] || [];
            temp[(element+'').length].push(element);
        });
        for(var key in temp) {
            result_array.push(_(temp[key]).average());
        }
        return result_array.length ===0 ? [0] : result_array;
};
module.exports = even_group_calculate_average;
