const printGreeting = (greet) => {
  console.log("Yo wasssssup" + " " + greet);
}

printGreeting("homie");
printGreeting("essay");


const reverseWordOrder = (word) => {
  var splitString = word.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverseWordOrder("hey my name is"));
