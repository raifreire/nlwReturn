const nav = document.querySelector('nav');

nav.onscroll = navigator();

function navigator(){
    nav.classList.add('scroll');
}