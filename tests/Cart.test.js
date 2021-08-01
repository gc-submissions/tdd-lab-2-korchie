const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");

describe("Cart", () => {
  // #1
  test("Confirm that the constructor correctly sets the items property to an empty array", () => {
    // Arrange
    let cart = new Cart();
    // Act
      // *NA*
    // Assert
    expect(cart.items).toEqual([]);
  });


  // #2
  test("Calling add once adds one product to the items array", () => {
    // Arrange
    let cart = new Cart();
    let iceSkates = new Product("ice skates", 200, true);
    
    // Act
    cart.add(iceSkates);

    // Assert
    expect(cart.items.length).toBe(1);

    expect(cart.items[0].name).toBe("ice skates");

  });

  // #3
  {
    // Arrange
    let cart = new Cart();
    let android = new Product("Samsung Note 20", 1000, true);
    let controller = new Product("PS4 controller", 60, true);

    // Act
    cart.add(android);
    cart.add(controller);

    // Assert
    test("Calling add twice leaves a total of two Products in the items array", () => {
      expect(cart.items.length).toBe(2);
    })

    test("Calling add twice leaves a total of two Products in the items array, checking cart item 1", () => {
      expect(cart.items[0]).toEqual({name:"Samsung Note 20", price: 1000, taxable: true});
    })

    test("Calling add twice leaves a total of two Products in the items array, checking cart item 2", () => {
      expect(cart.items[1]).toEqual({name:"PS4 controller", price: 60, taxable: true})
    })


    // #4
    // getItemCount returns the length of the items array. You will have to call the add method one or more times to fill the array. (Write two test cases with different amounts of items.)
    test("getItemCount returns the length of the items array", () => {
      // Arrange
      
      // Act
  
      // Assert
      expect(cart.getItemCount()).toBe(2); // meaning 2 things were added
    })

    test("getItemCount returns the length of the items array.. added another Android", () => {
      // Arrange
      
      // Act
      cart.add(android);

      // Assert
      expect(cart.getItemCount()).toBe(3);
    })

    // #5
    // getTotalBeforeTax returns the sum of the price of all Products in the items array. (Write two test cases with different mixes of taxable and non-taxable products and with different numbers of products.)
    test("getTotalBeforeTax returns the sum of the price of all Products in the items array", () => {
      expect(cart.getTotalBeforeTax()).toBeCloseTo(2060);
    })

    test("getTotalBeforeTax returns the sum of the price of all Products in the items array", () => {
      // Act
      let lettuce = new Product("lettuce", 3, false);
      expect(cart.getTotalBeforeTax()).toBeCloseTo(2060);
    })

    // #6
    // getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array. Remember to use toBeCloseTo with floating point numbers. (Write two test cases with different mixes of taxable and non-taxable products and with different numbers of products.)
    test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array", () => {
      expect(cart.getTotalWithTax()).toBeCloseTo(2266);
    })

    test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array... added a controller", () => {
      // Arrange
      // Act
      cart.add(controller);

      // Assert
      expect(cart.getTotalWithTax()).toBeCloseTo(2332);
    })

    // #7
    // getTax returns the difference between getTotalWithTax and getTotalBeforeTax. As before, add some sample items in order to get some numbers to work with
    test("getTax returns the difference between getTotalWithTax and getTotalBeforeTax", () => {
      // Arrange

      // Act

      // Assert
      expect(cart.getTax()).toBeCloseTo(212);
    })

  }






  // test("get amount with tax", () => {
  //   // Arrange
  //   let cart = new Cart();
  //   let waterBottle = new Product("water bottle", 10, true);

  //   // Act
    

  //   // Assert
  //   expect(cart.getTax()).toEqual(10);
  // });

});