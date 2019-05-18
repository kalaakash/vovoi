console.clear();
const nums = [1,2,3,4,21,5];
console.log(nums);

const names = ["Tom","Aakash","Ollie","Ewan"];
console.log(names);

console.log(names[0] + nums[0]);
console.log(names.length);

const showLength = (array) =>{
  console.log(array.length);
}

showLength(names);
showLength(nums);

nums.pop();
showLength(nums);
console.log(nums);

name = names[2];
names.push("Shaw");

console.log(names);
showLength(names);

names.pop();
names.pop();
showLength(names);
console.log(names);

names.shift()

//shift removes the first element

//unshift will replace the first element in the array with
//whatever argument you pass to it

names.unshift("Sian");
console.log(names);

names.shift();
console.log(names);

console.log(names.indexOf("Tom"));
console.log(names.indexOf("Ollie"));
