// Challenge-1
let numbers = [2, 4, 6, 7, 5, 1, 10, 20, 22, 26, 21];

function evenAverage(numbers) {
  let evens = numbers.filter((even) => even % 2 === 0);
  let sum = evens.reduce((acc, curr) => acc + curr);
  let avg = sum / evenAverage.length;
  return avg;
}
// console.log(evenAverage(numbers));
//Challenge 2
const words = ["JavaScript", "Python", "Java", "C++", "Ruby"];

const longestFinder = (words) => {
  const longestWord = words.reduce((longest, curr) => {
    if (curr.length > longest.length) {
      return curr;
    } else {
      return longest;
    }
  });
  return longestWord;
};
// console.log(longestFinder(words));

// Challenge 3
let books = [
  {
    title: "title-1",
    author: "author-1",
    pages: 200,
  },
  {
    title: "title-2",
    author: "author-2",
    pages: 300,
  },
  {
    title: "title-3",
    author: "author-3",
    pages: 400,
  },
];

let averagePages = function (books) {
  let pages = books.map((book) => book.pages);
  let pagesSum = pages.reduce((acc, curr) => acc + curr);
  let pagesAvg = pagesSum / books.length;
  return pagesAvg;
};

// console.log(averagePages(books));

//Challenge-4
let arr = ["hello", "world", "hello"];

function freq(arr) {
  return arr.reduce((result, curr) => {
    if (result.hasOwnProperty(curr)) {
      result[curr]++;
    } else {
      result[curr] = 1;
    }
    return result;
  }, {});
}
let result = freq(arr);
console.log(result);

// Challenge 5
function sortByCity(people) {
  const city = people.reduce((acc, person) => {
    const { city } = person;
    if (acc[city]) {
      acc[city]++;
    } else {
      acc[city] = 1;
    }
    return acc;
  }, {});

  return city;
}

const people = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];

const conc = sortByCity(people);
console.log(conc);
