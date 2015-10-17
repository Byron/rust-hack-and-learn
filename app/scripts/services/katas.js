'use strict';

angular.module('katarsApp')
  .factory('Katas',
    function() {

      var difficulties = ['easy', 'medium', 'hard'];

      var katas = [{
        name: 'Kata1',
        difficulty: difficulties[0],
        short_description: "This one is easy",
        description: "multilines ... or from url ...",
      },
      {
        name: 'Kata 2',
        difficulty: difficulties[1],
        short_description: "This one is not so easy",
        description: "multilines ... or from url ...",
      },
      {
        name: 'Kata 3',
        difficulty: difficulties[2],
        short_description: "This one is quite hard",
        description: "multilines ... or from url ...",
      }, ];

      return {
        items: katas,
      };
    });
