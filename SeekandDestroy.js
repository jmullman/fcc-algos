/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Arguments object

    Array.prototype.filter()
    */

function destroyer(arr) {
  // Remove all the values
  var arrArgZero = arguments[0];
  var arrAll = Array.prototype.slice.call(arguments);
  var arrArgs = arrAll.slice(1);
  console.log(arrArgs);
  var retVal;
  retVal = arrArgZero.filter(function(arrArgs) {
    console.log(arrArgs);
    for (var i = 0; i < arrArgs.length; i++) {
      console.log(arrArgZero.includes(arrArgs[i]) + "\n" + arrArgs + "\n");
    }
    // console.log(arrArgZero.includes(arrArgs));
    // return !!arrArgZero.includes(arrArgs);
  });
  console.log(retVal);
  return retVal;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
