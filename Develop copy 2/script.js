// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordTypes=["lowercase", "uppercase", "numeric", "special character"];
var lowercase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric=[1,2,3,4,5,6,7,8,9,0];
var specialCharacters=['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']'];
var possibleCharacters=[];
var passwordString="";

// Write password to the #password input
function writePassword() {
 


  var passwordLength = window.prompt("Please choose the length of your password: 8--128 characters");
  if(!passwordLength){
    return;
  }else if( passwordLength < 8 || passwordLength > 128){
    passwordLength= window.prompt("Please enter a number between 8 to 128");
  }


  var passwordTypes = window.prompt("Do you choose to add lowercase to your password? yes/no");
  if(passwordTypes== "yes"){
    possibleCharacters= possibleCharacters.concat(lowercase);
  }else if(passwordTypes= "no"){
    return;
  }else{
    passwordTypes= window.prompt("Please type in yes or no");
  }

  console.log(possibleCharacters);

  var passwordTypes = window.prompt("Do you choose to add uppercase to your password? yes/no");
  if(passwordTypes=="yes"){
    possibleCharacters= possibleCharacters.concat(uppercase);
  }else if(passwordTypes=="no"){
    return;
  }else{
    passwordTypes= window.prompt("Please type in yes or no");
  }

  console.log(possibleCharacters);

  var passwordTypes = window.prompt("Do you choose to add numeric to your password? yes/no");
  if(passwordTypes=="yes"){
    possibleCharacters= possibleCharacters.concat(numeric);
  }else if(passwordTypes=="no"){
    return;
  }else{
    passwordTypes= window.prompt("Please type in yes or no");
  }

  console.log(possibleCharacters);

  var passwordTypes = window.prompt("Do you choose to add special character to your password? yes/no");
  if(passwordTypes=="yes"){
    possibleCharacters= possibleCharacters.concat(specialCharacters);
  }else if(passwordTypes=="no"){
    return;
  }else{
    passwordTypes= window.prompt("Please type in yes or no");
  }

  console.log(possibleCharacters);


  function generatePassword(){
    for(i=0; i< passwordLength;i++){
      var randomCharacter= possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)];
      passwordString +=randomCharacter;
    }
    console.log(passwordString);
  }
  
    

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  window.alert("Your password is "+ passwordString);
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
