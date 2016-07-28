
function findLongestWord(str) {

  var newStr = str.split(' ');
  //console.log(newStr); //debug
  var outArr = [];
  for (var i = newStr.length - 1; i >= 0; i--) {
    outArr.push([newStr[i], newStr[i].length]);
    //console.log(outArr); //debug
    //console.log(newStr[i] + " " + newStr[i].length); //debug
  }
  return outArr.sort(function(a, b) {
    return a[1] - b[1];
  }).pop().pop();
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
