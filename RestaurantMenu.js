// Exercise 19: Restaurant Menu
// Design a restaurant menu system using a Map where menu items are stored with their names as keys and prices as values. 
// Implement functions to add items to the menu, update prices, and calculate the total cost of an order.

class RestaurantMenu {
  constructor() {
    this.menuItems = new Map();
  }

  addItem(itemName, price) {
    this.menuItems.set(itemName, price);
  }

  updatePrice(itemName, newPrice) {
    if (this.menuItems.has(itemName)) {
      this.menuItems.set(itemName, newPrice);
      console.log(`Price for '${itemName}' updated to $${newPrice.toFixed(2)}.`);
    } else {
      console.log(`Item '${itemName}' not found.`);
    }
  }

  calculateTotalOrderCost(order) {
    let totalCost = 0;
    for (const [itemName, quantity] of order) {
      if (this.menuItems.has(itemName)) {
        const price = this.menuItems.get(itemName);
        totalCost += price * quantity;
      } else {
        console.log(`Item '${itemName}' not found in menu.`);
      }
    }
    return totalCost;
  }
}

const restaurantMenu = new RestaurantMenu();

restaurantMenu.addItem("Burger", 8.99);
restaurantMenu.addItem("Pizza", 10.99);
restaurantMenu.addItem("Salad", 5.99);

restaurantMenu.updatePrice("Pizza", 11.99);

const order = new Map([
  ["Burger", 2],
  ["Pizza", 1],
  ["Coke", 3]
]);

const totalCost = restaurantMenu.calculateTotalOrderCost(order);

console.log(`Total order cost: $${totalCost.toFixed(2)}`);
