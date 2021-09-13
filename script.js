// Assignment Code
generateBtn = document.querySelector("#generate");

// Global ables
// lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l", "m",
//                       "n","o","p","q","r","s","t","u","v","w","x","y","z"];

// uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
//                     ,"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// numberString = "0123456789";
// numberArray = numberString.split("");

// specialCharString = "!@#$%^&*()?";
// specialCharArray = specialCharString.split("");




// Write password to the #password input
function writePassword() {
    
    passLength = window.prompt("How many characters long do you want the password to be? (Must be 8-128 long)");
        if (passLength < 8) {
            window.alert("The password must contain at least 8 characters and no more than 128.")
            return;
        }
        if (passLength > 128) {
            window.alert("The password must contain at least 8 characters and no more than 128.")
            return;
        };
    lowerAns = window.confirm("Do you want lowercase letters in your password?");
    upperAns = window.confirm("Do you want uppercase letters in your password?");
    numberAns = window.confirm("Do you want numbers in your password?");
    specialAns = window.confirm("Do you want special characters in your password?");
    



password = generatePassword();
function generatePassword() {
password = [];
lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l", "m",
                      "n","o","p","q","r","s","t","u","v","w","x","y","z"];

uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
                    ,"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

numberString = "0123456789";
numberArray = numberString.split("");

specialCharString = "!@#$%^&*()?";
specialCharArray = specialCharString.split("");


   
// for (var i=0; i < passLength; i++) {
// let n = 0

while (password.length < passLength) {
    if (lowerAns === true && password.length < passLength) {
        password.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
    }

    if (upperAns === true && password.length < passLength) {
        password.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
    }

    if (numberAns === true && password.length < passLength) {
        password.push(numberArray[Math.floor(Math.random() * numberArray.length)]);
    }

    if (specialAns === true && password.length < passLength) {
        password.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
    }

    if (password.length === passLength && lowerAns === true) {
        password.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
        return password;
    }
    if (password.length === passLength && upperAns === true) {
        password.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
        return password;
    }
    if (password.length === passLength && numberAns === true) {
        password.push(numberArray[Math.floor(Math.random() * numberArray.length)]);
        return password;
    }
    if (password.length === passLength && specialAns === true) {
        password.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
        return password;
    }
   

    // return password.join('');
}
var shuffledPassword = function(inputArray) {
     inputArray.sort(()=> Math.random() - 0.5);
     return inputArray;
};
shuffledPassword(password);
return password.join('');


};


 

passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


    









