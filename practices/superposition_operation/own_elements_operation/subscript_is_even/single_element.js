'use strict';
var _ = require('../../../../mylodash/array.js');
var single_element = function(collection){
    var temp = {};
    _(collection).filter(function (element,i) {
        return (i+1)%2 === 0;
    }).each(function (element, i) {
        temp[element+'_'] = temp[element+'_'] || 0;
        temp[element+'_'] = temp[element+'_'] + 1;
    });
    var result = [];
    for (var x in temp) {
        if (temp[x] == 1) {
        result.push(parseInt(x));
        }
    }
    return result ;


};
module.exports = single_element;
