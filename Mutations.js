/**
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    String.prototype.indexOf()

 */

 function mutation(arr) {
  var strPre = arr[0].toLowerCase();
  var strAnt = arr[1].toLowerCase();
  var arrIndex = [];

  for (var i = 0; i < strAnt.length; i++) {
    arrIndex.push(strPre.indexOf(strAnt.charAt(i)));
    if (arrIndex.includes(-1)) {
      return false;
    }
  }
  return true;
   //return arr;
 }

console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Aarmy"]));
