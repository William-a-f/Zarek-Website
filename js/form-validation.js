// validacion de formulario
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
	
	let warnings = ""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
	if(nombre.value.length <1){
		warnings += `Please write your name. <br>`
		entrar = true
	}
	console.log(regexEmail.test(email.value));
	if(!regexEmail.test(email.value)){
		warnings += `Invalid e-mail address. <br>`
		entrar = true
	}
	if(message.value.length <5){
		warnings += `You haven’t written a message, please check and try again. <br>`
		entrar = true
	}
	if(entrar){
		e.preventDefault()
		parrafo.innerHTML = warnings
	}
	else{
		parrafo.innerHTML = "Sent"
	}
});