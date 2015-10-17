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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
