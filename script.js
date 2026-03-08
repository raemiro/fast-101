/* =========================
   VALIDACIÓN DEL FORMULARIO
   ========================= */

const form = document.getElementById('contact-form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const feedback = document.getElementById('form-feedback');

function validarFormulario() {

feedback.textContent = "";
feedback.className = "form-feedback";

const nombre = nombreInput.value.trim();
const email = emailInput.value.trim();
const mensaje = mensajeInput.value.trim();

if(nombre === ""){
mostrarError("Por favor ingresa tu nombre");
nombreInput.focus();
return false;
}

if(email === ""){
mostrarError("Por favor ingresa tu email");
emailInput.focus();
return false;
}

if(!validarEmail(email)){
mostrarError("Por favor ingresa un email válido");
emailInput.focus();
return false;
}

if(mensaje === ""){
mostrarError("Por favor escribe un mensaje");
mensajeInput.focus();
return false;
}

mostrarExito("¡Mensaje enviado correctamente! Gracias " + nombre);
form.reset();
return true;

}

function validarEmail(email){

const arroba = email.indexOf("@");
const punto = email.lastIndexOf(".");

return arroba > 0 && punto > arroba + 1 && punto < email.length - 1;

}

function mostrarError(mensaje){
feedback.textContent = mensaje;
feedback.className = "form-feedback error";
}

function mostrarExito(mensaje){
feedback.textContent = mensaje;
feedback.className = "form-feedback success";
}

form.addEventListener("submit", function(e){

e.preventDefault();
validarFormulario();

});


/* =========================
   MENU HAMBURGUESA
   ========================= */

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

function toggleMenu(){

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){
navToggle.textContent = "✕";
}else{
navToggle.textContent = "☰";
}

}

navToggle.addEventListener("click", toggleMenu);


/* cerrar menú al hacer clic en un link */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(link){

link.addEventListener("click", function(){

navLinks.classList.remove("active");
navToggle.textContent = "☰";

});

});