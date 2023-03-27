import * as loops from "./loops.js";

function allElementsEqual(arrayA, arrayB) {
    if (arrayA?.length === undefined || arrayA?.length === null
        || arrayB?.length === undefined || arrayB?.length === null) {
        return false;
    }

    if (arrayA === arrayB || (arrayA.length === 0 && arrayB.length === 0)) {
        return true;
    }

    return arrayA.every((element, index) => index < arrayB.length && element === arrayB[index])
}

function test(parameters, functionA, functionB, isEqual, errorMessage) {
    const resultA = functionA(...parameters);
    const resultB = functionB(...parameters);

    if (!isEqual(resultA, resultB)) {
        console.log(errorMessage)
    }
}

import("./noloops.js")
    .catch(error => {
        console.error("Couldn't import noloops.js did you create a noloops.js script?");
        console.error(error);
    })
    .then(noLoops => {
        /* 
        * Check if for every function in loops.js there is a function of the same
        * name in noloops.js
        */
        for (const functionName in loops) {
            // we only want to check for functions
            if (typeof loops[functionName] === "function") {
                if (noLoops[functionName] === undefined) {
                    console.error(`couldn't find a ${functionName} function in the noloops.js module. Did you create a ${functionName} function?`);
                } 
            }
        }

        // Let's check the filterLongNames function
        let testData = [];
        test([testData], noLoops.filterLongNames, loops.filterLongNames, allElementsEqual,
            `The return value of your filterLongNames function doesn't match the return value of the original function for ${JSON.stringify(testData)}.`);

        testData = ["Ana"]
        test([testData], noLoops.filterLongNames, loops.filterLongNames, allElementsEqual,
            `The return value of your filterLongNames function doesn't match the return value of the original function for ${JSON.stringify(testData)}.`);

        testData = ["Alexander"] 
        test([testData], noLoops.filterLongNames, loops.filterLongNames, allElementsEqual,
            `The return value of your filterLongNames function doesn't match the return value of the original function for ${JSON.stringify(testData)}.`);

        testData = ["Alexander", "Ana", "A", "B", "Florentin"]
        test([testData], noLoops.filterLongNames, loops.filterLongNames, allElementsEqual,
            `The return value of your filterLongNames function doesn't match the return value of the original function for ${JSON.stringify(testData)}.`);

        // Let's test the inventoryItemNames function
        testData = []
        test([testData], noLoops.inventoryItemNames, loops.inventoryItemNames, allElementsEqual,
            `The return value of your inventoryItemNames function doesn't match the return value of the original function for ${JSON.stringify(testData)}.`);

        const shopInventory = [
            { "name": "Watch", amount: 10 },
            { "name": "Keyboard", amount: 4 },
            { "name": "Golden shoes", amount: 0 },
            { "name": "Piano", amount: 8000 },
            { "name": "Bread", amount: 0 },
        ];
        test([shopInventory], noLoops.inventoryItemNames, loops.inventoryItemNames, allElementsEqual,
            `The return value of your inventoryItemNames function doesn't match the return value of the original function for ${JSON.stringify(shopInventory)}.`);

        // Let's test the orderItemNames function
        let orderItems = [];
        test([shopInventory, orderItems], noLoops.orderItemNames, loops.orderItemNames, allElementsEqual,
            `The return value of your inventoryItemNames function doesn't match the return value of the original function for ${JSON.stringify(orderItems)}.`);

        orderItems = [2]
        test([shopInventory, orderItems], noLoops.orderItemNames, loops.orderItemNames, allElementsEqual,
            `The return value of your inventoryItemNames function doesn't match the return value of the original function for ${JSON.stringify(orderItems)}.`);

        orderItems = [4, 3, 1, 2]
        test([shopInventory, orderItems], noLoops.orderItemNames, loops.orderItemNames, allElementsEqual,
            `The return value of your inventoryItemNames function doesn't match the return value of the original function for ${JSON.stringify(orderItems)}.`);

    });