function greet(name: string, greeting: string) {
  return `${greeting}, ${name}!`;
}

console.log(greet("Ali", "Hello")); // Output: "Hello, Ali!"
console.log(greet()); // Output: "Welcome, Guest!"
console.log(greet("Ali")); // Output: "Welcome, Ali!"
console.log(greet(undefined, "Hi")); // Output: "Hi, Guest!"
