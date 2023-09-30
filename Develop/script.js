// Assignment Code
var generateBtn = document.querySelector("#generate");

var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//console.log(numArray);

var alphaArray = "abcdefghijklmnopqrstuvwxyz".split("");
//console.log(alphaArray);

var upperAlphaArray = alphaArray.map(function (x) {
  return x.toUpperCase();
});
//console.log(upperAlphaArray);

var charArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
//console.log(charArray);


// Write password to the #password input
function writePassword() {
  var numOfChars = window.prompt("How many characters would you like your password to be?");
  if (!numOfChars) {
    return;
  }
  numOfChars = parseInt(numOfChars);
  //console.log(numOfChars);

  var choices = [];

  var charArrayChoice = window.confirm("Do you want to include special characters in your password?");
  if (charArrayChoice === true) {
    
    choices.push(...charArray);
  };

  var upperAlphaArrayChoice = window.confirm("Do you want to include uppercase letters in your password?");
  if (upperAlphaArrayChoice === true) {
    choices.push(...upperAlphaArray);
  };
  
  choices.push(...numArray);
  
  choices.push(...alphaArray);
  //console.log(choices);

  var password = [];
  //console.log(password);
  
  for (let i = 0; i <numOfChars; i++) {
    var randomInterger = Math.floor(Math.random() * choices.length);
    password.push(choices[randomInterger]);
  }

  var passwordString = password.join('');
  console.log(passwordString);

  //var password = generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value=passwordString;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword(){
// All your code here
// var numChar = window.prompt
// console.log(numChar);
// var inclNums = window.confirm true/false

// array for each character type

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