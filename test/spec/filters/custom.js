'use strict';

describe('Filters: Custom', function() {
  beforeEach(module('katarsApp'));

  var difficultyFilter, katas;

  beforeEach(inject(function(Katas, $filter) {
    difficultyFilter = $filter('byDifficulty');
    katas = Katas;
  }));

  it('should filter nothing if everything filter is empty or unset', function() {
    expect(difficultyFilter(katas.items, undefined)).toEqual(katas.items);
  });

  it('should remove katas not matching the given difficulty', function() {
    expect(katas.items[0].difficulty).toBe(katas.difficulties[0]);
    expect(difficultyFilter(katas.items, {'easy': true})).toEqual([katas.items[0]]);
  });
});
