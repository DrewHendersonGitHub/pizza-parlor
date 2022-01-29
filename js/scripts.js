function Pizza(size, crust, sauce, cheese, meat, other) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.other = other;
}

Pizza.prototype.getCost = function() {
  let cost = (10 + this.meat.length + this.other.length * 0.5) * parseFloat(this.size);
  if (this.crust === "deep-dish") {
    cost++;
  }
  if (this.cheese === "extra-cheese") {
    cost++;
  }
  return cost.toFixed(2);
}

function getMeat() {
  let meat = [];
  if ($('#pepperoni').is(":checked")) {
    meat.push("pepperoni");
  }
  if ($('#sausage').is(":checked")) {
    meat.push("sausage");
  }
  if ($('#bacon').is(":checked")) {
    meat.push("bacon");
  }
  if ($('#canadian-bacon').is(":checked")) {
    meat.push("canadian-bacon");
  }
  if ($('#chicken').is(":checked")) {
    meat.push("chicken");
  }
  return meat;
}

function getOther() {
  let other = [];
  if ($('#mushroom').is(":checked")) {
    other.push("mushroom");
  }
  if ($('#onion').is(":checked")) {
    other.push("onion");
  }
  if ($('#olive').is(":checked")) {
    other.push("olive");
  }
  if ($('#green-pepper').is(":checked")) {
    other.push("green-pepper");
  }
  if ($('#pineapple').is(":checked")) {
    other.push("pineapple");
  }
  if ($('#anchovies').is(":checked")) {
    other.push("anchovies");
  }
  if ($('#jalepeno').is(":checked")) {
    other.push("jalepeno");
  }
  return other;
}

function attachEventListeners() {}

$(document).ready(function() {
  attachEventListeners();
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    
    let pizza = new Pizza($("#size").val(), $("#crust").val(), $("#sauce").val(), $("#cheese").val(), getMeat(), getOther())
    console.log(pizza, pizza.getCost());
    
  });
});