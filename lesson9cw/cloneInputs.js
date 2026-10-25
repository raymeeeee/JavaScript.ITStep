let formSubmit = document.getElementById('formSubmit');
let plusBtns = document.getElementsByClassName("plus-btn");

 document.body.addEventListener('click', function(e){
    if(e.target.className=='plus-btn'){
        let newFields = e.target.closest('p').cloneNode(true);
        formSubmit.parentElement.before(newFields);
    }
    console.log(plusBtns.length)
 })