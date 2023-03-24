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

var passLength = prompt("Choose a password length between 8 and 128 characters")
if (passLength < 8 || passLength > 128) {
    prompt("You must choose a number between 8 & 128");
} else {
    var capitalPrompt = prompt("Do you want to use capital letters?");
    var lowerPrompt = prompt("Do you want to use lowercase letters?")
    var charPrompt = prompt("Do you want to use special characters?")
    var numPrompt = prompt("Do you want to use numbers?")
    if (capitalPrompt == null && lowerPrompt == null && charPrompt == null && numPrompt == null) {
        prompt("you must choose at least one option!");
    }
}

var capitalArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", '~']
charArray.push("\\");
var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var passArray = [capitalArray, lowerArray, charArray, numArray];
var choices = [capitalPrompt, lowerPrompt, charPrompt, numPrompt];
var passFinal = [];
var k = 0;


for (let i = 0; i < choices.length; i++) {
    if (choices[i] == null) {
        passArray.splice([k], 1);
    }
    else {
        k++;
    }

}


function generatePassword() {
    newArray = passArray.flat();

    for (let x = 0; x < passLength; x++) {
        rand = Math.floor(Math.random() * newArray.length);
        passFinal.push(newArray[rand]);
    }
    return passFinal.join("");
}


generatePassword();



