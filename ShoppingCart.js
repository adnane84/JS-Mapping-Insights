// Exercise 10: Shopping Cart
// Develop a simple shopping cart application using a Map to store items and their quantities. 
// Implement functions to add items to the cart, update quantities, 
// calculate total prices, and display the cart's contents.

class ShoppingCart {
  constructor() {
    this.cartItems = new Map();
    this.itemPrices = new Map();
  }

  addItem(item, quantity, price) {
    if (!this.cartItems.has(item)) {
      this.cartItems.set(item, 0);
      this.itemPrices.set(item, price);
    }
    this.cartItems.set(item, this.cartItems.get(item) + quantity);
  }

  updateQuantity(item, quantity) {
    if (!this.cartItems.has(item)) {
      console.log("Item not found in the cart.");
      return;
    }
    this.cartItems.set(item, quantity);
  }

  calculateTotal() {
    let total = 0;
    for (const [item, quantity] of this.cartItems) {
      total += this.itemPrices.get(item) * quantity;
    }
    return total.toFixed(2);
  }

  displayCart() {
    for (const [item, quantity] of this.cartItems) {
      console.log(`Item: ${item}, Quantity: ${quantity}, Price per item: ${this.itemPrices.get(item)}`);
    }
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem("Apple", 5, 0.5);
shoppingCart.addItem("Banana", 3, 0.3);
shoppingCart.addItem("Orange", 2, 0.6);

shoppingCart.updateQuantity("Apple", 3);
shoppingCart.updateQuantity("Banana", 4);

console.log("Total price:", shoppingCart.calculateTotal());

console.log("Shopping cart contents:");
shoppingCart.displayCart();
