// validacion de formulario
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const warnings = document.getElementById('warnings');
const submitButton = document.getElementById('submit-button');

function validateFields() {
    let errorMessages = [];

    // Validación del nombre
    if (nameInput.value.trim() === '') {
        errorMessages.push('Please enter your name.');
    } else if (nameInput.value.trim().length === 2) { // Nueva validación: al menos dos caracteres
        errorMessages.push('Please enter a valid name (at least two characters).');
    } else if (nameInput.value.toLowerCase().endsWith('bic')) {
        errorMessages.push('Please enter a complete and valid name');
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!emailRegex.test(emailInput.value)) {
        errorMessages.push('Please enter a valid email address.');
    }

    if (messageInput.value.trim() === '') {
        errorMessages.push('Please enter a message.');
    } else if (messageInput.value.trim().length < 10) {
        errorMessages.push('The message must be at least 10 characters long.');
    }

    warnings.innerHTML = errorMessages.join('<br>');
    submitButton.disabled = errorMessages.length > 0;

    return errorMessages.length === 0;
}

nameInput.addEventListener('input', validateFields);
emailInput.addEventListener('input', validateFields);
messageInput.addEventListener('input', validateFields);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateFields()) {
        submitButton.disabled = true;
        warnings.innerHTML = 'Sending...';

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            warnings.innerHTML = 'Sent!';
            form.reset();
            submitButton.disabled = false;
        })
        .catch(error => {
            console.error('Error:', error);
            warnings.innerHTML = 'There was an error sending your message. Please try again later.';
            submitButton.disabled = false;
        });
    }
});