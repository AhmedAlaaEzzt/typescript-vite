interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

const users: User[] = [
  { id: 1, name: "Alice", age: 30, isActive: true, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 22, isActive: false },
  { id: 3, name: "Carol", age: 33, isActive: true, email: "carol@example.com" },
];

// Function to filter users with an email
const usersWithEmail = users.filter((user) => user.email !== undefined);

// Function to extract email addresses
const userEmails = usersWithEmail.map((user) => user.email);

console.log("Users with Email:", usersWithEmail);
console.log("User Emails:", userEmails);
