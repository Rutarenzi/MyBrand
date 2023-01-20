async function removeData(id){
   
    const jwtToken = localStorage.getItem('jwt_token');
    const response = await fetch(`https://my-brand-api-zgjz.onrender.com/api/blogs/${id}`,{
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${jwtToken}`  
        }
       
    });
  console.log(response.status)
  location.reload();
}

// register form

const regForm = document.getElementById('former22');
const zz=document.getElementById('loginEmail2');
const  xx = document.getElementById('passw2');
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
   
    if(response.status == 409){
        console.log("hello man")
        alert('user already exist!please login')
       
    } else if(response.status == 200){
         window.location.href="login.html"
    }
    console.log(response);
}
regForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    register(zz.value, xx.value)
})
