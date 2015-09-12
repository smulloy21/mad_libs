var escapeRegExp = function (string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

var replaceWord = function(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};

var madlibs = {
  madlib1: "Hello Noun1!",
  madlib2: "I Verb1 Noun(sing)1. Noun(sing)1 is the best. Noun(sing)1 likes Adjective1 Noun(plural)1.",
  madlib3: "Name1 is a Noun(sing)1. Name1 likes to Verb1 Noun(plural)2.",
  madlib4: "Twas Adjective1, and the Adjective2 Noun(plural)1 Did Verb1 and Verb2 in the Noun1, All Adjective3 were the Noun(plural)2, And the Adjective4 Noun(plural)3 Adjective5."
};

var findKeywords = function(string) {
  var output = [];
  var arr = string.replace(/[.,!?:;'"-]+/g, '').split(' ');
  var partsOfSpeech = ["Noun", "Noun(sing)", "Noun(plural)", "Verb", "Verb(3rdSing)", "Verb(progressive)", "Verb(past)", "Adjective", "Name", "Adverb"];
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
    $('form#keywords-form').empty();
    $('#keywords').hide();
    $('#result').hide();
    var madlib = madlibs[$('select#choose').val()];
    var arr = findKeywords(madlib);
    for(var i = 0; i < arr.length; i++) {
      $('form#keywords-form').append('<input id="' + i + '" placeholder="' + arr[i].substring(0, arr[i].length - 1) +'" required>');
    }
    $('form#keywords-form').append('<br><br><button type="submit" class="btn btn-mad btn-primary">Go Mad!</button>');
    $('#keywords').show();
    event.preventDefault();
  });
  $('form#keywords-form').submit(function(event){
    $('#keywords').hide();
    var madlib = madlibs[$('select#choose').val()];
    var arr = findKeywords(madlib);
    var input = '';
    for(var i = 0; i < arr.length; i++) {
      input = $("form input:nth-child(" + (i + 1) + ")").val();
      madlib = replaceWord(madlib, arr[i], input);
    }
    $('.madlib').text(madlib);
    $('#result').show();
    event.preventDefault();
  });
});
