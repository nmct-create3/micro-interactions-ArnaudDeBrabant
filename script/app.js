let PasswordToggle, PasswordInput;
let email = {},
  password = {},
  signInButton;
function handleFloatingLabel() {
}

const passwordOptions = ['password', 'text'];

function handlePasswordSwitcher() {
    var input = document.querySelector('.js-input');
    PasswordToggle.addEventListener('change', function () {
      PasswordInput.type = passwordOptions[+this.checked];
    });
    // PasswordToggle.addEventListener('change', function () {
    //   if (this.checked) {
    //     PasswordInput.type = passwordOptions[+this.checked];
    //   } else {
    //     PasswordInput.type = passwordOptions[+this.checked];
    //   }
    // });
}

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const isValidPassword = function (password) {
  if (password.length < 4) {
    return false;
  }
};

const checkInputPassword = function (event) {
    if (this.value.length < 2|| this.value.length <=4) {
        email.input.removeEventListner('input', checkInputPassword);
    }
};


function getElements() {
        PasswordInput = document.querySelector('.c-input--password-with-toggle');
        PasswordToggle = document.querySelector('.js-password-toggle');
}

function getDOMElements() {
    email.Errormessage = document.querySelector('.js-email-error');
    email.field = document.querySelector('.js-email-field');
    email.input = document.querySelector('.js-email-input');

    password.Errormessage = document.querySelector('.js-password-error');
    password.field = document.querySelector('.js-password-field');
    password.input = document.querySelector('.js-password-input');

    signInButton = document.querySelector('.js-sign-in-button');

}

function enableListeners() {
    email.input.addEventListener('blur', (event) => {
        if (!isValidEmailAddress(event.target.value)) {
            email.field.classList.add('has-error');
            email.Errormessage.innerHTML = 'Invalid emailaddress';
            console.log('email is not valid');
        }
    });

    email.input.addEventListener('blur', (event) => {
        if (isEmpty(event.target.value)) {
            email.field.classList.add('has-error');
            email.Errormessage.innerHTML = 'This field is required';
            console.log('email is not valid');
        }
    });
    email.input.addEventListener('input', (event) => {
        if (isValidEmailAddress(event.target.value)) {
            email.field.classList.remove('has-error');
            email.Errormessage.innerHTML = '';
        }
    });


}
function enableListeners2() {
    password.input.addEventListener('blur', (event) => {
        if (!isValidPassword(event.target.value)) {
            password.field.classList.add('has-error');
            password.Errormessage.innerHTML = 'Invalid password';
            console.log('password is not valid');
        }
    });

    password.input.addEventListener('input', (event) => {
        if (isValidPassword(event.target.value)) {
            password.field.classList.remove('has-error');
            password.Errormessage.innerHTML = '';
        }
    }); 
}



document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    getElements();
    handleFloatingLabel();
    handlePasswordSwitcher();
    getDOMElements();
    enableListeners();
    enableListeners2();
});
