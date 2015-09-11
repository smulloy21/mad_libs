var replaceWord = function(string, wordToFind, wordToReplace) {
  var arr = string.split(' ');
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === wordToFind) {
      arr[i] = wordToReplace;
    }
  }
  return arr.join(' ');
};
