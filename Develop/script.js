// Assignment code here
var generatePassword = function() {

    var passLength = null;

    //ensure password is between 8 and 128 characters
    while (Number(passLength) < 8 || Number(passLength) > 128 || Number(passLength) === null || isNaN(passLength)) {
      passLength = prompt("Please pick a password length between 8 and 128 characters");
    }

    var passLowercase = confirm("Include lowercase letters?");
    var passUppercase = confirm("Include uppercase letters?");
    var passNumbers = confirm("Include numbers?");
    var passSpecialCharacters = confirm("Include special characters?");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
