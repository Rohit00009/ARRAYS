const movies = [
  { title: "Bahubali", rating: 8 },
  { title: "ironman", rating: 9.2 },
  { title: "12th fail", rating: 10 },
  { title: "animal", rating: 9.4 },
  { title: "spiderman", rating: 9 },
];

const hit = movies.map(function (movie) {
  if (movie.rating > 8) {
    return movie;
  } else {
    return "nope";
  }
});
console.log(hit);

const superHit = movies.map(function (film) {
  //syntax
  //return condition ? if value : else value
  return film.rating > 9 ? film : "nope";
});
