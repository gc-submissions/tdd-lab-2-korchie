// Cart class (5 points)
// In the file Cart.js, create a Cart class and export it.
// The constructor has no parameters. It always sets an items property to an empty array. This array will later have Products added to it.
// It has several methods
// add(product) - This takes a product parameter (of type Product) and adds it to the items array.
// getItemCount() - This has no parameters and returns the length of the items array.
// getTotalBeforeTax() - This has no parameters and returns the sum of the price of all Products in the items array.
// getTotalWithTax() - This has no parameters and returns the sum of the getPriceWithTax() method of all Products in the items array.
// getTax() - This has no parameters. It subtracts the results of getTotalWithTax and getTotalBeforeTax and returns the result.

class Cart {
    constructor(){
        this.items = [];
    }

    add(product){
        // This takes a product parameter (of type Product) and adds it to the items array.
        this.items.push(product);
    }
    
    getItemCount(){
        // returns the length of the items array
        return this.items.length;
    }

    getTotalBeforeTax(){
        // This has no parameters and returns the sum of the price of all Products in the items array.
        let sum = 0;
        this.items.forEach(function(item){
            sum += item.price;
        })
        return sum;

        // for (let i = 0; i < Cart.length; i++){
        //     console.log(items.price);
        // }
    }

    getTotalWithTax() {
        // This has no parameters and returns the sum of the getPriceWithTax() method of all Products in the items array.
        let total = 0;
        this.items.forEach((item) => {
            total += item.getTotalWithTax();
        })
        return total;    
    }

    getTax() {
        // This has no parameters. It subtracts the results of getTotalWithTax and getTotalBeforeTax and returns the result.
        return this.getTotalWithTax() - this.getTotalBeforeTax();
    }

    
    
    
    
}

module.exports = Cart;
