
console.log("hello twitter");
const realname = document.getElementById('name');
const email = document.getElementById('email');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const passwordRepeated = document.getElementById('confirmpassword');
const signUp = document.getElementById("signup-btn");


document.getElementById("signup1").onclick= () => {
    document.forms["form2"].reset();
};
document.getElementById("signIn1").onclick= () => {
    document.forms["form1"].reset();
};

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