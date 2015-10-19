'use strict';

angular.module('katarsApp')
  .factory('Katas', ['$http', 'URL_PREFIX',
    function($http, URL_PREFIX) {

      var difficulties = ['easy', 'medium', 'hard'];

      var katas = [{
        name: 'Simple Lists',
        difficulty: difficulties[0],
        shortDescription: "Implement a linked list",
        originalSource: "http://codekata.com/kata/kata21-simple-lists/",
        description_md: "multilines ... or from url ...",
        example: {
          files: [
            'linked-list.rb'
          ]
        }
      }, ];

      var uniqueName = {};
      for (var i = 0; i < katas.length; i++) {
        if (katas[i].name in uniqueName) {
          throw new Error("Duplicate name: " + katas[i]);
        }
        uniqueName[katas[i].name] = null;
      }

      function kataResourceUrl(name) {
        return URL_PREFIX + [
          '/resources/',
          'katas',
          name
        ].join('/');
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

      function fetchDescription(kata) {
        return $http.get([kataResourceUrl(kata.name), 'description.md'].join('/'), {cache: true});
      }

      function fetchExample(kata, fileName) {
        return $http.get([kataResourceUrl(kata.name), 'examples', fileName].join('/'), {cache: true});
      }

      return {
        items: katas,
        difficulties: difficulties,
        byName: kataByName,
        descriptionPromise: fetchDescription,
        exampleFilePromise: fetchExample
      };
    }]);
