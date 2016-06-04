'use strict';

/**
 * @ngdoc function
 * @name devisionApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the devisionApp
 */


  angular.module('devisionApp')    
    .controller('ProductsCtrl', function ($scope, $http, toastr) {
        //Init 
        $scope.products = {};
        $scope.orderBy = 'name';
        //
        $scope.orderProducts = function(order) {
            $scope.orderBy = order;
        };
        //
        $scope.listProducts = function() {
            $http.get('/api/products')
                  .then(function(response) {
                      $scope.products = response.data;
                      toastr.success('Load products....');
                  })
                  .catch(function(response) {
                      toastr.error(response.data.message, response.status);
                  });
        };
        //
        $scope.removeProduct = function(id) {
            $http.delete('api/products/destroy/' +  id)
                  .then(function(response) {
                      $scope.listProducts();
                      toastr.success('Remove product successfuly');
                  })
                  .catch(function(response) {
                      toastr.error(response.data.message, response.status);
                  });
        };
        //
        $scope.listProducts();

    });
