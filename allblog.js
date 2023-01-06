function allblog(){
    var articleList = JSON.parse(localStorage.getItem('articles')) ?? [];
    articleList.forEach(function (blog){
       
        var table = document.getElementById('postList')
        
       
        table.innerHTML += `
            <tr>
                <td>${blog.id}</td>
                <td><img src="img/${blog.photo}" width ="45" height="45" style="border-radius: 50%;margin-right: 10px">${blog.title}</td>
                <td>${blog.likes}</td>
                <td>${blog.author}</td>
                <td>${blog.createdDate}</td>
                <td><a href="adder.html?id=${blog.id}"  class="vip"><i class="fas fa-edit" style="margin-left: 2px; font-size: 20px;color: rgba(4, 194, 201,0.5);"></i></a><a href="#" onclick="removeData(${blog.id})"><i class="fas fa-trash" style="margin-left: 2px; font-size: 20px;color: red; cursor: pointer;"></i></a></td>
            </tr>`
    })
}
