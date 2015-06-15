'use strict';
var _ = require('../../mylodash/array.js');
// function get_result(array) {
//     var result = [];
//     var LENGTH = 26;
//     for (var i = 0; i < array.length; i++) {
//           if(array[i]>LENGTH){
//               var link = '';
//               var left,right,temp;
//               left = String.fromCharCode(Math.ceil(array[i]/LENGTH)+95);
//               var remainder = array[i]%LENGTH;
//               temp = remainder === 0 ? LENGTH :remainder;
//               right = get_charcode(temp);
//               link = left+right;
//               result[result.length] = link;
//           }else{
//                 result[result.length] = get_charcode(array[i]);
//           }
//     }
//     return result;
// }
function get_charcode(element){
    return String.fromCharCode(element+96);
}

function get_result(element) {
    if ((element+'').length == 1) {
        return get_charcode(element);
    }
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

function get_letter_interval_2(number_a, number_b) {

  var result = _().range(number_a,number_b).map(function (element) {
      return get_result(element);
  }).value();
  return result;
}

module.exports = get_letter_interval_2;
