var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.round(Math.random() * 100);
 var itemdetail = {itemName: item, itemPrice: price};
 cart.push(itemdetail);
 return `${item} has been added to your cart.`; 
 }

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
