const {formatCurrency, getCoins} = require("../src/js/money-functions");

// Given the amount 0, it returns "$0.00".
// Given the amount 1, it returns "$1.00".
// Given the amount 1.5 it returns "$1.50".
// Given the amount 0.01, it returns "$0.01".
// Given the amount 527.6789, it returns "$527.68".
// Given the amount -1, it returns "-$1.00".
// Add two more test cases with numbers that you choose.


describe("formatCurrency", () => {

  test(`Given the amount 0, it returns "$0.00".`, () => {
    expect(formatCurrency(0)).toBe("$0.00");

  });

  test(`Given the amount 1, it returns "$1.00".`, () => {
    expect(formatCurrency(1)).toBe("$1.00");
  });

  test(`Given the amount 1.5 it returns "$1.50".`, () => {
    expect(formatCurrency(1.5)).toBe("$1.50");
  });

  test(`Given the amount 0.01, it returns "$0.01".`, () => {
    expect(formatCurrency(0.01)).toBe("$0.01");
  });

  test(`Given the amount 527.6789, it returns "$527.68".`, () => {
    expect(formatCurrency(527.6789)).toBe("$527.68");
  });

  test(`Given the amount -1, it returns "-$1.00".`, () => {
    expect(formatCurrency(-1)).toBe("-$1.00");
  });

  test(`Given the amount 44.44444, it returns "$44.44".`, () => {
    expect(formatCurrency(44.44444)).toBe("$44.44");
  });

  test(`Given the amount -2087.15511, it returns "-$2087.16".`, () => {
    expect(formatCurrency(-2087.15511)).toBe("-$2087.16");
  });

});


// 32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
// 10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.
// 27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.
// 68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", () => {
    expect(getCoins(32)).toStrictEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
  });

  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", () => {
    expect(getCoins(10)).toStrictEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
  });

  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", () => {
    expect(getCoins(27)).toStrictEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
  });

  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", () => {
    expect(getCoins(68)).toStrictEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
  });

});