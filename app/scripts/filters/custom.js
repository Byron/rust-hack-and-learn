'use strict';

angular.module('hackAndLearnAppApp')
.filter('byDifficulty', function(){
  function byDifficulty(input, difficulties) {
    if (!difficulties) {
      return input;
    }

    var validDifficulties = {};
    angular.forEach(difficulties, function(value, field) {
      if (value === true) {
        validDifficulties[field] = null;
      }
    });

    var output = [];
    for (var i = 0; i < input.length; i++) {
      var object = input[i];
      if (object.difficulty in validDifficulties) {
        output.push(object);
      }
    }
    return output;
  }
  return byDifficulty;
});
