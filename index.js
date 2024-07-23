var username = document.getElementById("username");
var password = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = function(e){
    e.preventDefault();
    if (validateForm()) {
        clearInputs();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Please fill out the required fields correctly!",
            showConfirmButton: false,
            timer: 1500
        });
    }
}


//clearing the inputs text fields
function clearInputs(){
    username.value = "";
    password.value = "";
    username.classList.remove("is-valid");
    password.classList.remove("is-valid");
}

// Validation form
function validateForm() {
    var isValid = true;

    if(username.value == ""){
        document.getElementById("nameReqAlert").classList.replace("d-none", "d-block");
        username.classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("nameReqAlert").classList.replace("d-block", "d-none");
        username.classList.remove("is-invalid");
        username.classList.add("is-valid");
    }

    if(password.value == ""){
        document.getElementById("passwordReqAlert").classList.replace("d-none", "d-block");
        password.classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("passwordReqAlert").classList.replace("d-block", "d-none");
        password.classList.remove("is-invalid");
    }

    var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!pattern.test(password.value) && password.value != "") {
        document.getElementById("passwordValidationAlert").classList.replace("d-none", "d-block");
        password.classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("passwordValidationAlert").classList.replace("d-block", "d-none");
        password.classList.remove("is-invalid");
        if (password.value != "") {
            password.classList.add("is-valid");
        }
    }

    return isValid;
}

// Username validation on input
username.oninput = function() {
    if(username.value.length > 0) {
        document.getElementById("nameReqAlert").classList.replace("d-block", "d-none");
        username.classList.remove("is-invalid");
        username.classList.add("is-valid");
    } else {
        document.getElementById("nameReqAlert").classList.replace("d-none", "d-block");
        username.classList.remove("is-valid");
        username.classList.add("is-invalid");
    }
}

// Password validation on input
password.oninput = function() {
    var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if(pattern.test(password.value)) {
        document.getElementById("passwordReqAlert").classList.replace("d-block", "d-none");
        document.getElementById("passwordValidationAlert").classList.replace("d-block", "d-none");
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
    } else {
        document.getElementById("passwordValidationAlert").classList.replace("d-none", "d-block");
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
    }

    if(password.value.length > 0) {
        document.getElementById("passwordReqAlert").classList.replace("d-block", "d-none");
    }
}