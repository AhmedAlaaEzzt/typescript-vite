let num1;
let num2;

console.log("before assignment", { num1: typeof num1, num2: typeof num2 });

num1 = 5;
num2 = "5.6";

console.log("after assignment", { num1: typeof num1, num2: typeof num2 });

const result = num1 + num2;

console.log(result.toFixed());
