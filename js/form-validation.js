// validacion de formulario
const form = document.getElementById('form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const dateInput = document.getElementById('date');
        const messageInput = document.getElementById('message');
        const warnings = document.getElementById('warnings');
        const submitButton = document.getElementById('submit-button'); // Obtener el botón

        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar el envío predeterminado del formulario

            let errorMessages = [];

            if (nameInput.value.trim() === '') {
                errorMessages.push('Please enter your name.');
            } else if (nameInput.value.toLowerCase().endsWith('bic')) {
                errorMessages.push('Please enter a complete and valid name.');
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

            if (errorMessages.length === 0) {
                submitButton.disabled = true; // Deshabilitar el botón para evitar envíos múltiples
                warnings.innerHTML = 'Sending...'; // Mostrar mensaje de envío

                fetch(form.action, { //Usar la url del action del form para mejor funcionamiento
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
                  form.reset(); // Limpiar el formulario después del envío exitoso
                submitButton.disabled = false;//Volver habilitar el boton
                })
                .catch(error => {
                    console.error('Error:', error);
                    warnings.innerHTML = 'There was an error sending your message. Please try again later.';
                    submitButton.disabled = false;
                });
            }
        });