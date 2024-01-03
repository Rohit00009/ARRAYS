const items = ["apple", "watermelon", "pineapple", "orange"];
const ratings = [56, 34, 87, 90, 0.44, 3.4];

//creating copies
//syntax [... varriable name which we want to copy]
const descRating = [...ratings];
console.log(descRating);
descRating.sort((a, b) => b - a);
console.log(descRating);

const ascRating = [...ratings];
console.log(ascRating);
ascRating.sort((a, b) => a - b);
console.log(ascRating);

//for stings
const name = "rohitchavan";
const letters = name.split("");
console.log(letters);
//also can as follows
const letter = [...name];
console.log(letter);

//lets see how to combine --> concat()
const names = ["om", "sai", "ram"];
const age = [20, 232, 22, 45];
const allInfo = names.concat(age);
console.log(allInfo);
//also by as follows
const mainInfo = [...names, ...age];
console.log(mainInfo);
