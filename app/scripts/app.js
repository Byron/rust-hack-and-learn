'use strict';

/**
 * @ngdoc overview
 * @name hackAndLearnAppApp
 * @description
 * # hackAndLearnAppApp
 *
 * Main module of the application.
 */
angular
  .module('hackAndLearnAppApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngTouch',
    'btford.markdown',
    'ui.bootstrap',
    'config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/install', {
        templateUrl: 'views/download.html',
        controller: 'DownloadCtrl',
        controllerAs: 'ctrl'
      })
      .when('/katas', {
        templateUrl: 'views/katas.html',
        controller: 'KataListCtrl',
        controllerAs: 'ctrl'
      })
      .when('/pairing-guide', {
        controller: 'PairingCtrl',
        templateUrl: 'views/pairing.html',
      })
      .when('/katas/:kata', {
        templateUrl: 'views/kata-details.html',
        controller: 'KataDetailCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
