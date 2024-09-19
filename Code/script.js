let menu = document.querySelector('#bar');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navlist.classList.remove('active');
}
