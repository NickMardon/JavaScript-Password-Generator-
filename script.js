// GIVEN I need a new, secure password


//TODO: WHEN I click the button to generate a password

// TODO:THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// TODO:THEN I select which criteria to include in the password
    //various prompts and if statements
// WHEN prompted for the length of the password
// TODO: THEN I choose a length of at least 8 characters and no more than 128 characters
      //If statement for charector length
      //not a number
      //outside of 8 and 128 range
// WHEN prompted for character types to include in the password
//TODO: THEN I choose lowercase, uppercase, numeric, and/or special characters
    //TODO://generate random letters, numers, random charectors with Math.random and array of alphebet and special charectors
    //if else chain of possible outcomes
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
  //else if statements to generate password based on criteria in the prompts
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
  //TODO://concat() the different characters into choices and push into password array
  //call the write password function and display in HTML
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  //TODO://Password written to page with document.querySelector(0)
 

// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables
 var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
 var lower = 'abcdefghijklmnopqrstuvwxyz'.split("");
 var numbers = '0123456789'.split("");
 var special = '!$%^&*()-=+[]{};#:@~,./<>?'.split(""); 
 var newPassword = "";
 var choices = [];

  //Generate Password Function
  function generatePassword(){
  //ask user for number of charectors
  numberOfCharacters = parseInt(prompt("How many charecters do you want your password to be? Minimum 8 Maximum 128"));

  if (numberOfCharacters === NaN){
    alert("You must enter a numeric value");
  } else if(numberOfCharacters < 8 || numberOfCharacters > 128){
    alert("You must enter a numeric value betweeen 8 and 128");
  } else{
  //confirms
  // use if true boolean to concatinate the charectors intro the choices array
  //lower case letters
  useLowercaseLetters = confirm("Do you want to include lowercase letters?");
  if(useLowercaseLetters===true){
  choices = choices.concat(lower);
  }
  //uppercase letters
  useUppercaseLetters = confirm("Do you want to include uppercase letters?");
  if(useUppercaseLetters===true){
  choices = choices.concat(lower);
  }
  //numbers
  useNumbers = confirm("Do you want to include numbers?");
  if(useNumbers===true){
  choices = choices.concat(numbers);
  }
  //special characters
  useSpecialCharacters = confirm("Do you want to include special charecters?");
  if(useSpecialCharacters===true){
  choices = choices.concat(special);
  }
  }; 
}; 
// Write password to the #password input
function writePassword(){}



  //use for loop to iterate through the length of password 
  //use math random function to move items from charector array to password


  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
