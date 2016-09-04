/*
Where do I belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.prototype.sort()
*/


function getIndexToIns(arr, num) {
  // Find and return num's (theoretical) place in this array, after sorting.
  // using Array.prototype.sort() as described https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort under the number sorting section
  var sortedArr = arr;
  var index;
  sortedArr.sort((elem1, elem2) => elem1 - elem2);

  console.log(sortedArr, num);

  for (var i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] < num && i == sortedArr.length - 1) {
      index = i + 1;
      break;
    } else if (sortedArr[i] < num && sortedArr[i + 1] > num) {
      index = i + 1;
      break;
    } else if (sortedArr[i] > num) {
      index = i + 1;
      break;
    } else if (sortedArr[i] == num){
      console.log("sortedArr[i] === num");
      index = i;
      break;
    }
  }
  console.log(index);
  return index;
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([2, 5, 10], 15);
