# _Pizza Shop_

#### By _**Andrew Henderson**_

#### _A website where you can order a customized pizza_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

## Description

_You can make a pizza by choosing from a list of sizes and various toppings. Depending on your selection, the site will show the cost of the pizza._

## Setup/Installation Requirements

* _Clone or download all the files from ```https://github.com/DrewHendersonGitHub/pizza-parlor```._
* _Open the index.html inside a web browser._

## Known Bugs

* _There are currently no known bugs_

## License

_Copyright 2021 Andrew Henderson_

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) _2021_ _Andrew Henderson_

Specs:

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
\
Code: const myPizza = new Pizza("1", "deep-dish", "tomato", "extra-cheese", ["pepperoni", "sausage"], ["mushroom", "olive", "pineapple"]);
\
Expected Output: Pizza { size: '1', crust: 'deep-dish', sauce: 'tomato', cheese: 'extra-cheese', meat: ['pepperoni', 'sausage'], other: ['mushroom', 'olive', 'pineapple'] }


Describe: getCost()

Test: "Buying a small pizza with the least amount of toppings will be the cheapest"
\
Code: const myPizza = new Pizza("0.75", "regular", "ranch", "no cheese", [], []);
myPizza.getCost();
\
Expected Output: 7.50

Test: "Changing the size will multiply the total price of the pizza"
\
Code: const myPizza = new Pizza("1.25", "regular", "ranch", "no cheese", [], []);
myPizza.getCost();
\
Expected Output: 12.50

Test: "Selecting deep dish crust will make the price 1 dollar higher"
\
Code: const myPizza = new Pizza("1.25", "deep-dish", "ranch", "no cheese", [], []);
myPizza.getCost();
\
Expected Output: 13.50

Test: "Changing the sauce will not affect the price"
\
Code: const myPizza = new Pizza("1.25", "deep-dish", "pesto", "no cheese", [], []);
myPizza.getCost();
\
Expected Output: 13.50

Test: "Selecting extra cheese will increase the price by 1 dollar"
\
Code: const myPizza = new Pizza("1.25", "deep-dish", "ranch", "extra cheese", [], []);
myPizza.getCost();
\
Expected Output: 14.50

Test: "Each meat topping will increase the price by 1 dollar for a medium pizza"
\
Code: const myPizza = new Pizza("1", "deep-dish", "ranch", "extra cheese", ["pepperoni", "chicken"], []);
myPizza.getCost();
\
Expected Output: 14.00

Test: "Each meat topping will increase the price by 1.25 dollars for a large pizza"
\
Code: const myPizza = new Pizza("1.25", "deep-dish", "ranch", "extra cheese", ["pepperoni", "chicken"], []);
myPizza.getCost();
\
Expected Output: 17.00

Test: "Each other topping will increase the price by 50 cents for a medium pizza"
\
Code: const myPizza = new Pizza("1", "deep-dish", "ranch", "extra cheese", ["pepperoni", "chicken"], ["green-pepper", "jalapeño"]);
myPizza.getCost();
\
Expected Output: 15.00

Test: "Each other topping will increase the price by 62.5 cents for a large pizza"
\
Code: const myPizza = new Pizza("1.25", "deep-dish", "ranch", "extra cheese", ["pepperoni", "chicken"], ["green-pepper", "jalapeño"]);
myPizza.getCost();
\
Expected Output: 18.25

Test: "A large pizza with all the available toppings will be the most expensive"
\
Code: const myPizza = new Pizza("1.25", "deep-dish", "pesto", "cheese", ["pepperoni", "sausage", "bacon", "canadian-bacon", "chicken"], ["mushroom", "onion", "olive", "green-pepper", "pineapple", "anchovies", "jalapeño"]);
myPizza.getCost();
\
Expected Output: 24.13