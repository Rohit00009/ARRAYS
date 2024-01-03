const todos = [
  "feed the dog",
  "bath the cat",
  "go to school",
  "do hw",
  "water the plants",
];

const shortSearch = todos.filter(function (todo) {
  //we including only those elements from the todos array whose applicable t condition ehich given by us
  return todo.length < 10;
});

console.log(shortSearch);

const movies = [
  { title: "Bahubali", rating: 8 },
  { title: "ironman", rating: 9.2 },
  { title: "12th fail", rating: 10 },
  { title: "animal", rating: 9.4 },
  { title: "spiderman", rating: 9 },
];

const bestMovies = movies.filter(function (search) {
  return search.rating > 9;
});
console.log(bestMovies);
