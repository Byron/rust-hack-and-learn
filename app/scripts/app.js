'use strict';

/**
 * @ngdoc overview
 * @name katarsApp
 * @description
 * # katarsApp
 *
 * Main module of the application.
 */
angular
  .module('katarsApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
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
