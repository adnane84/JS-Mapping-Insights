// Exercise 5: Product Inventory
// Create an inventory system using a Map where each product has a name, price, and quantity.
// Implement functions to add products to the inventory, update product quantities, and retrieve product information by name.


class InventorySystem {
  constructor() {
    this.inventory = new Map();
  }

  addProduct(name, price, quantity) {
    if (this.inventory.has(name)) {
      console.log("Product already exists. Use updateProduct() to change details.");
      return;
    }
    this.inventory.set(name, { price, quantity });
  }

  updateProduct(name, price, quantity) {
    if (!this.inventory.has(name)) {
      console.log("Product does not exist. Use addProduct() to add it.");
      return;
    }
    const product = this.inventory.get(name);
    product.price = price;
    product.quantity = quantity;
  }

  getProductInfo(name) {
    if (!this.inventory.has(name)) {
      return "Product not found";
    }
    const { price, quantity } = this.inventory.get(name);
    return `Name: ${name}, Price: $${price.toFixed(2)}, Quantity: ${quantity}`;
  }
}

const inventorySystem = new InventorySystem();

inventorySystem.addProduct("Apple", 0.5, 100);
inventorySystem.addProduct("Banana", 0.3, 150);

inventorySystem.updateProduct("Apple", 0.6, 120);

console.log(inventorySystem.getProductInfo("Apple"));
console.log(inventorySystem.getProductInfo("Banana"));
console.log(inventorySystem.getProductInfo("Orange"));
