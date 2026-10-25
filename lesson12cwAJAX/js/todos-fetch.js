// let todoList = document.getElementById('todoList');
// function getTodos(id){
//     fetch('https://jsonplaceholder.typicode.com/todos?userId='+id)
//     .then( response => response.json())
//     .then( data => showTodos(data))
//     .catch(err => console.error(err))
// }

// getTodos(5);

// function  showTodos(data){
//     let dataStr ='';
//     data.forEach(todo => {
//         dataStr+= `<li class="${todo.completed?"ok":"no"}">${todo.title}</li>`;
//     });
//     todoList.innerHTML = dataStr;
// }


let todoList = document.getElementById('todoList');
/* function getTodos(id){
  fetch('https://jsonplaceholder.typicode.com/todos?userId='+id)
  .then( response => response.json())
  .then( data => showTodos(data))
  .catch(err => console.error(err))
} */
async function getTodos(id){
  let response = await fetch('https://jsonplaceholder.typicode.com/todos?userId='+id)
  let data = await response.json();
  console.log(data);
  showTodos(data);
}
 
getTodos(4);
 
function  showTodos(data){
  let dataStr ='';
  data.forEach(todo => {
    dataStr+= `<li class="${todo.completed?"ok":"no"}">${todo.title}</li>`;
  });
  todoList.innerHTML = dataStr;
}