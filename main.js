import { filterLongNames, inventarItemNames, orderItemNames } from './loops.js';

const myThings = ["Harry Potter book", "The holy grail of Codecool", "How to pass a PA", "My favorite Mentors", "Laptop"];
console.log(filterLongNames(myThings));

const shopInventar = [
    { "name": "Watch", amount: 10 },
    { "name": "Keyboard", amount: 4 },
    { "name": "Golden shoes", amount: 0 },
    { "name": "Piano", amount: 8000 },
    { "name": "Bread", amount: 0}
];

console.log(inventarItemNames(shopInventar));

const order = [4, 1, 2, 3];
console.log(orderItemNames(shopInventar, order))

