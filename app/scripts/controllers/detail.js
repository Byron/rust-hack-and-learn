'use strict';

angular.module('katarsApp')
  .controller('KataDetailCtrl', ['$scope', 'Katas', '$route',  function($scope, Katas, $route) {
    var kataName = $route.current.params.kata;
    if (!angular.isString(kataName)) {
      throw new Error("INTERNAL ERROR: no kata name found in route");
    }
    $scope.kata = Katas.byName(kataName);
    $scope.kataName = kataName;
  }]);
