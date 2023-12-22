interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  email?: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    isActive: true,
    email: "alice@example.com",
    displayInfo: function () {
      console.log(
        `User: ${this.name}, Age: ${this.age}, Email: ${
          this.email || "No email"
        }`
      );
    },
  },
  {
    id: 2,
    name: "Bob",
    age: 22,
    isActive: false,
    displayInfo: function () {
      console.log(
        `User: ${this.name}, Age: ${this.age}, Email: ${
          this.email || "No email"
        }`
      );
    },
  },
  {
    id: 3,
    name: "Carol",
    age: 33,
    isActive: true,
    email: "carol@example.com",
    displayInfo: function () {
      console.log(
        `User: ${this.name}, Age: ${this.age}, Email: ${
          this.email || "No email"
        }`
      );
    },
  },
];

users.forEach((user) => user.displayInfo());
