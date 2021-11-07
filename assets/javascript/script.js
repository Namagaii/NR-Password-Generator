// Assignment Code
var o_generateBtn = document.querySelector("#generate");
var a_lowercaseCharList = "abcdefghijklmnopqrstuvwxyz".split('');
var a_uppercaseCharList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var a_numericList = "0123456789".split('');
var a_specialCharactersList = ["!", "\"", "#", "$", "%","&", "\'","(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
function generatePassword(){
  var password = "";
  var isValid;
  do{
    var n_passwordLength = prompt("Type in length of password (between 8 and 128).");
    isValid = n_passwordLength >= 8 && n_passwordLength <= 128;
  }while(!isValid)
  isValid = false;
  do{
    var b_lowercase = confirm("Would you like lowercase characters (Ok: Yes Cancel: No).");
    var b_uppercase = confirm("Would you like uppercase characters (Ok: Yes Cancel: No).");
    var b_numeric = confirm("Would you like numeric characters (Ok: Yes Cancel: No).");
    var b_specialCharacters = confirm("Would you like special characters (Ok: Yes Cancel: No).");
    isValid = b_lowercase || b_uppercase || b_numeric || b_specialCharacters;
  }while(!isValid)
  var a_validCharList = generateCharArray(b_lowercase, b_uppercase, b_numeric, b_specialCharacters);
  for (var  i = 0; i < n_passwordLength; i++){
    var random = Math.floor(Math.random() * a_validCharList.length); // Get a random num between 0 and 49
    password += a_validCharList[random];
  }
  return password;
}

function generateCharArray(isLower, isUpper, hasNum, hasSpecialChar){
  console.log(isLower+" "+isUpper+" "+hasNum+" "+hasSpecialChar);
  var charList = [];
  // Add allowed character sets into the character list
  if (isLower){charList = charList.concat(a_lowercaseCharList);}
  if (isUpper){charList = charList.concat(a_uppercaseCharList)}
  if (hasNum){charList = charList.concat(a_numericList);}
  if (hasSpecialChar){charList = charList.concat(a_specialCharactersList);}
  return charList;
}

// Write password to the #password input
function writePassword() {
  var s_password = generatePassword();
  var o_passwordText = document.querySelector("#password");
  o_passwordText.value = s_password;
}

// Add event listener to generate button
o_generateBtn.addEventListener("click", writePassword);
