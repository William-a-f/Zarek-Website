// validacion de formulario
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dateInput = document.getElementById('date');
const messageInput = document.getElementById('message');
const warnings = document.getElementById('warnings');

form.addEventListener('submit', (event) => {
event.preventDefault(); 

let errorMessages = [];

// Validación del nombre
if (nameInput.value.trim() === '') {
    errorMessages.push('Please write your name.');
}

// Validación adicional para nombre spam
if (nombre.toLowerCase().endsWith('bic')) {
	warnings += `Invalid name, please check and try again. <br>`
	entrar = true
}

// Validación del email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
if (!emailRegex.test(emailInput.value)) {
    errorMessages.push('Invalid e-mail address. Please check and try again');
}

// Validación del mensaje
if (messageInput.value.trim() === '') {
    errorMessages.push('You haven’t written a message, please check and try again.');
} else if (messageInput.value.trim().length < 10) { 
    errorMessages.push('Your message must have at least 10 characters'); 
}

if (errorMessages.length > 0) {
    warnings.innerHTML = errorMessages.join('<br>');
} else {
    // Si no hay errores, enviar el formulario
    form.submit();
}
});