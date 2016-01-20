var translator = function(string){

var strArr = [];
var strArr = string.split("");
var regExVowel = /[aeiou]/i;
var regExCons = /[^aeiou]/gi;
var cons = string.match(regExCons);
var isVowels = string.match(regExVowel);
var concatStr;

for(var i = 0; i < strArr.length; i++) {
   if(isVowels[i] === strArr[0]) {
     return string + 'ay';
   }
  //  } else if (cons[i] === strArr[i]){
  //    var tempArr = cons.join(strArr[i]);
  //    var newArr = cons.splice(strArr[i]);
  //    return newArr;

    var newStr = string.split(isVowels[i]);

    //  var popStr = newStr.pop([i]);

    var lastStr = newStr.pop();


    concatStr = lastStr.concat(newStr);
    return isVowels[i] + concatStr + 'ay';
    // var newCons = string.substr([i], string.indexOf(isVowels[i]));
    // return newCons;
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
