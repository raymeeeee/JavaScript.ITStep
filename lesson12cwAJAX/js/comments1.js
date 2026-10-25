const xhr = new XMLHttpRequest(), completedUl = document.querySelector('.completedUl');
xhr.responseType="json";
function loadCompleted(){
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos?userId=2');

    xhr.onload = () => {
        if (xhr.status !== 200) {
            // выводим ошибку в консоль
            console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            return;
        }
            const response = xhr.response;
            console.log(response);
            showCompleted(response);
    };

    xhr.onerror = () => { // происходит, только когда запрос совсем не получилось выполнить
        console.log(`Ошибка при выполнении запроса`);
    };

    xhr.send();
}
loadCompleted();

function showCompleted(data){
    data.forEach(todo => {
        completedUl.innerHTML += `<li class="${todo.completed?"ok":"no"}">${todo.title}</li>`;
    });
}