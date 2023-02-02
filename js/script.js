const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile"); 

menuBtn.addEventListener("click", ()  => {
    menuMobile.classList.toggle("menu--open");
});

// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

//scroll
const elemArrow = document.querySelector('#scroll')
const body = document.body
const html = document.documentElement

const height = Math.max(
    body.scrollHeight, 
    body.offsetHeight, 
    html.clientHeight, 
    html.scrollHeight, 
    html.offsetHeight 
)
elemArrow.addEventListener('click', () => window.scrollTo({
    top: height,
    behavior: 'smooth',
})) 

// maps
ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [57.86605800220326,39.510301590144856],
            zoom: 17
        });
    }
