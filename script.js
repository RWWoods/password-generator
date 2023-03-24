// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passLength = prompt("How many characters would you like?")
// if(passLemgth < 8 || >128){
//   passLength = prompt("Your password must be between 8 and 128 characters")
// }


var capitalPrompt = prompt("Do you want to use capital letters?");
var lowerPrompt = prompt("Do you want to use lowercase letters?")
var charPrompt = prompt("Do you want to use special characters?")
var numPrompt = prompt("Do you want to use numbers?")

var capitalArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
indexCap = Math.floor(Math.random() * capitalArray.length);
var capChoice = capitalArray[indexCap];
// How do I add "\" to an array without breaking it?
var charArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", '~']
charArray.push("\\");

function generatePassword() {
  passLength();
  if (capitalPrompt != null) {

  }
}
