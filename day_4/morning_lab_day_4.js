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

 // pandigital numbers
 const pandDigital = (number) => {
   let num = "1, 2, 3, 4, 5, 6, 7, 8, 9"; {

   if (number === number) return "not pandigital";
   if (number !== number) return "pandigital";
  }
}
 console.log(pandDigital(333));
 console.log(pandDigital(15234));
