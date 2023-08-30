
// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password length
function validatePassword(password) {
    return password.length >= 6;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from being submitted

    // Get input values
    const firstNameInput = document.getElementById("firstNameInput");
    const lastNameInput = document.getElementById("lastNameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    const termsCheckbox = document.getElementById("termsCheckbox");

    // Get error elements
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const termsError = document.getElementById("termsError");

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    termsError.textContent = "";

    // Validate inputs
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    let isValid = true;

    if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    if (!validatePassword(password)) {
        passwordError.textContent = "Password must be at least 6 characters long";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    if (!termsCheckbox.checked) {
        termsError.textContent = "Please accept the terms and conditions";
        isValid = false;
    }

    if (isValid) {
        // Perform registration action here, e.g., send data to the server
        // You can redirect to a different page or show a success message
        console.log("Registration successful");
    }
}

// Add event listener to form submit
const registerButton = document.getElementById("register");
registerButton.addEventListener("click", handleFormSubmit);
