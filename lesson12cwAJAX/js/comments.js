// const xhr = new XMLHttpRequest(), wrapper = document.querySelector('.wrapper');

// xhr.open('GET', 'json/comments.json');

// xhr.onload = () => {
//   if (xhr.status !== 200) {
//     // выводим ошибку в консоль
//     console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`);
//     return;
//   }
//       const response = JSON.parse(xhr.response);
//     console.log(response);
//         showComments(response);
// };

// //срабатывает когда запрос не может быть выполнен (например нет соединения или не правильный URL)
// xhr.onerror = () => { // происходит, только когда запрос совсем не получилось выполнить
//   console.log(`Ошибка при выполнении запроса`);
// };

// xhr.send();

// function showComments(data){
//     let commentsStr='';
//     data.forEach(comment => {
//         commentsStr+=`<div class="comment">
//       <div class="comment-author"><a href="mailto:${comment.email}">${comment.name}</a></div>
//       <div class="comment-text">${comment.body}</div>
//     </div>`;
//     });
//     wrapper.innerHTML = commentsStr;
// } 




const xhr = new XMLHttpRequest(), wrapper = document.querySelector('.wrapper');

function loadComments(postId=null){
    xhr.open('GET', 'json/comments.json');

    xhr.onload = () => {
        if (xhr.status !== 200) {
            // выводим ошибку в консоль
            console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            return;
        }
            const response = JSON.parse(xhr.response);
            console.log(response);
            showComments(response, postId);
    };

    xhr.onerror = () => { // происходит, только когда запрос совсем не получилось выполнить
        console.log(`Ошибка при выполнении запроса`);
    };

    xhr.send();
}
loadComments(1);

function showComments(data, postId){
    let commentsStr='';
    data.forEach(comment => {
        if(postId == null){
            commentsStr+=`<div class="comment">
                <div class="comment-author"><a href="mailto:${comment.email}">${comment.name}</a></div>
                <div class="comment-text">${comment.body}</div>
            </div>`;
        } else if(comment.postId == postId) {
            commentsStr+=`<div class="comment">
                <div class="comment-author"><a href="mailto:${comment.email}">${comment.name}</a></div>
                <div class="comment-text">${comment.body}</div>
            </div>`;
        }
    });
    wrapper.innerHTML = commentsStr;
}

document.querySelectorAll('.top a').forEach(item => item.addEventListener('click', function(){
    let id = this.href.slice(this.href.indexOf('#'+4));
    console.log(id)
    loadComments(id);
}))