
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
});
var swiper = new Swiper(".slide-content",{
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWidthBlack: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,  
    },

navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
},
breakpoints:{
    0:{
        slidesPerView: 1,
    },
    782: {
        slidesPerView: 2,

    },
    950:{
        slidesPerView: 3,
    },
    1200:{
        slidesPerView: 4,
    }
}
});
