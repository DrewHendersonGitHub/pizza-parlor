Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
\
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
\
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }


Describe: getCost()

Test: "It should return the amount a Pizza would cost based on toppings and size"
\
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
myPizza.getCost();
\
Expected Output: 12