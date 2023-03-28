import { filterLongNames, inventoryItemNames, orderItemNames, couples, calculateFollowers } from './loops.js';

const myThings = [
    "Harry Potter book",
    "The holy grail of Codecool",
    "How to pass a PA",
    "My favorite Mentors",
    "Laptop",
];
console.log(filterLongNames(myThings));

const shopInventory = [
    { "name": "Watch", amount: 10 },
    { "name": "Keyboard", amount: 4 },
    { "name": "Golden shoes", amount: 0 },
    { "name": "Piano", amount: 8000 },
    { "name": "Bread", amount: 0 },
];

console.log(inventoryItemNames(shopInventory));

const order = [4, 1, 2, 3];
console.log(orderItemNames(shopInventory, order));

const persons = [
    { name: "Zeus", profession: "God" },
    { name: "Herakles", profession: "Hero" },
    { name: "Artemesia", profession: "Arist" },
    { name: "Herkules", profession: "Hero" },
    { name: "Florentin", profession: "Artist" },
    { name: "Venus", profession: "Warrior" },
    { name: "Hades", profession: "Guard" },
    { name: "Bacchus", profession: "Wine" },
    { name: "Athena", profession: "Warrior" },
    { name: "Hera", profession: "God"},
    { name: "Artemis", profession: "Hunter" }
];

const pairs = [["Zeus", "Florentin"], ["Venus", "Athena"], ["Artemis", "Florentin"]];

console.log(couples(persons, pairs))

const deities = [
    { 
        name: "Thor", 
        temples: [
            { location: "Thorshavn", followers: 122 },
            { location: "Gotenburg", followers: 73 },
            { location: "Reykjavik", followers: 200},
            { location: "Arcona", followers: 400}
        ] 
    },
    {
        name: "Odin",
        temples: [
            { location: "Thorshavn", followers: 2 },
            { location: "Odinklam", followers: 150 },
            { location: "Reykjavik", followers: 2000},
        ]
    },
    {
        name: "Freyja",
        temples: [
            { location: "Arcona", followers: 200 },
            { location: "Freyjaborg", followers: 500 },
            { location: "Reykjavik", followers: 304 },
        ]
    },
    {
        name: "Frigg",
        temples: [
            { location: "Arcona", followers: 100 },
            { location: "Milan", followers: 50 },
            { location: "Rostock", followers: 12 },
        ]
    }
]

const followers = calculateFollowers(deities);
console.log(followers);
