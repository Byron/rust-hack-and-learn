'use strict';

describe('Service: Katas', function () {

  beforeEach(module('hackAndLearnAppApp'));

  var katas;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (Katas) {
    katas = Katas;
  }));

  it('it should provide a list of katas', function () {
    expect(katas.items.length).toBeGreaterThan(0);
  });
});
