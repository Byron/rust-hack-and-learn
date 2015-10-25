'use strict';

describe('Controller: KataDetailCtrl', function() {

  beforeEach(module('hackAndLearnAppApp'));

  var DetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailCtrl = $controller('KataDetailCtrl', {
      $scope: scope,
      $route: {current: {params: {kata: 'foo'}}}
        // place here mocked dependencies
    });
  }));

  it('should not fail on invalid kata name', function() {
    expect(scope.kata).toBe(null);
  });
});
