"use strict";

const formatCurrency = (amount) => {
    let abs = Math.abs(amount);

    return amount >= 0 ? "$" + abs.toFixed(2) : "-$" + abs.toFixed(2);
};


const getCoins = (cents ) => { // returns a number
// The function determines how many quarters, dimes, nickels, and pennies are required to make up the given number of cents. It must find the combination of these coins with the minimum number of coins.
// It returns the result as an object with the names of the coins as keys. The following example would represent 1 quarter, 0 dimes, 1 nickel, and 2 pennies (32 cents).
// It returns the result as an object with the names of the coins as keys. The following example would represent 1 quarter, 0 dimes, 1 nickel, and 2 pennies (32 cents).

// imagine 41 cent

let change = cents;

// how many quarters is that?

// divide how much money we have by 25, rounded down
let quarters = Math.floor(change / 25);

// then we ask, how much money is left?
change -= quarters * 25; // 16 cent

let dimes = Math.floor(change / 10);
change -= dimes * 10; // 6 cent

let nickels = Math.floor(change / 5);
change -= nickels * 5; // 1 cent

let pennies = change;

return {
    quarters: quarters,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies
};

};

module.exports = {formatCurrency, getCoins};