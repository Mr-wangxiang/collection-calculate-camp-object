'use strict';
var _ = require('../../../mylodash/array.js');
function get_charcode(element){
    return String.fromCharCode(element+96);
}
function get_result(element) {

    var LENGTH = 26;
    var link = '';
    var left,right,temp;
    left = String.fromCharCode(Math.ceil(element/LENGTH)+95);
    var remainder = element%LENGTH;
    temp = remainder === 0 ? LENGTH :remainder;
    right = get_charcode(temp);
    link = left+right;
    return link;
}

function median_to_letter(collection) {

    var array = [];
    _(collection).each(function (element) {
        array.push(element);
    });
    var result = Math.ceil(_(array).array_sort(function (a, b) {
        return a > b;
    }).cal_median());
    var result_median = get_result(result);
    return result_median;

}

module.exports = median_to_letter;
