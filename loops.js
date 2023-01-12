export function filterLongNames(names) {
    const longNames = [];

    for (const name of names) {
        if (name.length > 8) {
            longNames.push(name);
        }
    }

    return longNames;
}

export function inventarItemNames(items) {
    const names = [];

    for (const item of items) {
        names.push(item.name);
    }

    return names;
}

export function orderItemNames(inventar, orderItemIds) {
    const orderedItems = [];

    for (const itemId of orderItemIds) {
        if (inventar[itemId].amount > 0) {
            orderedItems.push(inventar[itemId].name);
        }
    }

    return orderedItems;
}