const users = [
  { id: 1, Name: "Alice", age: 30, isActive: true },
  { id: 2, name: "Bob", age: 22, isActive: false },
  { id: 3, name: "Carol", age: 33, isActive: "yes" },
];

// Function to filter active users
const activeUsers = users.filter((user) => user.isActive);

// Function to get user names
const userNames = users.map((user) => user.name);

console.log("Active Users:", activeUsers);
console.log("User Names:", userNames);
