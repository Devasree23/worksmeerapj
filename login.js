function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validatePassword(password) {
    return password.length >= 6;
}


function handleFormSubmit(event) {
    event.preventDefault(); 

   
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");


    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    
     emailError.textContent = "";
     passwordError.textContent = "";

    
     const email = emailInput.value.trim();
     const password = passwordInput.value;

     let isValid = true;

     if (!validateEmail(email)) {
         emailError.textContent = "Please enter a valid email address";
         isValid = false;
     }

     if (!validatePassword(password)) {
         passwordError.textContent = "Password must be at least 6 characters long";
         isValid = false;
     }
     if (isValid) {
   
        console.log("Login successful");
        history.back()
    }
}

// Add event listener to form submit
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", handleFormSubmit);


