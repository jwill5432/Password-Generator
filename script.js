// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePasswordnew();
  // this is the 
  
  var passwordText = document.querySelector("#password");
  //this line of code assigns the password text to the html class password to get it on the website in the part designated for it

  passwordText.value = password;
 }


function generatePasswordnew(passwordlength, passcharactersnew)
{
  password = "";
  passwordText = "";
  var passcharactersnew = ""; 
// this window prompt asks the user to select a length for their password
var passwordlength = window.prompt("How long do you want the password to be?");
  if (passwordlength >= 128) {
    password = "Use a Length Below 128";

    return password;
    // if the passwords is over 128 the function will not continue, it will instead prompt the user to use a password below 128
  } else if (passwordlength <=8) {
    password = "Use a Length Above 8";

    return password;
    // if the passwords is below 8 the function will not continue, it will instead prompt the user to use a password above 8
  }
else {
  // if the password length is between the correct specified numbers of 8 and 128, then the below if statements prompt the user for what characters they want, and if they hit ok, then these characters are added to the pool of potental characters in the password generating function
  passwordText= "";
if (confirm("Include Lowercase? If not hit cancel")== true) {
  var lowercase = "qwertyuiopasdfghjklzxcvbnm";
  passcharactersnew = "" + lowercase;
  //if you select ok this adds lowercase letters to the password
};

if (confirm("Inculde Uppercase? If not hit cancel")== true) {
  var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  passcharactersnew = passcharactersnew + uppercase;
  //if you select ok this adds uppercase letters to the password
};

if (confirm("Inculde Symbols? If not hit cancel")== true) {
  var symbols = "~!@#$%^&*()_+?><";
  passcharactersnew = passcharactersnew + symbols;
  //if you select ok this adds symbols to the password
};

if (confirm("Inculde Numbers? If not hit cancel")== true) {
  var numbers = "1234567890";
  passcharactersnew = passcharactersnew + numbers;
  //if you select ok this adds numbers to the password
};

let characters = passcharactersnew;
  for (let i = 0; i < passwordlength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * passcharactersnew.length)
    );
    /*This is the for loop that uses the length and charcters from the prompt to randomly generate the password, the generated password is then returned in the line below*/
  }
  return password;};

}

// the event listener below activates the write password function when the generate password button is clicked
generateBtn.addEventListener("click", writePassword);


