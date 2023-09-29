// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var numOfChars = window.prompt("How many characters would you like your password to be?");
  if (!numOfChars) {
    return;
  }
  numOfChars=parseFloat(numOfChars);
  console.log(numOfChars);

  var charArrayChoice = window.alert("Do you want to include special characters in your password?");
  if (charArrayChoice===true) {
    var chars = Math.floor(Math.random() * charArray.length);
    var randomChars = charArray[chars];
  } else { 

  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword(){
  // All your code here
// var numChar = window.prompt
// console.log(numChar);
// var inclNums = window.confirm true/false

// array for each character type
var numArray = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log (numArray);

var alphaArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphaArray);

upperAlphaArray = alphaArray.map(function(x){
  return x.toUpperCase();
});
console.log(upperAlphaArray);

charArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
console.log(charArray);

// if statement
// var options =[];
  // if true push/concat that array into a new array var

// for loop through options array based on required characters
  // Random index value for every loop
  // Google this; How to randomly choose a value from an array
  // var chosenArr = [];
  // turn array into string

  //return password;
//}