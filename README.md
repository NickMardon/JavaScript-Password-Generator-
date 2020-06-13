# JavaScript-Password-Generator-
JavaScript Password Generator

## User Directions

### 1. Click generate password button to start 

<img width="1680" alt="Screen Shot 2020-06-12 at 6 14 39 PM" src="https://user-images.githubusercontent.com/64296192/84556708-3da00780-acd9-11ea-9fb5-207d9cf854c1.png"> 

### 2. Respond to the prompt with a number between 8 and 128 for the password length 

<img width="1680" alt="Screen Shot 2020-06-12 at 6 14 46 PM" src="https://user-images.githubusercontent.com/64296192/84556715-54465e80-acd9-11ea-9c98-f5e7462e4e8b.png">

### 3. Confirm if you would like to include lowercase letters in your password

<img width="1680" alt="Screen Shot 2020-06-12 at 6 15 00 PM" src="https://user-images.githubusercontent.com/64296192/84556723-67f1c500-acd9-11ea-9384-2422d6e37d43.png">

### 4. Confirm if you would like to include uppercase letters in your password

<img width="1680" alt="Screen Shot 2020-06-12 at 6 15 03 PM" src="https://user-images.githubusercontent.com/64296192/84556775-bacb7c80-acd9-11ea-8a1f-fe1dc92146ff.png">

### 5. Confirm if you would like to include numbers in your password

<img width="1680" alt="Screen Shot 2020-06-12 at 6 15 06 PM" src="https://user-images.githubusercontent.com/64296192/84556751-81930c80-acd9-11ea-9ecb-662b111a93d7.png">

### 6. Confirm if you would like to include any special characters in your password

<img width="1680" alt="Screen Shot 2020-06-12 at 6 15 08 PM" src="https://user-images.githubusercontent.com/64296192/84556783-d20a6a00-acd9-11ea-8c9b-a72cce0cbe14.png">

### 7. Password will be displayed in box that reads 'your secure password'

<img width="1680" alt="Screen Shot 2020-06-12 at 6 15 12 PM" src="https://user-images.githubusercontent.com/64296192/84556790-e2224980-acd9-11ea-9564-9d9ea4f5ce6f.png">

## Code Breakdown 

### Defined Global Variables
<img width="414" alt="Screen Shot 2020-06-12 at 6 28 54 PM" src="https://user-images.githubusercontent.com/64296192/84556907-e00cba80-acda-11ea-8def-8e3a38d997f3.png">

### generatePassword function
contains if/else if/ else statement to validate character length input
if input is valid, confirms are called and confirm result concatinate charecters into an empty array
the for loop itereates through the array of charectors and uses Math.random to generate random characters

<img width="836" alt="Screen Shot 2020-06-12 at 6 27 55 PM" src="https://user-images.githubusercontent.com/64296192/84556931-409bf780-acdb-11ea-9aef-cbb4c614931b.png">

### writePassword function
function called by button eventListener("click") and password is generated and display in application

<img width="458" alt="Screen Shot 2020-06-12 at 6 30 09 PM" src="https://user-images.githubusercontent.com/64296192/84557010-34fd0080-acdc-11ea-82e6-83a5f9522350.png">




