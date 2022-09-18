
console.log("hello twitter");

const realname = document.getElementById('name');
const email = document.getElementById('email');
const username = document.getElementById('user-name');
const phone = document.getElementById('phone');
const password = document.getElementById('user-pass');
const passwordRepeated = document.getElementById('confirmpassword');
const dob = document.getElementById('dob');
const signUp = document.getElementById("signup-btn");

const userUsername = document.getElementById('user-username');
const userPassword = document.getElementById('user-password');

const signIn = document.getElementById("signIn-btn");


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
deactivate(signIn);

function checkSignup() {
    //regex to check email validity
    let emailFormat=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //regex to check phone number validity
    let numberFormat=/^\+9613[0-9]{0,6}|\+9617[0-9]{0,7}/;

    if (realname.value != '' && email.value != '' && emailFormat.test(email.value) && username.value != '' && phone.value!= '' && numberFormat.test(phone.value) && password.value != '' && passwordRepeated.value != '' && passwordRepeated.value == password.value) 
    {
        activate(signUp)
        localStorage.setItem("fullname",realname.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("username",username.value);
        localStorage.setItem("phonenumber",phone.value);
        localStorage.setItem("password",password.value);
        localStorage.setItem("dob",dob.value);
        //console.log(localStorage.getItem('fullname') + " " + localStorage.getItem('email') + " " + localStorage.getItem('dob'));

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

    //could not figure why the following conditions did not work 
    else if (!emailFormat.test(email.value)) {
        email.style.backgroundColor = "#ffcccb";
        email.placeholder = "please enter an email address";}
    else if (email.value != ''&& emailFormat.test(email.value) == false) {
        email.style.color = "#FF0000";
        email.placeholder = "please enter a valid email address";}
    else if (passwordRepeated.value != password.value) {
        passwordRepeated.style.backgroundColor = "#ffcccb"; 
        passwordRepeated.placeholder = "password doen not match";}
    
    //if any condition is not valid, keep the button disabled

    else {
        deactivate(signUp)
    }
}

realname.addEventListener('input', checkSignup);
email.addEventListener('input', checkSignup);
username.addEventListener('input', checkSignup);
phone.addEventListener('input', checkSignup);
password.addEventListener('input', checkSignup);
passwordRepeated.addEventListener('input', checkSignup);
dob.addEventListener('input', checkSignup);

function checkSignIn() {

    if (userUsername.value != '' && userPassword.value != '' ) {
        console.log('alsoooo all gooood');
        activate(signIn)
    }


    else if (userUsername.value == '') {
        userUsername.style.backgroundColor = "#ffcccb"; 
        userUsername.placeholder = "please enter a username";}
    
    else if (userPassword.value == '') {
        userPassword.style.backgroundColor = "#ffcccb"; 
        userPassword.placeholder = "please enter a password";}
    
    else{
        deactivate(signIn)
    }

};

userUsername.addEventListener('input', checkSignIn);
userPassword.addEventListener('input', checkSignIn);



////////////////////////////////////////////////////////////////////////////////////////////////////
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    return data;
}
///////////////////////////////////////////////////////////////////////////////

const signupbtn = document.getElementById('signup-btn');

signupbtn.onclick = () => {

    // data to be sent to the POST request
    let data = {
        "fullname": localStorage.getItem('fullname'), 
        "email": localStorage.getItem('email'),
        "username" : localStorage.getItem('username'),
        "phonenumber": localStorage.getItem('phonenumber'),
        "password":  localStorage.getItem('password'),
        "dob": localStorage.getItem('dob'),
    }
    fetch("http://localhost/twitter-project/add-user.php", 
    {
        method: "POST",
        body: JSON.stringify(data),
        //headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json));
    console.log(JSON.stringify(data))

    window.location.replace('home.html');
};
    //console.log(data);
    //window.localStorage.setItem("data", "tessssssssst");
    //console.log(window.localStorage.getItem(data));
    //var data = window.localStorage.getItem("data");
    //localStorage.setItem("signUpData" : data);
    /*
    var form = document.getElementById('form2')
    var data = new FormData(form);
    console.log(data);
   */
    /*let data = {
        "name": signupname.value, 
        "email": signupemail.value,
        "username" : signupusername.value,
        "phone": signupphone.value,
        "password":  signuppass.value,
        "dob": dob.value}
        console.log(data);*/
    /*fetch('http://localhost/twitter-project/add-user.php', {
        method: "POST",
        body: data,
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response =>  console.log(response.json()));
    console.log("testtttttt")*/
   /* getapi("http://localhost/twitter-project/add-user.php")
    async function getapi(url)
    {
        // Storing response
        const response = await fetch(url ,
        {
            method: "POST",
            body: JSON.stringify(data),
            
        });
        console.log("data is       " + JSON.stringify(data));
        // Storing data in form of JSON
        data = await response.json();
        console.log('data');
        console.loge(data);
        return data;
    }
}*/
/////////////////////////////////////////////////////////////////////////////////
const signInbtn = document.getElementById('signIn-btn');
console.log(signInbtn);
signInbtn.onclick = () => {
    let logging = document.getElementById('user-username');
    let username = logging.value;
    let password = document.getElementById('user-password').value;
    console.log(username);
    console.log(password);
    console.log("///////////");
    let url = "http://localhost/twitter-project/getUsernames.php?username="+username;
    let user = getapi(url);
    let x;
    let y;
    const getuser= () => {
        user.then((a) => {
            x = a[0].username;
            y = a[0].password;
            console.log(x +" "+ y);
            if(y == password){
                localStorage.setItem("currentuser", x);
                console.log(localStorage.getItem('currentuser'));
                window.location.replace('home.html');
            }
            else{
                //var w = document.createTextNode("Invalid credentials");
                var popcontent = document.getElementById("pop1h2");
                popcontent.innerText = "Invalid credentials";
            }
            //var y = document.createTextNode(results);
            //appendig this result to the paragraph of all outputs
            //output_results.appendChild(y);
        });
        
    };
    getuser();
}

