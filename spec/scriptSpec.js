const calculateInterest = require('../script.js');

describe("calculateInterest", function () {

  it("calculates simple interest correctly for numeric inputs", function () {
    const result = calculateInterest(1000, 5, 2);
    expect(result).toBe(100);
  });

  it("converts string inputs to numbers correctly", function () {
    const result = calculateInterest("1000", "5", "2");
    expect(result).toBe(100);
  });

});
