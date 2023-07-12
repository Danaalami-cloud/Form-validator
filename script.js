const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2EL = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Use HTML contraint API to check form validity
  isValid = form.checkValidity();
  // if the form is not valid
  if (!isValid) {
    // Style main message for an error
    message.textContent = "Please fill out all fields.";
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // Check to see i both password fields match
  if (password1El.value === password2EL.value) {
    // if they match, set value to true and borders to green
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2EL.style.borderColor = 'green';
  } else {
    // If they dont match, border color if input to red, change message
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match plese.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2EL.style.borderColor = 'red';
    return;
  }
  // If form is valid and passwords match
  if (isValid && passwordsMatch) {
    // Style main message for success
    message.textContent = 'Successfully Registered. YAY You!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user Data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Vsslidate Form
  validateForm();
  // Submit form if valid
  if(isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener('submit', processFormData);