"use strict;"
const button = document.getElementById("submitButton");

button.onclick = function(e){

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const pass1 = document.getElementById("pass1");
    const pass2 = document.getElementById("pass2");

    const userErr = document.getElementById("userErr");
    const emailErr = document.getElementById("emailErr");
    const passErr1 = document.getElementById("passErr1");
    const passErr2 = document.getElementById("passErr2");


    e.preventDefault();
    
    validateUserName(username, userErr);
    validateEmail(email, emailErr);
    confirmPassword(pass1, pass2, passErr2);
}

function validateUserName(username, userErr){
    var i = document.getElementsByTagName("i")[0];
    var name = username.value;
    var check = (new RegExp("^[a-z]{1,}$")).test(name);
    if(!check){
        userErr.innerText = "Username constraint not followed."
        
        if(i.classList.contains("success")){
            i.classList.remove("success");
            i.classList.remove("fa");
            i.classList.remove("fa-check-circle");
        }

        i.classList.add("error");
        i.classList.add("fa");
        i.classList.add("fa-exclamation-circle");

        username.classList.add("wrong");
        if(username.classList.contains("right")){
            username.classList.remove("right");
        }
    }
    else{

        if(i.classList.contains("error")){
            i.classList.remove("error");
            i.classList.remove("fa");
            i.classList.remove("fa-exclamation-circle");
        }

        userErr.innerText = "";
        i.classList.add("success");
        i.classList.add("fa");
        i.classList.add("fa-check-circle");

        username.classList.add("right");
        if(username.classList.contains("wrong")){
            username.classList.remove("wrong");
        }
    }
}

function validateEmail(email, emailErr){
    var emailVal = email.value;
    var i = document.getElementsByTagName("i")[1];
    if(!(new RegExp("^[a-zA-Z\\.]{1,}@[a-zA-Z]{1,}\\.com$").test(emailVal))){
        emailErr.innerText = "Email constraint not followed."
        
        if(i.classList.contains("success")){
            i.classList.remove("success");
            i.classList.remove("fa");
            i.classList.remove("fa-check-circle");
        }

        i.classList.add("error");
        i.classList.add("fa");
        i.classList.add("fa-exclamation-circle");

        email.classList.add("wrong");
        if(email.classList.contains("right")){
            email.classList.remove("right");
        }
    }
    else{

        if(i.classList.contains("error")){
            i.classList.remove("error");
            i.classList.remove("fa");
            i.classList.remove("fa-exclamation-circle");
        }

        emailErr.innerText = "";
        i.classList.add("success");
        i.classList.add("fa");
        i.classList.add("fa-check-circle");

        email.classList.add("right");
        if(email.classList.contains("wrong")){
            email.classList.remove("wrong");
        }
    }
}

function confirmPassword(pass1, pass2, passErr2){
    var i = document.getElementsByTagName("i")[3];
    if(pass1.value.trim() === pass2.value.trim() && pass1.value.trim() !== ""){
        passErr2.innerText = "";
        if(i.classList.contains("error")){
            i.classList.remove("error");
            i.classList.remove("fa");
            i.classList.remove("fa-exclamation-circle");
        }
        i.classList.add("success");
        i.classList.add("fa");
        i.classList.add("fa-check-circle");

        pass1.classList.add("right");
        if(pass1.classList.contains("wrong")) pass1.classList.remove("wrong");
        
        pass2.classList.add("right");
        if(pass2.classList.contains("wrong")) pass2.classList.remove("wrong");

    }
    else{
        passErr2.innerText = "Both password are not same.";

        if(i.classList.contains("success")){
            i.classList.remove("success");
            i.classList.remove("fa");
            i.classList.remove("fa-check-circle");
        }
        i.classList.add("error");
        i.classList.add("fa");
        i.classList.add("fa-exclamation-circle");

        pass1.classList.add("wrong");
        if(pass1.classList.contains("right")) pass1.classList.remove("right");
        
        pass2.classList.add("wrong");
        if(pass2.classList.contains("right")) pass2.classList.remove("right");

    }
}