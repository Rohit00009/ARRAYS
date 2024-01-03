const items = ["apple", "watermelon", "pineapple", "orange"];
const ratings = [56, 34, 87, 90, 0.44, 3.4];

//for strings we can do belown but if we do this same to numbers then numbers can sorted in proper way
items.sort();
console.log(items);

//for numbers
ratings.sort(function (a, b) {
  //if return is negative then a sorted before b
  //if positive then b is sorted before a
  //if they are same is 0 then nothingn changes
  return a - b;
});

console.log(ratings);

ratings.sort((a, b) => a - b);
console.log(ratings);

const filtered = ratings.sort((a, b) => a - b); //this modify original
console.log(filtered);

//lets sort array of objects  --> ascending
const movies = [
  { title: "Bahubali", rating: 8 },
  { title: "ironman", rating: 9.2 },
  { title: "12th fail", rating: 10 },
  { title: "animal", rating: 9.4 },
  { title: "spiderman", rating: 9 },
];

const sorting = movies.sort((a, b) => a.rating - b.rating);
console.log(sorting);
