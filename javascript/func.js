console.clear();
const name = "Aakash";
console.log(name);

function getUpper(localName){
  console.log(localName + " is the local name");
  console.log("Party");
  console.log(name + " is the global scope name");
  console.log(localName.toUpperCase() + " is in upper case");
}

getUpper(name);

function getSum(num1,num2){
  console.log(num1 + num2);
}

getSum(1,2);
/*

const toLower = function(){
  console.log(name.toLowerCase() + " is in toLower function");
}

toLower();

*/
const add = (num1,num2) =>{
  console.log(num1 + num2 + " is in the add function");
  console.log("\' is a single quote");
}

add(1,2);

console.log(`Hello it's me and my name is ${name} and I am ${18} years old`);
