/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Interestingly enough, the 'hint' given was to the MDN documentation of both substr() and substring(). In this case, substr() is the correct choice.

*/


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  var targetLength = target.length; // Length param for substr later.
  var booleanValue = new Boolean(); // Value returned by confirmEnding().
  var lastString = str.slice(-(targetLength + 1));

  booleanValue = lastString.includes(target);

  return booleanValue;
}

console.log(confirmEnding("Bastian", "n"));
