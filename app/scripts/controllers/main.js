'use strict';

/**
 * @ngdoc function
 * @name katarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the katarsApp
 */
angular.module('katarsApp')
  .controller('MainCtrl', ['$scope', 'Katas', function($scope, Katas) {
    $scope.katas = Katas.items;
    $scope.difficulties = Katas.difficulties;
    $scope.filterDifficulties = {};

    for (var i = 0; i < Katas.difficulties.length; i++) {
      $scope.filterDifficulties[Katas.difficulties[i]] = true;
    }
    this.encodeURI = window.encodeURI;
  }])
  .controller('PairingCtrl', ['$scope', 'URL_PREFIX', function($scope, URL_PREFIX) {
    $scope.imageUrl = URL_PREFIX + '/images/pairing-poster.jpg';
  }]);
