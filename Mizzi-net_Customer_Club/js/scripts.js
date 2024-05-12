/*
* Project: Mizzi-net Customer Club Registration
* Authors: Tom Doughty (ID: 204273237), Eyasu Belay (ID: 346440969)
* Description: 
*     This file is part of the Mizzi-net Customer Club Registration project.
*/


// scripts.js: Validation for Mizzi-net Customer Club Registration

function validateForm() {
    let isValid = true;
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Reset error states and messages
    email.classList.remove('error');
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
    passwordError.innerText = '';
    confirmPasswordError.innerText = '';

    // Validate Email
    if (!email.value) {
        email.classList.add('error');
        isValid = false;
    }

    // Validate Password
    if (password.value.length < 8) {
        password.classList.add('error');
        passwordError.innerText = "Password must be at least 8 characters long.";
        isValid = false;
    }

    // Validate Password Match
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        confirmPasswordError.innerText = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        alert('Registration Successful!');
    } else {
        alert('Please correct the highlighted fields.');
    }
}
