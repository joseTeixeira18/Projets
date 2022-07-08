let firstName = document.getElementById("firstName");
let firstnameHelp = document.getElementById("firstNameHelp");
let lastname = document.getElementById("lastName");
let lastnameHelp = document.getElementById("lastNameHelp");
let email = document.getElementById("email-input");
let emailHelp = document.getElementById("emailHelp");   
let password = document.getElementById("password-input");
let passwordHelp = document.getElementById("passwordHelp");

let form = document.querySelector("form");

form.addEventListener("submit", function (a){
    a.preventDefault();    

    if(firstName.value !== ""){
        firstnameHelp.innerText = "";
        firstName.style.borderColor = "";
    }else{
        firstnameHelp.innerText = "Type your First Name";
        firstName.style.borderColor = "red";        
    }
    
    if(lastname.value !== ""){
        lastnameHelp.innerText = "";
        lastname.style.borderColor = "";
    } else{
        lastnameHelp.innerText = "Type your Last Name";
        lastname.style.borderColor = "red";
    }
    
    if(email.value !== ""){
        emailHelp.innerText = "";
        email.style.borderColor = "";
    } else{
        emailHelp.innerText = "Type your Email address";
        email.style.borderColor = "red";
    }

    if(password.value.length > 12){
        passwordHelp.innerText = "Choose a password containing between 8 and 12 characters";
        password.style.borderColor = "red";
    } else if (password.value.length < 8){
        passwordHelp.innerText = "Choose a password containing between 8 and 12 characters";
        password.style.borderColor = "red";
    } else {
        passwordHelp.innerText = "";
        password.style.borderColor = "";
    }
})

