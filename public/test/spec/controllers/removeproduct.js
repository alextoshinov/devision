'use strict';

describe('Controller: RemoveproductCtrl', function () {

  // load the controller's module
  beforeEach(module('devisionApp'));

  var RemoveproductCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RemoveproductCtrl = $controller('RemoveproductCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RemoveproductCtrl.awesomeThings.length).toBe(3);
  });
});
