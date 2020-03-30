//variables 
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const btnEnviar = document.getElementById('enviar');
const formularEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
//Event Listeners 

eventListeners();

function eventListeners() {

    document.addEventListener('DOMContentLoaded', startApp);

    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    resetBtn.addEventListener('click', resetFormular);

    btnEnviar.addEventListener('click', sendEmail);
}

//functions

function startApp() {

    btnEnviar.disabled = true;
}

function validateField() {

    validateLength(this);

    if (this.type === 'email') {

        validateEmail(this);
    }

    let errors = document.querySelectorAll('.error');

    if (email.value !== '' && subject.value !== '' && message.value !== '') {

        if (errors.length === 0) {

            btnEnviar.disabled = false;

        }
    }
}

function resetFormular(e) {
    formularEnviar.reset();
    e.preventDefault();
}

function sendEmail(e) {

    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    const sent = document.createElement('img');
    sent.src = 'img/mail.gif';
    sent.style.display = 'block';

    setTimeout(function() {
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(sent);
        setTimeout(function() {
            sent.remove();
            formularEnviar.reset();

        }, 4000);
    }, 2000);

    e.preventDefault();

}

function validateLength(field) {

    console.log(field.value.length);

    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(field) {
    const message = field.value;
    if (message.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');

    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}