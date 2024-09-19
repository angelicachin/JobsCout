document.getElementById('form').addEventListener('submit', function (e){
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email === ''){
        document.getElementById('error3').innerHTML =  "Email is required and can't be empty";
    }else if(!email.endsWith('@gmail.com')){
        document.getElementById('error3').innerHTML = 'Provide a valid email address and must end with @gmail.com';
    }else{
        document.getElementById('error3').innerHTML = '';
    }

    if(password === ''){
        document.getElementById('error4').innerHTML = "Password is required and can't be empty";
    }else if(password.length < 8){
        document.getElementById('error4').innerHTML = 'Password must be at least 8 character';
    }else{
        document.getElementById('error4').innerHTML = '';
    }


    if(document.getElementById('error3').innerHTML == ''){
        if(document.getElementById('error4').innerHTML == ''){
            window.location.href = 'companypage.html';
        }
    }
});