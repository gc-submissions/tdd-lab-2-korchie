const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");

describe("Cart", () => {
  test("Confirm that the constructor correctly sets the items property to an empty array", () => {
    // Arrange
    let cart = new Cart();
    // Act

    // Assert
    expect(cart.items).toEqual([]);
  })


  test("add Cart tests here", () => {
    // Arrange
    let cart = new Cart();
    let iceSkates = new Product("ice skates", 200, true);
    
    // Act
    cart.add(iceSkates);

    // Assert
    expect(cart.getTotalBeforeTax()).toEqual(200);

  });

  test("get amount with tax", () => {
    // Arrange
    let cart = new Cart();
    let waterBottle = new Product("water bottle", 10, true);

    // Act
    

    // Assert
    expect(cart.getTax()).toEqual(100);
  })


});