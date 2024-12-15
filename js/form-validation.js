const nombre = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const warnings = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    let errorMessages = "";

    // Validación del nombre
    if (nombre.value.trim() === "") { 
        errorMessages += `<p>Please write your name.<br></p>`;
    } 
    if (nombre.value.toLowerCase().endsWith('bic')) {
        errorMessages += `<p>Please enter a valid name.<br></p>`;
    }

    // Validación del correo electrónico
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!regexEmail.test(email.value)) {
        errorMessages += `<p>Invalid e-mail address.<br></p>`;
    }

    // Validación del mensaje
    if (message.value.trim().length < 5) {
        errorMessages += `<p>Please enter a valid message with at least 5 characters.<br></p>`;
    }

    // Mostrar mensajes de error o enviar el formulario
    warnings.innerHTML = errorMessages;

    if (errorMessages === "") {
        // Aquí puedes enviar el formulario (por ejemplo, con fetch)
        // ...
        warnings.innerHTML = "Sent";
    }
});
