const todos = [
  "feed the dog",
  "bath the cat",
  "go to school",
  "do hw",
  "water the plants",
];

const searchTutorial = todos.find(function (todo) {
  //we are looking for an element that includes the string "plants"
  return todo.includes("plants");
});

console.log(searchTutorial);
