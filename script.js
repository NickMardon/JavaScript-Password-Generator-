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
    TODO://generate random letters, numers, random charectors with Math.random and array of alphebet and special charectors
    //if else chain of possible outcomes
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
  //else if statements to generate password based on criteria in the prompts
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
  TODO://concat() the different characters into choices and push into password array
  //call the write password function and display in HTML
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  TODO://Password written to page with document.querySelector(0)
 

// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  lower = 'abcdefghijklmnopqrstuvwxyz';
  number = '0123456789';
  special = '!$%^&*()-=+[]{};#:@~,./<>?'; 


var password = [];
var numberOfCharacters;
var useLowercaseLetters;
var useUppercaseLetters;
var useNumbers;
var useSpecialCharacters;
var choices;
// Write password to the #password input
function writePassword(){


  //Generate Password Function
  var password = generatePassword(){

    numberOfCharacters = parseInt(prompt("How many charecters do you want your password to be? Minimum 8 Maximum 128"));
    if (numberOfCharacters === NaN) {
      alert("You must enter a numeric value");
    } else if(numberOfCharacters < 8 || numberOfCharacters > 128){
      alert("You must enter a numeric value betweeen 8 and 128")
    } else{
  //confirms
      useLowercaseLetters = confirm("Do you want to include lowercase letters?");
      useUppercaseLetters = confirm("Do you want to include uppercase letters?");
      useNumbers = confirm("Do you want to include numbers?");
      useSpecialCharacters = confirm("Do you want to include special charecters?");
    }

    //if else statements for combinations of charector types
    
    //if upperCase, LowerCase, Number & Special Charector 

    //if upperCase, LowerCase, Number

    //if upperCase, LowerCase, Special Character

    //if uppercase, number, special character

    //if lowerCase, Special Character, Number

    //if lowerCase and upperCase

    //if lowerCase and number

    //if lowerCase and special characters

    //if uppercase and number

    //if uppercase and special characters

    //if special character and number 

    //if lowerCase

    //if upperCase

    //if number

    //if special character

  };


  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
