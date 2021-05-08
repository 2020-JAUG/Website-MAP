
const formulary = document.getElementById('formulary');
const inputs = document.querySelectorAll('#formulary input');

const expressions = {
	name: /^[a-zA-Z0-9\_\-]{3,16}$/, // Letters, numbers, screenplay and underscore
	lastName: /^[a-zA-ZÀ-ÿ\s]{1,16}$/, // Letters and spaces, can carry accents
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const camps = {
    name: false,
    lastName: false,
    email: false
}

//Function to validate
const validateFormulary = e => {
    switch (e.target.name) {
        case "name":
            validateCamp(expressions.name, e.target, 'name');
        break;
        case "lastName":
            validateCamp(expressions.lastName, e.target, 'lastName');
        break;
        case "email":
            validateCamp(expressions.email, e.target, 'email');
        break;
    }
}

//Function to validate all camps
const validateCamp = (expressions, input, camp) => {
    if(expressions.test(input.value)) {
        document.getElementById(`group__${camp}`).classList.remove('formulary__group-uncorrect');
        document.getElementById(`group__${camp}`).classList.add('formulary__group-correct');
        document.querySelector(`#group__${camp} i`).classList.add('bi-check-circle');
        document.querySelector(`#group__${camp} i`).classList.remove('bi-x-circle');
        document.querySelector(`#group__${camp} .formulary__input-error`).classList.remove('formulary__input-error-activo');
        camps [camp] = true;
    } else {
        document.getElementById(`group__${camp}`).classList.add('formulary__group-uncorrect');
        document.getElementById(`group__${camp}`).classList.remove('formulary__group-correct');
        document.querySelector(`#group__${camp} i`).classList.add('bi-x-circle');
        document.querySelector(`#group__${camp} i`).classList.remove('bi-check-circle');
        document.querySelector(`#group__${camp} .formulary__input-error`).classList.add('formulary__input-error-activo');
        camps [camp] = false;
    }
}

//Select each input to validate them
inputs.forEach((input) => {
    input.addEventListener('keyup', validateFormulary );
    input.addEventListener('blur', validateFormulary ); //For when they are out of input
});

//Validate the fields and reset them
formulary.addEventListener('submit', (e) => {
    e.preventDefault();

    const terms = document.getElementById('terms');
    if(camps.name && camps.lastName && camps.email && terms.checked ) {
      formulary.reset();

      document.getElementById('formulary__message-succes').classList.add('formulary__message-succes-activo');
      setTimeout(() => {
      document.getElementById('formulary__message-succes').classList.remove('formulary__message-succes-activo');}, 3000);

      document.querySelectorAll('.formulary__group-correct').forEach((icono) => {
          icono.classList.remove('formulary__group-correct');

      document.getElementById('formulary__message').classList.remove('formulary__message-activo');

      });
  } else {
      document.getElementById('formulary__message').classList.add('formulary__message-activo');
  }
});