
//Get data
const submitform = document.getElementById("submitform");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const message = document.getElementById("message");
// const success = document.getElementById("success");
// const errorNodes = document.(".error");


submitform.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('error');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('error');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = nameInput.value.trim();
    const emailValue = email.value.trim();
    const mobile = mobile.value.trim();

    if(usernameValue === ''){
        setError(nameInput, 'Required');
    }else{
        setSuccess(nameInput);
    }

    if(emailValue === ''){
        setError(email, 'Required');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Provide');
    }else{
        setSuccess(email);
    }
};