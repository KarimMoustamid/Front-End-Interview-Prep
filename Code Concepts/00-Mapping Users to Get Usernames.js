// Practice task:
// 1. Get an array of usernames from an array of user objects.
// 2. Get back only active users
// 3. Sort users by age : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const users = [
  {
    id: 1,
    name: "Jack",
    age: 24,
    isActive: true,
  },
  {
    id: 2,
    name: "Jill",
    age: 31,
    isActive: false,
  },
  {
    id: 3,
    name: "Alex",
    age: 27,
    isActive: true,
  },
  {
    id: 4,
    name: "Maya",
    age: 22,
    isActive: false,
  },
  {
    id: 5,
    name: "Sam",
    age: 35,
    isActive: true,
  },
  {
    id: 6,
    name: "Nina",
    age: 29,
    isActive: true,
  },
  {
    id: 7,
    name: "Omar",
    age: 26,
    isActive: false,
  },
];

console.log("users : ", users);
console.log("");

/*

users.sort((user1, user2) => (user1.age < user2.age ? -1 : 1));
console.log("users : ", users);
*/
// Solution 1: using a for loop

/*
const sortedUsers = [...users].sort((a, b) => a.age - b.age); // ascending
const names = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    names.push(users[i].name);
  }
}

console.log("names : ", names);
 */

// Solution 2: using forEach

/*
const sortedUsers = [...users].sort((a, b) => a.age - b.age); // ascending
const names = [];
users.forEach((user) => {
  if (user.isActive) {
    names.push(user.name);
  }
});

console.log("names : ", names);
 */

// Solution 3: using map (short and clean)

const names = users
  .sort((user1, user2) => user1.age - user2.age)
  .filter((user) => user.isActive)
  .map((user) => user.name);

console.log("names : ", names);
/*
 */
