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

* _Clone or download all the files from```https://github.com/DrewHendersonGitHub/pizza-parlor```._
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

Test: "It should return the amount a Pizza would cost based on toppings and size"
\
Code: const myPizza = new Pizza("1", "deep-dish", "tomato", "extra-cheese", ["pepperoni", "sausage"], ["mushroom", "olive", "pineapple"]);
myPizza.getCost();
\
Expected Output: 15.50