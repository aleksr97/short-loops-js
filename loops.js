export function filterLongNames(names) {
    const longNames = [];

    for (const name of names) {
        if (name.length > 8) {
            longNames.push(name);
        }
    }

    return longNames;
}

export function inventoryItemNames(items) {
    const names = [];

    for (const item of items) {
        names.push(item.name);
    }

    return names;
}

export function orderItemNames(inventory, orderItemIds) {
    const orderedItems = [];

    for (const itemId of orderItemIds) {
        if (inventory[itemId].amount > 0) {
            orderedItems.push(inventory[itemId].name);
        }
    }

    return orderedItems;
}

export function couples(persons, pairNames) {
    const pairs = [];

    for (const [personAName, personBName] of pairNames) {
        let personA = null;
        let personB = null;
        
        for (const person of persons) {
            if (person.name === personAName) {
                personA = person;
            }

            if (person.name === personBName) {
                personB = person;
            }
        }

        pairs.push([personA, personB]);
    }

    return pairs;
}

export function calculateFollowers(deities) {
    const followersByDeity = {};
    
    for (const deity of deities) {
        let numberOfFollowers = 0;

        for (const temple of deity.temples) {
            numberOfFollowers = numberOfFollowers + temple.followers;
        }

        followersByDeity[deity.name] = numberOfFollowers;
    }

    return followersByDeity;
}
