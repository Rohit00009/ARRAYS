const movies = [
  { title: "Bahubali", rating: 8 },
  { title: "ironman", rating: 9.2 },
  { title: "12th fail", rating: 10 },
  { title: "animal", rating: 9.4 },
  { title: "spiderman", rating: 9 },
];

//how we used to do it
const hit = movies.map(function (film) {
  return film.rating > 9 ? film : "flop";
});
console.log(hit);

//arrow functions
//syntax .map((inner function name) => { condition});
// const arrowMovies = movies.map((picture) => {
//   return picture.rating > 9 ? movies : "boring";
// });
// console.log(arrowMovies);

//so we can write it in more simple way
const arrowMovies = movies.map((picture) =>
  picture.rating > 9 ? movies : "boring"
);
console.log(arrowMovies);

const todos = [
  "feed the dog",
  "bath the cat",
  "go to school",
  "do hw",
  "water the plants",
];
const modify = todos.map((todo) => todo.toUpperCase());
console.log(modify);

//ex
button.addEventListener("click", (event) => {});
