'use strict';

/**
 * @ngdoc function
 * @name katarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the katarsApp
 */
angular.module('katarsApp')
  .controller('MainCtrl', ['$scope', 'Katas', function ($scope, Katas) {
    $scope.katas = Katas.items;
  }]);
