// const header = document.querySelector('header');

// window.addEventListener("scroll", function(){
//     header.classList.toggle("sticky", window.scrollY > 80)
// });

// let menu = document.querySelector('#menu-icon');
// let navlist = document.querySelector('.navlist');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navlist.classList.toggle('open');
// }


document.getElementById('form').addEventListener('submit', function (e){
    e.preventDefault();
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confpass = document.getElementById('confpass').value;

    if(firstname === ''){
        document.getElementById('error').innerHTML = "First name is required and can't be empty";
    }else if(firstname.length < 3){
        document.getElementById('error').innerHTML = 'First name length is must be more than 2';
    }else{
        document.getElementById('error').innerHTML = '';
    }

    if(lastname === ''){
        document.getElementById('error2').innerHTML = "Last name is required and can't be empty";
    }else if(lastname < 2){
        document.getElementById('error2').innerHTML = 'Last name length is must be more than 2';
    }else{
        document.getElementById('error2').innerHTML = '';
    }

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

    if(confpass === ''){
        document.getElementById('error5').innerHTML = 'Please confirm your password';
    }else if(confpass != password){
        document.getElementById('error5').innerHTML = "Password doesn't match";
    }else{
        document.getElementById('error5').innerHTML = '';
    }

});
