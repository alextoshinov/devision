'use strict';

/**
 * @ngdoc directive
 * @name devisionApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('devisionApp')
  .directive('navbar', ['$rootScope', '$window', function ($rootScope, $window) {
                "use strict";
                return {
                    restrict: 'AE',
                    replace: true,
                    transclude: false,
                    scope: {
                        title: '@'
                    },
      
     
      	controller: ['$scope', '$location', '$route', function ($scope, $location, $route) {
         	$scope.navClass = function (page) {
                            var currentRoute = $location.path().substring(1).split('/')[0];
                            return page === currentRoute ? 'active' : '';
                        };
            $scope.routes = [];
                        
            angular.forEach($route.routes, function (value, key) {
                if (value.navitem) {
                    var routeitem = {};
                    routeitem.path = value.originalPath;
                    routeitem.name = value.name;
                    routeitem.title = value.title;
                    routeitem.templateUrl = value.templateUrl;
                    routeitem.controller = value.controller;
                    $scope.routes.push(routeitem);
                }
            });
            $scope.isCollapsed = true;                        
    	}],
    	template: 
		      '<div class="collapse navbar-collapse" id="js-navbar-collapse">' +
		            '<ul class="nav navbar-nav">' +              
		              '<li ng-repeat="route in routes" data-ng-class="navClass(\'{{route.name}}\')">' +
		                    '<a ng-href="{{route.path}}" ng-bind="route.title"></a>' +
		              '</li>' +
		            '</ul>' +
		          '</div>'
		};          
  }]);
