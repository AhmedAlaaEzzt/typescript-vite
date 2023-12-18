const toInteger = (input: number): number => {
  return Math.floor(input);
};

console.log(toInteger(123.456)); // Outputs: 123
console.log(toInteger("123.456")); // Outputs: 123
