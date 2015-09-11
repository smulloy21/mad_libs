var escapeRegExp = function (string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

var replaceWord = function(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};

var madlibs = {
  madlib1: "Hello Noun1!",
  madlib2: "I like Noun1."
};

var findKeywords = function(string) {
  var output = [];
  var arr = string.replace(/[.,!?:;'"-]+/g, '').split(' ');
  var partsOfSpeech = ["Noun", "Verb", "Adjective"];
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < partsOfSpeech.length; j++) {
      for(var k = 0; k < arr.length; k++) {
        if (arr[i] == partsOfSpeech[j] + k && output.indexOf(partsOfSpeech[j] + k) === -1) {
          output.push(partsOfSpeech[j] + k);
        }
      }
    }
  }
  return output;
};


$(document).ready(function(){
  $('form#madlibs').submit(function(event){
    var madlib = madlibs[$('select#choose').val()];

    $('.madlib').text(madlib);
    event.preventDefault();
  });
});
