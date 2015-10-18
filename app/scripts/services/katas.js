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

      var uniqueName = {};
      for (var i = 0; i < katas.length; i++) {
        if (katas[i].name in uniqueName) {
          throw new Error("Duplicate name: " + katas[i]);
        }
        uniqueName[katas[i].name] = null;
      }

      function kataByName(name) {
        var found = null;
        for (var i = 0; i < katas.length; i++) {
          if (katas[i].name === name) {
            found = katas[i];
            break;
          }
        }
        return found;
      }

      return {
        items: katas,
        difficulties: difficulties,
        byName: kataByName
      };
    });
