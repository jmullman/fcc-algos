/*
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    String.prototype.charCodeAt()

    String.fromCharCode()
    */


function rot13(str) { // LBH QVQ VG!

  function shift13(charVal) {
    // we're only concerned with uppercase letters
    var shiftVal = 13; // Can reuse
    if (charVal >= 78) {
      return String.fromCharCode(charVal - shiftVal); // since ROT13 is reciprocal, change direction
    } else if (charVal <= 64) {
      return String.fromCharCode(charVal);
    }
    return String.fromCharCode(charVal + shiftVal);
  }

  var shiftedStr = "";
  for (var i = 0; i < str.length; i++) {
    shiftedStr += shift13(str.charCodeAt(i));
    console.log(shiftedStr);
  }

  return shiftedStr;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
