
function titleCase(str) {

  str = str.split(' ');
  var strArr = [];

  function firstToUpper(matchArg){
    return matchArg.toUpperCase();
  }

  for (var i = str.length - 1; i >= 0; i--) {
    strArr.unshift(str[i].toLowerCase().replace(/^[a-z]/g, firstToUpper));
    
  }

 console.log(strArr.join(' '));
  //return str; //original from challenge
}

titleCase("I'm a little tea pot");
