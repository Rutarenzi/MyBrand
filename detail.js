function find(id){
   
    articleList = JSON.parse(localStorage.getItem('articles')) ?? [];

    articleList.forEach(function(value){
        if(value.id == id){
       
            document.getElementById('id').value = value.id
            document.getElementById('name').value = value.name
            document.getElementById('age').value = value.age
            document.getElementById('address').value = value.address
            document.getElementById('phone').value = value.phone
        }
        // var editit={
        //     title:value.title,
        //     author:value.author,
        //     story:value.story, 
        // }  
        // };
        // p = sessionStorage.getItem('editready') ;
        // if(p ===null){
            
        //     sessionStorage.setItem('editready', JSON.stringify(editit));
        //     console.log('fuck');
        // }else{
        //     sessionStorage.clear();
        //     sessionStorage.setItem('editready', JSON.stringify(editit));
        //    console.log('fuck too');
        // }        
    });
   
}