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
            e.preventDefault();
            document.getElementById('texterror').style.color="#1e1e1e";
        }
        if((z.value).includes("@") && ((z.value).includes('.')) && z.value !== "" && x.value !== "" && w.value !== ""){
            e.preventDefault();
            document.getElementById('popcontainer').style.display = "block";

            async function messager(x,z,w){
                smsObj = {}
                smsObj.name= x;
                smsObj.email =z;
                smsObj.sms = w
                const jwtToken = localStorage.getItem('jwt_token');
                const response = await  fetch("https://my-brand-api-zgjz.onrender.com/api/messages",{
                    method: 'POST',
                    body:JSON.stringify(smsObj),
                    headers: {
                                 'Content-Type': 'application/json',
                                 Authorization: `Bearer ${jwtToken}`
                             }
                });
                const rep = await response.json();
                console.log(rep, +""+"hello");
            }
            messager(x.value, z.value, w.value);
            y.reset();
        }
      
       
    });
  
}


var swiper = new Swiper(".slide-content",{
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 3,
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
function deleter(){
   const x = document.getElementById("popcontainer")
    x.style.display ="none";
}


// display all message to admin side
async function allSms(){
    const jwtToken = localStorage.getItem('jwt_token');
    const smsList = await fetch('https://my-brand-api-zgjz.onrender.com/api/messages',{
        headers: {
            Authorization: `Bearer ${jwtToken}`  
        }
    });
    const smss = await smsList.json();
    smss.forEach(function (message){
        var table = document.getElementById('smsLister')
        
       var r =1;
       
        table.innerHTML += `
            <tr><td style="display: none">${message._id}</td>
                <td id="limiter">${message.sms}</td>
                <td>${message.email}</td>
                <td >${message.name}</td>
                <td><a href="#" onclick="togglePopup('${message._id}')"  class="vip"><i <i class="fas fa-eye"style="margin-left: 2px; font-size: 20px;color: rgba(4, 194, 201,0.5);"></i></a></td>
            </tr>`
        
              
    })
}

// register form

const regForm = document.getElementById('former2');
const zz=document.getElementById('loginEmail');
const  xx = document.getElementById('passw');
async function register(x,y){
    user = {}
    user.email= x;
    user.password =y;
    
    const response = await  fetch("https://my-brand-api-zgjz.onrender.com/api/auth/signup",{
        method: 'POST',
        body:JSON.stringify(user),
        headers: {
                     'Content-Type': 'application/json'
                 }
    });
    const rep = await response.json();
    if(response.status == 409){
        console.log("hello man")
        alert("user already exiswt");
    } else if(response.status == 200){
         alert("user created successfully")
         window.location.href="login.html"
    }
    console.log(rep);
}
regForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    register(zz.value, xx.value)
})
