'use strict';

angular.module('katarsApp')
  .controller('KataDetailCtrl', ['$scope', 'Katas', '$route', '$timeout', function($scope, Katas, $route, $timeout) {
    var kataName = $route.current.params.kata;
    if (!angular.isString(kataName)) {
      throw new Error("INTERNAL ERROR: no kata name found in route");
    }
    var kata = Katas.byName(kataName);
    $scope.kata = kata;
    $scope.kataName = kataName;
    $scope.description = null;

    // initHighlightingOnLoad();
    $scope.$watch('description', function() {
      $timeout(function() {
        $('.description pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });
      }, 500);
    })

    if (kata) {
      Katas.descriptionPromise(kata)
        .then(function(response) {
          $scope.description = response.data;
        })
        .catch(function(error) {
          $scope.description = error.data;
        });
    }
  }]);
