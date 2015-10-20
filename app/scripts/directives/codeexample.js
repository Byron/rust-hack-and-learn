'use strict';

angular.module('katarsApp')
  .directive('codeexample', ['Katas', function(Katas) {

    function link($scope, element, attrs) {
      if (!$scope.fileName) {
        throw new Error("file-name attribute must be set");
      }

      if (!$scope.kata) {
        throw new Error("kata attribute must be set");
      }

      function setCodeText(value) {
        var codeElement = element.find('pre > code')[0];
        codeElement.textContent = value;
        hljs.highlightBlock(codeElement);
      }

      $scope.content = null;
      $scope.exampleUrl = Katas.exampleUrl($scope.kata, $scope.fileName);
      $scope.status = {
        open: false
      };

      $scope.$watch('content', function(newValue) {
        setCodeText(newValue);
      });

      $scope.$watch('status', function(status) {
        if (status.open && !$scope.content) {
          Katas.exampleFilePromise($scope.kata, $scope.fileName)
            .then(function(response) {
              $scope.content = response.data;
            }).catch(function(error) {
              $scope.content = error.data;
            });
        }
      }, true);
    }

    return {
      restrict: 'E',
      // replace: true,
      templateUrl: 'views/directives/code-example.html',
      scope: {
        fileName: '=',
        kata: '='
      },
      link: link
    };
  }]);
