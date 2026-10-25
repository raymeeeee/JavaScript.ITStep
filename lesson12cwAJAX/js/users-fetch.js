let todoList = document.querySelector('.user-info');
function getUser(){
    fetch('https://api.github.com/users')
    .then( response => response.json())
    .then( data => showUser(data))
    .catch(err => console.error(err))
}

function showUser(data){
    let dataStr ='';
    data.forEach(todo => {
        dataStr+= `<div class="col-md-4 mb-3">
<div class="card shadow">
<div class="card-header text-white bg-success">
<h3 class="card-title text-center">${todo.login}</h3>
</div>
<div class="card-img"><img src="${todo.avatar_url}" class="img-fluid"></div>
<div class="card-body">           
<p class="card-text"><a href="${todo.html_url}" target="_blank">See files</a></p>
</div>
</div>
</div>`;
    });
    todoList.innerHTML = dataStr;
    console.log(data)
}


getUser()