function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {}

    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

var crust = [];
var sauce = [];
var cheeses = [];
var toppings = [];

var randNum = 0;

function randomPizza() {
    crust = ["Hand Tossed", "Deep", "Pan"];
    sauce = ["Tomato", "Tradional", "Marinara"];
    cheeses = ["Shreeded", "Mozzarella", "Feta"];
    toppings = ["Canadian Bacon", "Sausage", "Extra Cheese", "Pepperoni", "Mushrooms", "Olives"];

    for (var i = 1; i < 5; i++) {
        if (i == 1) {
            len = crust.length;
            randomNum(len);
            buildPizza(0);
        } else if (i == 2) {
            len = sauce.length;
            randomNum(len);
            buildPizza(1);
        }
        else if (i == 3) {
            len = cheeses.length;
            randomNum(len);
            buildPizza(2);
        }
        else {
            len = toppings.length;
            randomNum(len);
            buildPizza(3);
        }
    }
}

function randomNum(len) {
    randNum = Math.floor(Math.random() * len);
}

var customPizza = [];

function buildPizza(num) {
    
    if (num == 0) {
        customPizza.push(crust[randNum]);
        // console.log("push Crust: " + crust[randNum]);
        } else if (num == 1) {
            customPizza.push(sauce[randNum]);
            // console.log(console.log("push Sauce: " + sauce[randNum]));
        }
        else if (num == 2) {
            customPizza.push(cheeses[randNum]);
            // console.log(console.log("push Cheeses: " + cheeses[randNum]));
        }
        else {
            customPizza.push(toppings[randNum]);
            // console.log(console.log("push Toppings: " + toppings[randNum]));
    }
}



var p1 = pizzaOven("Pan", "Tomato", "Shreeded", ["Canadian Bacon", "Sausage", "Extra Cheese"]);
var p2 = pizzaOven("Deep Dish", "Traditional", ["Mozzarella"], ["Pepperoni", "Sausage"]);
var p3 = pizzaOven("Hand Tossed", "Marinara", ["Mozzarella", "Feta"], ["Mushrooms", "Olives", "Onions"]);
var p4 = pizzaOven("Pan", "Traditional", "American", "Pepperoni");
var p5 = pizzaOven("Deep", "Marinara", "Shreeded", ["Bacon", "Sausage"]);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);

randomPizza();

var c1 = pizzaOven(customPizza[0], customPizza[1], customPizza[2], customPizza[3]);
console.log(c1);