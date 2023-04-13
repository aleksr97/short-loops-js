export function filterLongNames(names) {
  //   const longNames = [];

  //   for (const name of names) {
  //     if (name.length > 8) {
  //       longNames.push(name);
  //     }
  //   }

  //   return longNames;
  return names.filter((name) => name.length > 8);
}

export function inventoryItemNames(items) {
  //   const names = [];

  //   for (const item of items) {
  //     names.push(item.name);
  //   }

  //
  //   return names;
  return items.map((item) => item.name);
}

export function orderItemNames(inventory, orderItemIds) {
  //   const orderedItems = [];
  //   for (const itemId of orderItemIds) {
  //     if (inventory[itemId].amount > 0) {
  //       orderedItems.push(inventory[itemId].name);
  //     }
  //   }et
  return orderItemIds
    .map((itemID) =>
      inventory[itemID].amount > 0 ? inventory[itemID].name : null
    )
    .filter((item) => item);
}

// const persons = [
//     { name: "Zeus", profession: "God" },
//     { name: "Herakles", profession: "Hero" },
//     { name: "Artemesia", profession: "Arist" },
//     { name: "Herkules", profession: "Hero" },
//     { name: "Florentin", profession: "Artist" },
//     { name: "Venus", profession: "Warrior" },
//     { name: "Hades", profession: "Guard" },
//     { name: "Bacchus", profession: "Wine" },
//     { name: "Athena", profession: "Warrior" },
//     { name: "Hera", profession: "God" },
//     { name: "Artemis", profession: "Hunter" },
//   ];

//   const pairs = [
//     ["Zeus", "Florentin"],
//     ["Venus", "Athena"],
//     ["Artemis", "Florentin"],
//   ];

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
