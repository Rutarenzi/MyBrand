function removeData(id){
   
    articleList = JSON.parse(localStorage.getItem('articles')) ?? []

    articleList = articleList.filter(function(value){ 
        return value.id != id; 
    });
    window.location.reload();
    localStorage.setItem('articles', JSON.stringify(articleList))
    allblog();
    
}