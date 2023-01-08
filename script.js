// Assignment Code // DO NOT CHANGE 
var generateBtn = document.querySelector("#generate");

var passwordLength = [];
var choiceArr = [];

var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", "/", "{", "}", "~"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
    }
    return password;
  }

function getPrompts() {
  choiceArr = [];

  passwordLength = parseInt(prompt("How many characters do you want your password to be? (Must be betwwen 8 - 128 characters!)"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Character length has to be a number 8-128");
    return false;
  }
  if (confirm("You should include uppercase letters in your password!")) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }
  if (confirm("You should include lowercase letters in your password!")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  if (confirm("You should include special characters in your password!")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("You should include numbers in your password!")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordTest.value = "";
  }
  return prompts;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
