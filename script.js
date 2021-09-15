// Assignment Code
generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
// Starts with questions that will be the conditions for the password
  passLength = window.prompt("How many characters long do you want the password to be? (Must be 8-128 long)");

  if (passLength < 8 || passLength > 128) {
    window.alert(
      "The password must contain at least 8 characters and no more than 128."
    );
    return;
  }

  lowerAns = window.confirm("Do you want lowercase letters in your password?");
  upperAns = window.confirm("Do you want uppercase letters in your password?");
  numberAns = window.confirm("Do you want numbers in your password?");
  specialAns = window.confirm("Do you want special characters in your password?");

  password = generatePassword();

  function generatePassword() {
// Created an empty array for the password and created arrays for each character type
    password = [];
    lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
    lowercaseArray = lowerCaseString.split("");

    upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    uppercaseArray = upperCaseString.split("");

    numberString = "0123456789";
    numberArray = numberString.split("");

    specialCharString = "!@#$%^&*()?";
    specialCharArray = specialCharString.split("");
// Used a while loop to run through the answers to the prompts and pick characters accordingly
    while (password.length < passLength) {
      if (lowerAns === true && password.length < passLength) {
        password.push(
          lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]
        );
      }

      if (upperAns === true && password.length < passLength) {
        password.push(
          uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]
        );
      }

      if (numberAns === true && password.length < passLength) {
        password.push(
          numberArray[Math.floor(Math.random() * numberArray.length)]
        );
      }

      if (specialAns === true && password.length < passLength) {
        password.push(
          specialCharArray[Math.floor(Math.random() * specialCharArray.length)]
        );
      }

      if (password.length === passLength && lowerAns === true) {
        password.push(
          lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]
        );
        return password;
      }
      if (password.length === passLength && upperAns === true) {
        password.push(
          uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]
        );
        return password;
      }
      if (password.length === passLength && numberAns === true) {
        password.push(
          numberArray[Math.floor(Math.random() * numberArray.length)]
        );
        return password;
      }
      if (password.length === passLength && specialAns === true) {
        password.push(
          specialCharArray[Math.floor(Math.random() * specialCharArray.length)]
        );
        return password;
      }
    }
// After the password is generated through the loop, it gets shuffled or randomized
    var shuffledPassword = function (passwordArray) {
      passwordArray.sort(() => Math.random() - 0.5);
      return passwordArray;
    };
// Randomized password array is then made into a string to be displayed on the webpage
    shuffledPassword(password);
    return password.join("");
  }

  passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
