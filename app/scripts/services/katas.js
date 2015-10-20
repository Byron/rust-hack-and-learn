'use strict';

angular.module('katarsApp')
  .factory('Katas', ['$http',
    function($http) {

      var difficulties = ['easy', 'medium', 'hard'];

      var katas = [{
        name: 'The Reversor',
        id: 'reversor',
        difficulty: difficulties[0],
        shortDescription: "Reverse strings via command-line and library",
      }, {
        name: 'Anagrams',
        id: 'anagrams',
        difficulty: difficulties[0],
        shortDescription: "A tiny anagram generator",
        originalSource: "https://github.com/exercism/xjava/tree/master/anagram",
        example: {
          files: [
            'java/AnagramTest.java',
            'java/Anagram.java'
          ]
        }
      }, {
        name: 'Simple Lists',
        id: 'linked-list',
        difficulty: difficulties[1],
        shortDescription: "Implement a linked list",
        originalSource: "http://codekata.com/kata/kata21-simple-lists/",
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

      function kataResourceUrl(id) {
        return [
          'resources/',
          'katas',
          id
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
        return $http.get([kataResourceUrl(kata.id), 'description.md'].join('/'), {
          cache: true
        });
      }

      function fetchExample(kata, fileName) {
        return $http.get([kataResourceUrl(kata.id), 'examples', fileName].join('/'), {
          cache: true
        });
      }

      return {
        items: katas,
        difficulties: difficulties,
        byName: kataByName,
        descriptionPromise: fetchDescription,
        exampleFilePromise: fetchExample
      };
    }
  ]);
