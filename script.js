function validator(){
  const  x = document.getElementById('phonenumber');
   const y = document.getElementById('former');
   const z=document.getElementById('emailer');
   const w=document.getElementById('texter');
    y.addEventListener('submit',(e)=>{
       
        if(!(z.value).includes("@") || !((z.value).includes('.'))){
            e.preventDefault();
            document.getElementById('emailerror').innerHTML="please Enter valid email"; 
        } else if(z.value =="")
        { 
            e.preventDefault();
            document.getElementById('emailerror').innerHTML="Please Email is required";
        }else{
            document.getElementById('emailerror').innerHTML="";
        };
         if( x.value === ""){
            e.preventDefault();
            document.getElementById('numberror').innerHTML="please  your name is  required";
        } else
        {
            document.getElementById('numberror').innerHTML="";
        } 
        if( w.value === ""){
            e.preventDefault();
            document.getElementById('texterror').style.color="rgba(255, 0, 25,0.5)";
        }else{
            document.getElementById('texterror').style.color="#1e1e1e";
        }
       
       
    });
}


var swiper = new Swiper(".slide-content",{
    slidesPerView: 5,
    spaceBetween: 10,
    // slidesPerGroup: 3,
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



function openSider(){
    document.getElementById('naver2').style.display="block";
};
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
});
