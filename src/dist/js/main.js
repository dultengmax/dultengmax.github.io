// mavbar fixed

window.onscroll =function () {
    const header= document.querySelector('header');
    const navfix= header.offsetTop;
    if(window.pageYOffset > navfix){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');

    }
    
}

// hamburger
const navmenu=document.querySelector('#nav-menu');
const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden')
})