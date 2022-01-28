function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getCost = function() {
  return ((10 + this.toppings.length) * this.size);
}