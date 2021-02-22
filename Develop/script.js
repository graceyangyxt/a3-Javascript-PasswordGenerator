// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordTypes=["lowercase", "uppercase", "numeric", "special character"];



// Write password to the #password input
function writePassword() {
 


  var passwordLength = window.prompt("Please choose the length of your password: 8--128 characters");
  if(!passwordLength){
    return;
  }else if( passwordLength<8 || passwordLength>128){
    passwordLength= window.prompt("Please enter a number between 8 to 128");
  }


  var passwordTypes = window.prompt("Please choose at least one type for your password: lowercase, uppercase, numeric, special characters");
  if(!passwordTypes){
    return;
  }else if( !passwordTypes.includes(passwordTypes)){
    passwordTypes= window.prompt("Please choose at least one type for your password: lowercase, uppercase, numeric, special characters");
  }

  function generatePassword(){
    
    
  }
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
