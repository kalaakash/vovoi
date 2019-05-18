console.clear();
const user = {
  name: "Aakash",
  age : 18,
  items : ["iPhone XR","XPS-15","AirPods"],
  sayName: function(){
    console.log(this);
  }
};

console.log(user.items);
user.sayName();

function sayMyName(){
  console.log(`My name is ${this}`);
}
sayMyName();

/*
console.log(user.age);
console.log(user.name);
*/

//THIS
//this referes to window
/*
function appleCheck(){
  console.log("apples");
}
*/




/*
window.appleCheck();

console.log(this);
*/
