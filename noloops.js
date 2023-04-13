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
  // const pairs = [];

  // for (const [personAName, personBName] of pairNames) {
  //   let personA = null;
  //   let personB = null;

  //   for (const person of persons) {
  //     if (person.name === personAName) {
  //       personA = person;
  //     }

  //     if (person.name === personBName) {
  //       personB = person;
  //     }
  //   }

  //   pairs.push([personA, personB]);
  // }

  // return pairs;

  return pairNames.map(([personAName, personBName]) => [
    persons.find((person) => person.name === personAName),
    persons.find((person) => person.name === personBName),
  ]);
}

const deities = [
  {
    name: "Thor",
    temples: [
      { location: "Thorshavn", followers: 122 },
      { location: "Gotenburg", followers: 73 },
      { location: "Reykjavik", followers: 200 },
      { location: "Arcona", followers: 400 },
    ],
  },
  {
    name: "Odin",
    temples: [
      { location: "Thorshavn", followers: 2 },
      { location: "Odinklam", followers: 150 },
      { location: "Reykjavik", followers: 2000 },
    ],
  },
  {
    name: "Freyja",
    temples: [
      { location: "Arcona", followers: 200 },
      { location: "Freyjaborg", followers: 500 },
      { location: "Reykjavik", followers: 304 },
    ],
  },
  {
    name: "Frigg",
    temples: [
      { location: "Arcona", followers: 100 },
      { location: "Milan", followers: 50 },
      { location: "Rostock", followers: 12 },
    ],
  },
];
export function calculateFollowers(deities) {
  // const followersByDeity = {};

  // for (const deity of deities) {
  //   let numberOfFollowers = 0;

  //   for (const temple of deity.temples) {
  //     numberOfFollowers = numberOfFollowers + temple.followers;
  //   }

  //   followersByDeity[deity.name] = numberOfFollowers;
  // }

  // return followersByDeity;

  return deities.reduce((acc, deity) => {
    acc[deity.name] = deity.temples.reduce(
      (acc, temple) => acc + temple.followers,
      0
    );
    return acc;
  }, {});
}

export function findTheTempelWithMostFollowers(deities) {
  return deities.reduce((acc, deity) => {
    acc[deity.name] = deity.temples.reduce((acc, temple) => {
      if (!acc) {
        return temple;
      } else {
        return acc.followers < temple.followers ? temple : acc;
      }
    }).location;
    return acc;
  }, {});
}
console.log(findTheTempelWithMostFollowers(deities));
