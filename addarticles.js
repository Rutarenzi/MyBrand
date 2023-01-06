const formarticle= document.getElementById('formarticles');
formarticle.addEventListener('submit',(e)=>{
    e.preventDefault();
    save();
    
});

function save(){

        var articleList =JSON.parse(localStorage.getItem('articles')) ?? [];
        var id;
        articleList.length != 0 ? articleList.findLast((art) => id = art.id ) : id = 0;
        
        var inputImg = document.getElementById('photo').files[0];
        var upload = "";
        var reader =new FileReader(); 
        
        reader.addEventListener('load',function(){
            upload =this.result;
            
        });
      reader.readAsDataURL(document.getElementById('photo').files[0]);
        if(document.getElementById('id').value){
             articleList.forEach((value)=>{
             if(document.getElementById('id').value == value.id){
                value.photo = inputImg.name,
               value.title = document.getElementById('title').value,
               value.author = document.getElementById('author').value,
               value.story =document.getElementById('editor').value 
             }
           });
           document.getElementById('id').value= ' ';
        }else{
        var article = {
            id        : id+1, 
            photo: inputImg.name,
            title      : document.getElementById('title').value, 
            author      : document.getElementById('author').value, 
            story   : tinymce.get("editor").getContent(), 
            comment: [],
            likes: 0,
            createdDate: Date(),
        };
       
         articleList.push(article);
    }
    localStorage.setItem('articles', JSON.stringify(articleList));
    alert("article saved successfully");
    
    }


















































// const former = document.getElementById('formComment');
// var Diver = document.querySelector('.comer');
// var commentArray= JSON.parse(localStorage.getItem("comments")) ||[];

// // function to add
//  const addComment =(name,comment,email)=>{
//     commentArray.push({
//         name,
//         comment,
//         email
//     });
//     localStorage.setItem('comments',JSON.stringify(commentArray));
//     return {name,comment};
//  };
//  // end of function to add

// const createComment=({ name,comment})=>{
    
//     const ComDiv =document.createElement('div');
//     const ComName=document.createElement('h3');
//     const ComDescr=document.createElement('p');
//     const liker =document.createElement('span');
//     ComDiv.classList.add('com');
//     ComName.innerText=name;
//     ComDescr.innerText=comment; 
//     liker.innerHTML=" 0 likes";

//      ComDiv.append(ComName,ComDescr,liker);
//      Diver.append(ComDiv);
// }

// commentArray.forEach(createComment)
// former.onsubmit=e=>{
//     const nameInput = former['commenter'];
//     const email = former['EmailCommenter'];
//     const comment = former['smsCommenterz'];
//     e.preventDefault()
//     const newComment =addComment(
//      nameInput.value,
//      comment.value,
//      email.value   
//     );
//     createComment(newComment);
//     document.getElementById('comamount').innerHTML=commentArray.length;
// };
// document.getElementById('comamount').innerHTML=commentArray.length;






        
// // all staff related to the articles

// //  // # 1.Adder article 
// const formarticle= document.getElementById('formarticles');
// var trContainer = document.getElementById('postList');
// const ArticleArray = JSON.parse(localStorage.getItem("articles")) ||[];

// //  function to add
// const addArticle = (oneTitle,writer,story)=>{
//     ArticleArray.push({
//         code:Math.floor(Math.random() * 100),
//         oneTitle,
//         writer,
//         story,
//         like:0,
//         comment:[],
//         CreatedDate:Date(),
//     });
//     localStorage.setItem("articles",JSON.stringify(ArticleArray));
//     return {code,oneTitle,writer,story,like,CreatedDate};
// }
// ArticleArray.forEach(createArticle);

// const createArticle=({code,oneTitle,writer,like,CreatedDate})=>{
//     const row = document.createElement('tr');
//      row.innerHTML =`
//        <td>${code}</td>
//        <td>${oneTitle}</td>
//        <td>${like}</td>
//        <td> ${writer}</td>
//        <td>${CreatedDate}</td>
//        <td><a href="#" class="vip"><i class="fas fa-edit" style="margin-left: 2px; font-size: 20px;color: rgba(4, 194, 201,0.5);"></i></a><a href="#"><i class="fas fa-trash" style="margin-left: 2px; font-size: 20px;color: red; cursor: pointer;"></i></a></td>
//     `;
//    trContainer.append(row);
// }



// formarticle.onsubmit=e=>{
//     const  header = formarticle['header'];
//     const author =formarticle['author'];
//     const editor =formarticle['editor']; 
//      e.preventDefault()
//     const newArticle =addArticle(
//         header.value,
//         author.value,
//         editor.value    
//     );
//     createComment(newArticle);
   
// };

// // delete article
