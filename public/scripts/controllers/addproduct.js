'use strict';

/**
 * @ngdoc function
 * @name devisionApp.controller:AddproductCtrl
 * @description
 * # AddproductCtrl
 * Controller of the devisionApp
 */
angular.module('devisionApp')
    .controller('AddproductCtrl', function ($scope, $http, $location, FileUploader,toastr) {
        //
        $scope.productData = {};
        
        // Upload logo
        var uploader = $scope.uploader = new FileUploader({
            url: 'api/upload',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                    autoUpload:true,
                    alias:"picturePic",
                    removeAfterUpload:true
        });
        // FILTERS
        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });
        //
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            $scope.productData.picture = response.path;
        };
        //
        $scope.addProduct = function() {
            $http.post('/api/products/add', $scope.productData)
                  .then(function(response) {
                      toastr.success('Add product successfull');
                      $location.path('/products');
                  })
                  .catch(function(response) {
                      toastr.error(response.data.message, response.status);
                  });
        };
  });
