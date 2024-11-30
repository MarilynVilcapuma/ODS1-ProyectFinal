
//Validación para formulario

const form = document.getElementById("form");
const username = document.getElementById("nombres");
const lastname = document.getElementById("apellidos");
const email = document.getElementById("correo");
//cosnt lastname and phone
const direccion = document.getElementById("direccion");
const phone = document.getElementById("telefono");
const title = document.querySelector(".title");
const button = document.querySelector("button");
const message = document.querySelector(".comentario");
const donation = document.getElementById("seleccion_objetos");

//! Event listeners for real-time input validation
username.addEventListener("input", validateUsername);
lastname.addEventListener("input", validateLastname);
direccion.addEventListener("input", validatedireccion);
phone.addEventListener("input", validatePhone);
email.addEventListener("input", validateEmail);
donation.addEventListener("change", validateDonation);

//! Event listener for form submission

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevenir envío estándar

  if (
    validateUsername() &&
    validateLastname() &&
    validatedireccion()&&
    validatePhone() &&
    validateEmail() &&
    validateDonation()
  ) {
    // Recoge los datos del formulario
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          submittedForm();
        } else {
          console.error("Error en el envío de datos");
        }
      })
      .catch((error) => console.error("Error:", error));
  }
});


//! Validation functions
function validateUsername() {
  const usernameValue = username.value.trim();
  const usernameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
  if (usernameValue === "") {
    setErrorFor(username, "Nombre no puede estar en blanco");
    return false;
  } else if (!usernameRegex.test(usernameValue)) {
    setErrorFor(username, "Nombre solo debe contener letras");
    return false;
  }
  else {
    setSuccessFor(username);
    return true;
  }
}

function validateLastname() {
  const lastnameValue = lastname.value.trim();
  const lastnameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios

  if (lastnameValue === "") {
    setErrorFor(lastname, "Apellido no puede estar en blanco");
    return false;
  } else if (!lastnameRegex.test(lastnameValue)) {
    setErrorFor(lastname, "Apellido solo debe contener letras");
    return false;
  } else {
    setSuccessFor(lastname);
    return true;
  }
}

function validatedireccion() {
  const direccionValue = direccion.value.trim();
  const direccionRegex = /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ#.,\-\s]+$/; // Permitir letras, números, espacios y caracteres comunes

  if (direccionValue === "") {
    setErrorFor(direccion, "La dirección no puede estar en blanco");
    return false;
  } else if (!direccionRegex.test(direccionValue)) {
    setErrorFor(
      direccion,
      "La dirección solo puede contener letras, números, espacios y los caracteres: #, ., , o -"
    );
    return false;
  } else {
    setSuccessFor(direccion);
    return true;
  }
}


function validatePhone() {
  const phoneValue = phone.value.trim();
  const phoneRegex = /^9\d{8}$/;
  if (phoneValue === "") {
    setErrorFor(phone, "Celular no puede estar en blanco");
    return false;
  } else if (!phoneRegex.test(phoneValue)) {
    setErrorFor(phone, "Celular debe tener 9 dígitos");
    return false;
  } else {
    setSuccessFor(phone);
    return true;
  }
}


function validateEmail() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "Email no puede estar en blanco");
    return false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email no es valido");
    return false;
  } else {
    setSuccessFor(email);
    return true;
  }
}


//Validación de la selección de donación
function validateDonation() {
  const donationValue = donation.value.trim();

  if (donationValue === "") {
    setErrorFor(donation, "Por favor selecciona un monto de donación");
    return false;
  } else {
    setSuccessFor(donation);
    return true;
  }
}

//! Helper functions
function setErrorFor(input, message) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector("small");

  small.innerText = message;
  inputControl.classList.remove("success");
  inputControl.classList.add("error");
  inputControl.style.paddingBottom = "20px";
  inputControl.style.marginBottom = "14px";
}

function setSuccessFor(input) {
  const inputControl = input.parentElement;

  inputControl.classList.remove("error");
  inputControl.classList.add("success");
  inputControl.style.paddingBottom = "0";
  inputControl.style.marginBottom = "20px";
}

//! Checking email
function isEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

// https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/

// Accion que declara direcciones a la pag principal
function submittedForm() {
  title.classList.add("hidden");
  form.classList.add("hidden");
  message.classList.remove("hidden");

  // Redirigi
  setTimeout(() => {
    window.location.href = '/index.html';
  }, 2500);
}

