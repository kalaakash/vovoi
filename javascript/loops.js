console.clear();
const names = ["Potter","Harry","Tom","Aakash"];

for(name of names){
  if (name === "Tom"){
    console.log("Sup knobhead " + name);
    break;
  }
  else {
    console.log("Hello there " + name);
  }
}

let letLoading = 0;

while (letLoading <= 100) {
  console.log(letLoading);
  letLoading+=10;
}
