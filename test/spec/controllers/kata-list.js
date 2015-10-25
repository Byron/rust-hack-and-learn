'use strict';

describe('Controller: KataListCtrl', function () {

  // load the controller's module
  beforeEach(module('katarsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('KataListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesome katas to the scope', function () {
    expect(scope.katas.length).not.toBe(0);
    expect(scope.difficulties.length).not.toBe(0);
  });
});
