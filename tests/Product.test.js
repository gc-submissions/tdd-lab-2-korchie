const Product = require("../src/js/Product");

describe("Product", () => {
  test("Confirm that the constructor parameters correctly set three properties on the class", () => {
    // Arrange
    let snickers = new Product("snickers", 1, false);

    // Act 

     // Assert
    expect(snickers).toEqual({name:"snickers", price: 1, taxable: false});
  });
  
  test("Confirm that the constructor parameters correctly set three properties on the class", () => {
    // Arrange
    let apples = new Product("apples", 2, false);
  
    // Act 
  
     // Assert
    expect(apples).toEqual({name:"apples", price: 2, taxable: false});

  });

  test("Given a Product with taxable true, getPriceWithTax returns the price + 10%.", () => {
    // Arrange
    let toys = new Product("toys", 15, true);

    // Act

    // Assert
    expect(toys.getPriceWithTax()).toBeCloseTo(16.5);
  })

  test("Given a Product with taxable true, getPriceWithTax returns the price + 10%.", () => {
    // Arrange
    let nintendo = new Product("Nintendo", 300, true);

    // Act

    // Assert
    expect(nintendo.getPriceWithTax()).toBeCloseTo(330);
  })

  test("Given a Product with taxable false, getPriceWithTax returns just the price.", () => {
    // Arrange
    let pop = new Product("pop", 1.5, false);

    // Act

    // Assert
    expect(pop.getPriceWithTax()).toEqual(1.5);
  })

  test("Given a Product with taxable false, getPriceWithTax returns just the price.", () => {
    // Arrange
    let pizza = new Product("pizza", 10, false);

    // Act

    // Assert
    expect(pizza.getPriceWithTax()).toEqual(10);
  })

});

