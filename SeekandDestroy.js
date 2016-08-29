/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Arguments object

    Array.prototype.filter()
    */
"use strict";
function destroyer(arr) {
  // Remove all the values
  var arrArgZero = arguments[0];
  var arrAll = [...arguments];
  var arrArgs = arrAll.slice(1);
  console.log(arrArgZero + "    " + arrAll + "    " + Array.isArray(arrArgs) +" line 18\n");

  console.log(arrArgs + " line 20\n");

  var loopRetVal = [];
  for (var i = 0; i < arrArgs.length; i++) {
    loopRetVal.push(arrArgZero.filter(function (element) {
      var filterArgs = element;
      console.log(filterArgs);
      if (filterArgs !== arrArgs[i]) { // need non-matches
        console.log("Line 28, true for " + arrArgs[i] + "\n");
        return 1; // coerces true
      } else {
        console.log("Line 31, false " + arrArgs[i] + "\n");
        return NaN; // coerces false
      }
    }));
    console.log(loopRetVal + " = loopRetVal at line 35\n");
  }
  return loopRetVal;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
