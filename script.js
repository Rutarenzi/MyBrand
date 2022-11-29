function openSider(){
    document.getElementById('naver2').style.display="block";
};
function validator(){
  const  x = document.getElementById('phonenumber');
   const y = document.getElementById('former');
   const z=document.getElementById('emailer');
   const w=document.getElementById('texter');
    y.addEventListener('submit',(e)=>{
       
        if(!(z.value).includes("@") || !((z.value).includes('.'))){
            e.preventDefault();
            document.getElementById('emailerror').innerHTML="please Enter valid email"; 
        }
        if(z.value =="")
        { 
            e.preventDefault();
            document.getElementById('emailerror').innerHTML="Please Email is required";
        };
        if( isNaN(x.value) == 1){
            e.preventDefault();
            document.getElementById('numberror').innerHTML="please Enter only Number";
        }else if( x.value === ""){
            e.preventDefault();
            document.getElementById('numberror').innerHTML="please phone number is required";
        } else if( w.value === ""){
            
            document.getElementById('numberror').innerHTML="NO EMPTY";
        }else{
            document.getElementById('numberror').innerHTML="";
        }
       
       
    });
}
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
