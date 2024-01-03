const todos = [
  "feed the dog",
  "bath the cat",
  "go to school",
  "do hw",
  "water the plants",
];

//MAP
const newTodos = todos.map(function (todo) {
  //todo is name of inner function
  //using the map function to transform each element in the todos array by converting them to uppercase using the toUpperCase() method.
  //we cant do just console.log(todos) cuz map method always do something for us so we can
  //return inner function
  //return todo;  --> this brings same elements in newTodos
  return todo.toUpperCase();
});

newTodos.push("go gym");
console.log(todos);
//now we havnt get that reference to original problem cuz of map function.

console.log(newTodos);
