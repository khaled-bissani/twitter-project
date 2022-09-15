console.log("hello twitter");
var realname = document.getElementById('name');
var email = document.getElementById('email');
var username = document.getElementById('username');
var phone = document.getElementById('phone');
var password = document.getElementById('password');
var passwordRepeated = document.getElementById('confirmpassword');
var signUp = document.getElementById("signup-btn");


signUp.addEventListener('click',checkInformation);
function checkInformation() { 
    validate()
}

function validate() {
// Declare limitation for email
let emailFormat=/^[\w.-]{3,}@\w{5,}.*$/;

// Declare limitation for number
let numberFormat=/^\+9613[0-9]{0,6}|\+9617[0-9]{0,7}/;

// validate full name
if (realname.value.length < 5) {
    realname.style.borderColor = "#FF0000";
    realname.value = 'Name must be greater than or equal 5 characters';
}
// validate email
if (!emailFormat.test(email.value)) {
    email.style.borderColor = '#FF0000';
    email.value = 'Wrong email format';
}


}