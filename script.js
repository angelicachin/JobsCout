const form = document.getElementById('form')
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confpass = document.getElementById('confpass');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confpassValue = confpass.value.trim();

    if(firstnameValue === ''){
        setError(firstname, 'First Name is required');
    }else{
        setSuccess(firstname);
    }

    if(lastnameValue === ''){
        setError(lastname, 'Last Name is required');
    }else{
        setSuccess(lastname);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    }else if(!email.endsWith('@gmail.com'){
        setError(email, 'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(password === ''){
        setError(password, 'Password is required');
    }else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 character');
    }else{
        setSuccess(password);
    }
   
    if(confpass === ''){
        setError(confpass, 'Please confirm your password');
    }else if(confpassValue != passwordValue){
        setError(confpass, "Password doesn't match");
    }else{
        setSuccess(password);
    }

}