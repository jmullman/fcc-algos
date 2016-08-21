/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Boolean Objects

    Array.prototype.filter()
*/

function bouncer(arr){

  return arr.filter(function(value){return value;});

}

console.log(bouncer([7, "ate", "", false, 9]));
