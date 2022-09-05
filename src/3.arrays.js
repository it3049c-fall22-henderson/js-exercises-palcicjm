/**
 * IndexOf: you should be able to determine the location of an item in an array
 * Example: 
 * arr = [1,2,3,5,6]
 * calling the function like 
 * indexoff(arr, 3); should return the index 2
 */
arr = [2,4,5,6]
item = 2;
function indexOf(arr, item) {
  arr = [2,4,5,6]
  index = indexOf(arr, 2);
  return index;
}

// Sum: you should be able to sum the items of an array
// Example: arr = [1,2,3]   =>  6
function sum(arr) {
const arr = [2,4,5,6];

const sum = arr.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

  return sum;
}

// Filter: Should filter out all instances of a value from an array
// Example: filtering 2 out of [1,2,3,5,6,2,4,2] should return [1,3,5,6,4]
function filterOut(arr, item) {
  arr = [2,4,5,6];

const result = arr.filter(2);
  return result;
}

// Append: you should be able to add an item to the end of an array
function append(arr, item) {
  arr = [2,4,5,6];
  appended = arr.push(10);
  return appended;
}

// Truncate: you should be able to remove the last item of an array
// hint: pop, slice, splice would all work. Pay attention to the return value in the docs
function truncate(arr) {
  arr = [2,4,5,6];
  arrDone = arr1.splice(3);
  return arrDone;
}

arr1 = [4,5,1,6]
arr2 = [3,5,7,8]

// Concat: you should be able to join together two arrays
function concat(arr1, arr2) {
  arr1 = [4,5,1,6]
  arr2 = [3,5,7,8]
  arr3 = concat(arr1, arr2);
  return arr3;
}


// Insert: you should be able to add an item at the specified index of an array
// hint: use splice and pay attention to the return value
function insert(arr, item, index) {
  arr1 = [4,5,1,6]
  arr2 = arr1.splice(4,0,3)
  return arr2;
}

// Square: you should be able to square each number in an array
// hint: use .map
// Example: [1,2,4,5] => [1,4,16,25]
function square(arr) {
  arr2 = [3,5,7,8]
  const map1 = arr2.map(x => x * x);
  return map1;
}

module.exports = {
  indexOf,
  sum,
  filterOut,
  append,
  truncate,
  concat,
  insert,
  square
};