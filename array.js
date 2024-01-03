let ho = 20;
let yes = ho;
yes = 50;
console.log(ho, yes);

// const ho = 20;
// ho = 50;   --> acnt change value of variable cuz f const
//but we can change it by using aray of an object
const names = ["rohit", "prashant", "chetan", "sai"];
names[0] = "ruchiket";
names.push("rohya");

console.log(names);

//objects and arrays referenc types

const name = ["a", "b", "c", "d", "e"];
const newNames = name; //newNames reference to original
newNames.push("z"); //whenever new variable value changes the references variable value also changes
console.log(newNames);
console.log(name);

//lets do it with object
const id = {
  idName: "om",
  age: 20,
  weight: 75,
};

const newId = id;
newId.age = 22; //whenever new variable value changes the references variable value also changes

console.log(id, newId);
