const nombre = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const warnings = document.getElementById("warnings");
const token = grecaptcha.getResponse();

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    let errorMessages = "";

    // Validación del nombre
    if (nombre.value.trim() === "") { 
        errorMessages += `Please write your name.<br>`;
    } 
    if (nombre.value.toLowerCase().endsWith('bic')) {
        errorMessages += `Please enter a valid name.<br>`;
    }

    // Validación del correo electrónico
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!regexEmail.test(email.value)) {
        errorMessages += `Invalid e-mail address.<br>`;
    }

    // Validación del mensaje
    if (message.value.trim().length < 5) {
        errorMessages += `Please enter a valid message with at least 5 characters.<br>`;
    }

    if (token === '') {
        errorMessages += `Please, complete CAPTCHA verification.<br>`;
    }

    // Mostrar mensajes de error o enviar el formulario
    warnings.innerHTML = errorMessages;

    if (errorMessages === "") {
        warnings.innerHTML = "Sent";
    }
});
