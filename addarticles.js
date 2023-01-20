const formarticle= document.getElementById('formarticles');
const formarticleEdit = document.getElementById('formarticles20');
async function save(){

        document.getElementById('popcontainer2').style.display= "block"
        const formData = new FormData();
        formData.append("image",document.getElementById('photo').files[0]);
        formData.append("title",document.getElementById('title').value,);
        formData.append("content",tinymce.get("editor").getContent(),)

        const jwtToken = localStorage.getItem('jwt_token');
        
        const response = await fetch("https://my-brand-api-zgjz.onrender.com/api/blogs",{
                      method: 'POST',
                      body:formData,
                      headers: {
                                   Authorization: `Bearer ${jwtToken}`  
                               }
                                 });
         const rep = await response.json();
         if(response.status ==200){
          document.getElementById('popcontainer2').style.display= "none"
          window.location.href='allpost.html';
         }
         console.log(rep);
   
    }


   
  
    formarticle.addEventListener('submit',async (e)=>{
        e.preventDefault();
        save(); 
    });
 