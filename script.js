// GIVEN I need a new, secure password


//TODO: WHEN I click the button to generate a password

// TODO:THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// TODO:THEN I select which criteria to include in the password
    //various prompts and if statements
// WHEN prompted for the length of the password
// TODO: THEN I choose a length of at least 8 characters and no more than 128 characters
      //If statement for charector length
// WHEN prompted for character types to include in the password
//TODO: THEN I choose lowercase, uppercase, numeric, and/or special characters
    //generate random letters, numers, random charectors with Math.random and array of alphebet and special charectors
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
  //else if statements to generate password based on criteria in the prompts
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
  //call the write password function and display in HTML
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  //Password written to page with document.querySelector(0)



// Assignment Code
var generateBtn = document.querySelector("#generate");
var charTypes = {
  'upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'lower': 'abcdefghijklmnopqrstuvwxyz',
  'number': '0123456789',
  'special': '!$%^&*()-=+[]{};#:@~,./<>?'
};
// Write password to the #password input
function writePassword() {
  //prompts and confirms
  var numberOfCharacters = prompt("How many charecters do you want your password to be? Minimum 8 Maximum 128");
  var useLowercaseLetters = confirm("Do you want to include lowercase letters?");
  var useUppercaseLetters = confirm("Do you want to include uppercase letters?");
  var useNumbers = confirm("Do you want to include numbers?");
  var useSpecialCharacters = confirm("Do you want to include special charecters?");
 

  //Generate Password Function
  var password = generatePassword(){
    if(numberOfCharacters >= 8 && numberOfCharacters <= 128){
      //generate the password
    }
  };
  var passwordText = document.querySelector("#password");

 for(let i = 0; i < numberOfCharacters; i++){
   if(useLowercaseLetters===true){

   }
 }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword;
