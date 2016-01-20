var translator = function(string){

var strArr = [];
var strArr = string.split("");
var regExVowel = /[aeiou]/i;
var regExCons = /[^aeiou]/gi;
var quStart =   /[aeio]/gi;
var cons = string.match(regExCons);
var isVowels = string.match(regExVowel);
var concatStr;



for(var i = 0; i < strArr.length; i++) {
   if(isVowels[i] === strArr[0]) {
     return string + 'ay';
   }

   if(strArr[0] === "q" && strArr[1] === "u") {
     var isVowels = string.match(quStart);
     var newStr = string.split(isVowels[i]);
     var lastStr = newStr.pop();
     concatStr = lastStr.concat(newStr);
     return isVowels[i] + concatStr + 'ay';
   }

    var newStr = string.split(isVowels[i]);
    var lastStr = newStr.pop();
    concatStr = lastStr.concat(newStr);
    return isVowels[i] + concatStr + 'ay';
  }
}



$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    var string = $("input#pig-translator").val();
    var result = translator(string);

    event.preventDefault();

    console.log(result);
  });
});
