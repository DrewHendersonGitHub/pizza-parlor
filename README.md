Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
\
Code: const myPizza = new Pizza("1", "deep-dish", "tomato", "extra-cheese", ["pepperoni", "sausage"], ["mushroom", "olive", "pineapple"]);
\
Expected Output: Pizza { size: '1', crust: 'deep-dish', sauce: 'tomato', cheese: 'extra-cheese', meat: ['pepperoni', 'sausage'], other: ['mushroom', 'olive', 'pineapple'] }


Describe: getCost()

Test: "It should return the amount a Pizza would cost based on toppings and size"
\
Code: const myPizza = new Pizza("1", "deep-dish", "tomato", "extra-cheese", ["pepperoni", "sausage"], ["mushroom", "olive", "pineapple"]);
myPizza.getCost();
\
Expected Output: 15.50