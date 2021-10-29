// Assignment code here
var generatePassword = function() {

    var passLength = null;
    var passLowercase = false;
    var passUppercase = false;
    var passNumbers = false;
    var passSpecialCharacters = false;
    var characters = "";
    var result = "";

    // ensure password is between 8 and 128 characters
    while (Number(passLength) < 8 || Number(passLength) > 128 || Number(passLength) === null || isNaN(passLength)) {
      passLength = prompt("Please pick a password length between 8 and 128 characters.");
    }

    // ask user which characters they want to include
    function chooseCharacters() {
      passLowercase = confirm("Include lowercase letters?");
      passUppercase = confirm("Include uppercase letters?");
      passNumbers = confirm("Include numbers?");
      passSpecialCharacters = confirm("Include special characters?");
    }

    chooseCharacters();

    // make sure at least one character type is selected
    if (!passLowercase && !passUppercase && !passNumbers && !passSpecialCharacters) {
      alert("Please pick at least one character type.");
      chooseCharacters();
    }

    // create string from which to choose random characters
    if (passLowercase) {
      characters = characters + "abcdefghijklmnopqrstuvwxyz";
    }

    if (passUppercase) {
      characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (passNumbers) {
      characters = characters + "1234567890";
    }

    if (passSpecialCharacters) {
      characters = characters + " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      characters = characters + '"';
    }

    for (var i = 0; i < passLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;

};

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
