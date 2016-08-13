
/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Global String Object
*/


function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <= 0) {
    return "";
  }

  try {
    return str.repeat(num);
  } catch (e) {
    console.log('num must be non-negative, less than infinity, and not overflow the maximum string size.');
  } finally {

  }
}

console.log(repeatStringNumTimes("abc", 3));
