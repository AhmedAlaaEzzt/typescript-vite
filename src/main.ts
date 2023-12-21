// Processor 1: Convert to uppercase
const toUpperCaseProcessor = (input: string) => input.toUpperCase();

// Processor 2: Reverse the string
const reverseStringProcessor = (input: string) =>
  input.split("").reverse().join("");

const stringInput = "Hello, World!";

console.log(toUpperCaseProcessor(stringInput)); // Output: "HELLO, WORLD!"
console.log(reverseStringProcessor(stringInput)); // Output: "!dlroW ,olleH"
