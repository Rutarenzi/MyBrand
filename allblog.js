
async function allblog(){
    const articleList = await fetch('https://my-brand-api-zgjz.onrender.com/api/blogs');
    const blogs = await articleList.json();
    blogs.forEach(function (blog){
       
        var table = document.getElementById('postList')
        
       console.log(blog.title)
        table.innerHTML += `
            <tr>
                <td>${blog._id}</td>
                <td><img src="${blog.image.url}" width ="70" height="70" style="border-radius: 50%;margin-right: 10px">${blog.title}</td>
                <td>${blog.likes}</td>
                <td><a href="edit.html?id=${blog._id}" class="vip"><i class="fas fa-edit" style="margin-left: 2px; font-size: 20px;color: rgba(4, 194, 201,0.5);"></i></a><a href="#" onclick="removeData('${blog._id}')"><i class="fas fa-trash" style="margin-left: 2px; font-size: 20px;color: red; cursor: pointer;"></i></a></td>
            </tr>`
    })
}
