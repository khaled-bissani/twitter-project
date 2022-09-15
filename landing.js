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
if (realname.value.length <= 5) {
    realname.style.borderColor = "#FF0000";
    $('name').attr('placeholder','Name length must be greater than 5 characters');
}
else {
    document.getElementById('name').style.borderColor = '#00FF00.';
}
// validate email
if (emailFormat.test(email.value)) {
    document.getElementById('email').style.borderColor = 'green';
    document.querySelector('.error-box2').textContent = '';
}
else {
    document.querySelector('.error-box2').classList.add('error-message'); 
    document.querySelector('.error-box2').textContent = '-Wrong email format';
    document.getElementById('email').style.borderColor = '#ced4da';
}
// validate number
if (numberFormat.test(number)) {
    document.getElementById('number').style.borderColor = 'green';
    document.querySelector('.error-box3').textContent = '';
}
else {
    document.querySelector('.error-box3').classList.add('error-message'); 
    document.querySelector('.error-box3').textContent = '-Wrong number format';
    document.getElementById('number').style.borderColor = '#ced4da';
}
// validate message
if (message.value.length<=100) {
    document.querySelector('.error-box4').classList.add('error-message');
    document.querySelector('.error-box4').textContent = '-Message is less than 100 characters';
    document.getElementById('message').style.borderColor = '#ced4da';
}
else {
    document.getElementById('message').style.borderColor = 'green';
    document.querySelector('.error-box4').textContent = '';
}
}