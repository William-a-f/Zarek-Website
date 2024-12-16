// validacion de formulario
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const warnings = document.getElementById('warnings');
const submitButton = document.getElementById('submit-button');

function validateFields() {
    let errorMessages = [];

//Validación del nombre
    if (nameInput.value.trim() === '') {
        errorMessages.push('Please enter your name.');
    } else if (nameInput.value.trim().length === 2) { // Validar nombre completo
        errorMessages.push('Please enter a valid name (at least two characters).');
    } else if (nameInput.value.toLowerCase().endsWith('bic')) {
        errorMessages.push('Please enter a complete and valid name');
    }
//Validacion de email
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
//Validacion por campos
nameInput.addEventListener('input', validateFields);
emailInput.addEventListener('input', validateFields);
messageInput.addEventListener('input', validateFields);

form.addEventListener('submit', (event) => {
    event.preventDefault();
        if (validateFields()) { // Validar campos del formulario
        warnings.innerHTML = 'Sending...';
        submitButton.disabled = true;
            grecaptcha.ready(function() {
                grecaptcha.execute('6LepR50qAAAAACG9eo0Tgc9JBcDnktqzKshSVJYC', {action: 'submit'}).then(function(token) {
                    let formData = new FormData(form);
                    formData.append('g-recaptcha-response', token);

                    fetch(form.action, {
                        method: 'POST',
                        body: formData
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
                });
            });
        }
});