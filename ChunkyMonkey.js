/*

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Here are some helpful links:

    Array.prototype.push()

    Array.prototype.slice()

*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  twoDiArr = [];
  console.log(arr.length / size);
  console.log(arr.length / size | 0);
  console.log(loopLength = ((arr.length / size) | 0) + 1);
  for (var i = 0; i < loopLength; i++) {
  //  twoDiArr.push(arr.splice(0,size));

    if (arr.length <= 0) {
      console.log("This is inside the if statement\n");
      return twoDiArr;
    } else {
      console.log(arr + ' before slice and splice\n');
      twoDiArr.push(arr.slice(0,size));
      arr.splice(0,size);
      }
    }

  return twoDiArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

/*
console.log('chunkArrayInGroups(["a", "b", "c", "d"], 2) ' + chunkArrayInGroups(["a", "b", "c", "d"], 2) + '\n');
console.log("chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) " + chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) + '\n');
console.log("chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) " + chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) + '\n');
console.log("chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) " + chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) + '\n');
console.log("chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) " + chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) + '\n');
*/
