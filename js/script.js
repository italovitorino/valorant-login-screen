const inputs = document.querySelectorAll('.login__input');
const button = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling
    span.classList.add('active');
}

const noFocus = ({ target }) => {
    if (target.value == '') {
        const span = target.previousElementSibling
        span.classList.remove('active');
    }
}

const handleInput = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 1) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', noFocus));
inputs.forEach((input) => input.addEventListener('input', handleInput));