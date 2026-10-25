const xhr = new XMLHttpRequest();
xhr.open('GET', 'poem.txt'); //add true for async //false by default
xhr.send();
xhr.onreadystatechange = function() {
if (xhr.readyState == 4) {

    if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        console.log(xhr)
        test.innerText =  xhr.responseText ; // responseText - текст ответа.
    }
} 
}