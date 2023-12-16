let num1;
let num2;
let result;

console.log("before assignment", { num1: typeof num1, num2: typeof num2 });

num1 = 5;
num2 = 5.6;

console.log("after assign numbers", { num1: typeof num1, num2: typeof num2 });

result = num1 + num2;
console.log(result); // 10.6

num1 = "5";
num2 = "5.6";

console.log("after assign string", { num1: typeof num1, num2: typeof num2 });

result = num1 + num2;
console.log(result); // 55.6
