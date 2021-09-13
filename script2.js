var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l", "m",
                      "n","o","p","q","r","s","t","u","v","w","x","y","z"];

var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"
                    ,"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numberString = "0123456789";
var numberArray = numberString.split("");

var specialCharString = "!@#$%^&*()?";
var specialCharArray = specialCharString.split("");

var password = [""];

var passPrompt = function() {
    var passLength = window.prompt("How many characters long do you want the password to be? (Must be 8-128 long)");
        if (passLength < 8) {
            window.alert("The password must contain at least 8 characters.")
            return;
        }
    var lowerAns = window.confirm("Do you want lowercase letters in your password?");
    var upperAns = window.confirm("Do you want uppercase letters in your password?");
    var numberAns = window.confirm("Do you want numbers in your password?");
    var specialAns = window.confirm("Do you want special characters in your password?");

    
    while (password.length < passLength) {

    if (lowerAns === true) {
        var password = password.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
    }

    else if (upperAns === true) {
        var password = password.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
    }

    else if (numberAns === true) {
        var password = password.push(numberArray[Math.floor(Math.random() * numberArray.length)]);
    }

    else if (specialAns === true) {
        var password = password.push(specialCharArray[Math.floor(Math.random() * specialCharArray.length)]);
    }

    else if (password.length == passLength) {
        var password = password.join('');
        return password;

    }};

}

passPrompt();