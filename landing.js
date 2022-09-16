
console.log("hello twitter");

const realname = document.getElementById('name');
const email = document.getElementById('email');
const username = document.getElementById('user-name');
console.log(username);
console.log(username.value);
const phone = document.getElementById('phone');
const password = document.getElementById('user-pass');
const passwordRepeated = document.getElementById('confirmpassword');

const signUp = document.getElementById("signup-btn");

//to reset the forms when launching the pop ups
document.getElementById("signup1").onclick= () => {
    document.forms["form2"].reset();
};
document.getElementById("signIn1").onclick= () => {
    document.forms["form1"].reset();
};


function activate(btn) {
    btn.disabled = false;
}
  
function deactivate(btn) {
    btn.disabled = true;
}

deactivate(signUp);

function checkSignup() {
    //regex to check email validity
    let emailFormat=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //regex to check phone number validity
    let numberFormat=/^\+9613[0-9]{0,6}|\+9617[0-9]{0,7}/;

    if (realname.value != '' && email.value != '' && emailFormat.test(email.value) && username.value != '' && phone.value!= '' && numberFormat.test(phone.value) && password.value != '' && passwordRepeated.value != '' && passwordRepeated.value == password.value) {
        console.log('all gooood');
        activate(signUp)
    }
    else if (realname.value == '') {
        realname.style.backgroundColor = "#ffcccb"; 
        realname.placeholder = "please enter a name";}

    else if (email.value == '') {
        email.style.backgroundColor = "#ffcccb";
        email.placeholder = "please enter an email address";}

    else if (username.value == '') {
        username.style.backgroundColor = "#ffcccb"; 
        username.placeholder = "please enter a username";}
    
    else if (phone.value == '') {
        phone.style.backgroundColor = "#ffcccb"; 
        phone.placeholder = "please enter a phone number";}

    else if (password.value == '') {
        password.style.backgroundColor = "#ffcccb"; 
        password.placeholder = "please enter a password number";}

    else if (passwordRepeated.value == '') {
        passwordRepeated.style.backgroundColor = "#ffcccb"; 
        passwordRepeated.placeholder = "please enter a password number";}

    /*else if (email.value != ''&& emailFormat.test(email.value) == false) {
        email.style.color = "#FF0000";
        email.placeholder = "please enter a valid email address";}*/
    

    else {
        deactivate(signUp)
    }
}

realname.addEventListener('input', checkSignup)
email.addEventListener('input', checkSignup)
username.addEventListener('input', checkSignup)
phone.addEventListener('input', checkSignup)
password.addEventListener('input', checkSignup)
passwordRepeated.addEventListener('input', checkSignup)
