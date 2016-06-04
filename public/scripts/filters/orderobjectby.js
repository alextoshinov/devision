'use strict';

/**
 * @ngdoc filter
 * @name devisionApp.filter:orderObjectBy
 * @function
 * @description
 * # orderObjectBy
 * Filter in the devisionApp.
 */
angular.module('devisionApp')
  .filter('orderObjectBy', function () {
    return function(input, attribute) {
           if (!angular.isObject(input)) return input;

           var array = [];
           for(var objectKey in input) {
               array.push(input[objectKey]);
           }

           array.sort(function(a, b){
               a = parseInt(a[attribute]);
               b = parseInt(b[attribute]);
               return a - b;
           });
           return array;
        };
  });
