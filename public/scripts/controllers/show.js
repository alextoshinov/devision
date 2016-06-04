'use strict';

/**
 * @ngdoc function
 * @name devisionApp.controller:ShowCtrl
 * @description
 * # ShowCtrl
 * Controller of the devisionApp
 */
angular.module('devisionApp')
  .controller('ShowCtrl', function ($scope, $http, $routeParams) {
      //
      $scope.getProduct = function() {
          $http.get('/api/products/' + $routeParams.id)
                .then(function(response) {
                        $scope.product = response.data;
                });
      };
      //
      $scope.getProduct();
      //
  });
