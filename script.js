// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables
 var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
 var lower = 'abcdefghijklmnopqrstuvwxyz'.split("");
 var numbers = '0123456789'.split("");
 var special = '!$%^&*()-=+[]{};#:@~,./<>?'.split(""); 
 var choices = [];

  //Generate Password Function
  function generatePassword(){
  //ask user for number of charectors
  numberOfCharacters = prompt("How many charecters do you want your password to be? Minimum 8 Maximum 128");
//check for a valid entry
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
  choices = choices.concat(lower)
  }
  //uppercase letters
  useUppercaseLetters = confirm("Do you want to include uppercase letters?");
  if(useUppercaseLetters===true){
  choices = choices.concat(lower)
  }
  //numbers
  useNumbers = confirm("Do you want to include numbers?");
  if(useNumbers===true){
  choices = choices.concat(numbers)
  }
  //special characters
  useSpecialCharacters = confirm("Do you want to include special charecters?");
  if(useSpecialCharacters===true){
  choices = choices.concat(special)
  }
  }; 
  //use for loop to iterate through the length of password 
  //use math random function to move items from charector array to password
  var newPassword = "";
  for(let i=0;i<numberOfCharacters;i++){
    char=choices[Math.floor(Math.random()*choices.length)]
    newPassword += char;
  }
  return newPassword
}; 

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

  
