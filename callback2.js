const todos = [
  "feed the dog",
  "bath the cat",
  "go to school",
  "do hw",
  "water the plants",
];

//belown is callabck function forEach means callback can be executes on above strings
todos.forEach(function (video) {
  //foreach is high order function whiich can take another function as parameter
  //video argument run this function loop over it for each individula string
  console.log(video);
  console.log("run");
});

//another callback function
button.addEventlistener("click", function () {});

//forEach is similar to belown method
//ex
// function repeater(fn) {
//   //in thi repeater is higher order function
//   fn();
//   fn();
//   fn();
// }

// repeater(function () {
//   //this anonymous function also repeats 3 times
//   console.log("Namaste");
// });

// //or we also write it as

// function sayHello() {
//   console.log("hello!");
// }

// repeater(sayHello); //sayHello function repeats 3 times thats it ! means repeater is higher order function here
