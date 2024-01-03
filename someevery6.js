const movies = [
  { title: "Bahubali", rating: 8 },
  { title: "ironman", rating: 9.2 },
  { title: "12th fail", rating: 10 },
  { title: "animal", rating: 9.4 },
  { title: "spiderman", rating: 9 },
];

const checkRating = movies.every(function (movie) {
  //whether all elements in the array passes provided functions test.
  //then and then only true
  return movie.rating >= 8;
});
console.log(checkRating);

const blockbusters = [
  { title: "Bahubali", imdbrating: 8 },
  { title: "ironman", imdbrating: 9.2 },
  { title: "12th fail", imdbrating: 10 },
  { title: "animal", imdbrating: 9.4 },
  { title: "spiderman", imdbrating: 9 },
];

const checkImdb = blockbusters.some(function (imdb) {
  //atleast  one element in the array passes provided functions test'
  //then and then only true
  return imdb.imdbrating > 9;
});
console.log(checkImdb);
