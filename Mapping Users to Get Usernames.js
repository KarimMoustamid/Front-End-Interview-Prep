// Practice task:
// Get an array of usernames from an array of user objects.
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "Jill",
    isActive: false,
  },
  {
    id: 3,
    name: "Alex",
    isActive: true,
  },
  {
    id: 4,
    name: "Maya",
    isActive: false,
  },
  {
    id: 5,
    name: "Sam",
    isActive: true,
  },
  {
    id: 6,
    name: "Nina",
    isActive: true,
  },
  {
    id: 7,
    name: "Omar",
    isActive: false,
  },
];

// Solution 1: using a for loop

/*
const names = [];
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}
*/

// Solution 2: using forEach

/*
const names = [];
users.forEach((user) => {
  names.push(user.name);
});

*/

// Solution 3: using map (short and clean)

const names = users.map((user) => user.name);

console.log("names : ", names);
