// print greeting
const printGreeting = (greet) => {
  console.log("Yo wasssssup" + " " + greet);
}

printGreeting("homie");
printGreeting("essay");

// reverse word order
const reverseWordOrder = (word) => {
  var splitString = word.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverseWordOrder("hey my name is"));

// calculate
const calculate = (num1, num2, operation) => {
  if (operation === "sum") return num1 + num2;
  if (operation === "sub") return num1 - num2;
  if (operation === "mult") return num1 * num2;
  if (operation === "div") return num1 / num2;
  if (operation === "exp") return num1 ** num2;
}

console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));
