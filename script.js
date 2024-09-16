// DOM Elements
const formContainer = document.getElementById("sub-container");
const emailInput = document.getElementById("email");
const successMessage = document.getElementById("success-message");
const emailOutput = document.getElementById("email-output");
const errorMessage = document.getElementById("error-message");
const dismissButton = document.getElementById("dismiss-button");

// Email Validation Regex
const emailPattern = /^[^s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate email
const validateEmail = (email) => emailPattern.test(email);

// Utility function to toggle class lists

const toggleClass = (element, classToAdd, classToRemove) => {
  element.classList.add(classToAdd);
  element.classList.remove(classToRemove);
};

// Function to handle real-time email validation

const handleEmailInput = () => {
  const emailValue = emailInput.value;

  if (!validateEmail(emailValue)) {
    toggleClass(errorMessage, "visible", "hidden");
    toggleClass(emailInput, "invalid", "valid");
  } else {
    toggleClass(errorMessage, "hidden", "visible");
    toggleClass(emailInput, "valid", "invalid");
  }
};

// Function to handle form submission
const handleFormSubmit = (e) => {
  e.preventDefault();

  const emailValue = emailInput.value;

  if (validateEmail(emailValue)) {
    emailOutput.textContent = emailValue;
    toggleClass(formContainer, "hidden", "visible");
    toggleClass(successMessage, "visible", "hidden");
    emailInput.value = ""; // Clear the input after submission
  }
};

// Function to handle dimiss button click

const handleDismissClick = () => {
  toggleClass(formContainer, "visible", "hidden");
  toggleClass(successMessage, "hidden", "show");
  toggleClass(emailInput, "invalid", "valid");
};

// Event listeners
emailInput.addEventListener("input", handleEmailInput);
formContainer.addEventListener("submit", handleFormSubmit);
dismissButton.addEventListener("click", handleDismissClick);
