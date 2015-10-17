'use strict';

angular.module('katarsApp')
  .factory('Katas',
    function() {
      var katas = [{
        name: 'Kata1',
      }, ];

      return {
        items: katas,
      };
    });
