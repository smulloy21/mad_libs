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

var findNouns = function(string) {
  var output = [];
  var arr = string.replace(/[.,!?:;'"-]+/g, '').split(' ');
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] == "Noun1") {
      output.push("Noun1");
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
