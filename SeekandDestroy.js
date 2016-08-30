/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Arguments object

    Array.prototype.filter()
    */
"use strict";
function destroyer(arr) {
  // get all the values
  var arrArgZero = arguments[0];
  var arrAll = [...arguments];
  var arrArgsSet = new Set(arrAll.slice(1));

  let retVal = [...new Set([...arrArgZero].filter(e => !arrArgsSet.has(e)))];
  return retVal;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
