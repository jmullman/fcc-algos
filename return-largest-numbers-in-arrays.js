/*
  Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

  Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function sortArray(stepArg) {
  // body...
  return stepArg.sort(function(a, b) {
    return a - b;
  });
}

function largestOfFour(arr) {
  // You can do this!
  

  var containerArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    containerArray.unshift((arr[i]));
  }

  var largestArray = [];
  for (var i = containerArray.length - 1; i >= 0; i--) {
    largestArray.unshift(sortArray(containerArray[i]).pop());

  }
  //return arr;
  return largestArray;
  //console.log('largestOfFour return value: ' + largestArray);
}

console.log(
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], 
  [1000, 1001, 857, 1]])
);

console.log(
  largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
);

console.log(
  largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
);
