'use strict';

/**
 * @ngdoc overview
 * @name devisionApp
 * @description
 * # devisionApp
 *
 * Main module of the application.
 */
angular
  .module('devisionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'toastr',
    'angularFileUpload'
  ])
  .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/products', {
          templateUrl: 'views/products.html',
          controller: 'ProductsCtrl',
          controllerAs: 'products',
          navitem: true,  
          name: 'products', 
          title: 'Products'
        })
        .when('/add', {
          templateUrl: 'views/addproducts.html',
          controller: 'AddproductCtrl',
          controllerAs: 'addproduct',
          navitem: true,  
          name: 'Add product', 
          title: 'Add product'
        })
        .when('/show/:id', {
          templateUrl: 'views/show.html',
          controller: 'ShowCtrl',
          controllerAs: 'show',
          navitem: false,  
          name: 'Product details', 
          title: 'Product details'
        })
        
        .otherwise({
          redirectTo: '/products'
        });
        // Removes the # in urls
        $locationProvider.html5Mode(true);
        //
  }]);
