// console.log(document.forms[3]);
// console.log(document.forms["chooseBg"]);
// console.log(document.chooseBg);
// console.log(document.getElementById("fio"));
// document.querySelector("form[name = 'userForm']").style.backgroundColor='lightblue';
// userForm.style.backgroundColor='lightblue';
// console.log(userForm.elements);
// console.log(document.forms[0].elements[0]);
// console.log(document.forms[0][0]);
// console.log(document.forms[0]['login'])
// console.log(userForm['login'])
// console.log(userForm[0]);
// console.log(userForm.login);

// console.log(fio['all']);
// console.log(document.getElementsById("all"));
// document.fio.all.checked=true;
// document.getElementById("all").disabled=true
// //document.getElementById("all").checked=false

// console.log(document.getElementsByName("bg"));
// for(let btn of document.getElementById("bg")) {
// btn.disabled=true
// }
// console.log(document.forms[0].elements[2].value);
// console.log(document.forms[0][0].focus());


let login=document.forms[0].login;
let pass=document.forms[0].pass;
let info=document.forms[0].info;
document.forms[0].check.onclick=function(){
    if(login.value.length<4){
        alert("login length < 4");
        login.focus();
        return 0;
    }
    if(pass.value.length<4){
        alert("pass length < 4");
        pass.focus();
        return 0;
    }
    info.value=`login: ${login.value}\npass: ${pass.value}`
}

let input=document.getElementById("myInput");
let outputText=document.getElementById("outputText");
let s=input.nextElementSibling;
input.oninput=function(){
    if(input.value.length==20){
        outputText.innerHTML+=input.value+" ";
        input.value='';
    }
    s.innerHTML=`Залишилось ${20-input.value.length}`

}





let hidepass = document.getElementById("hidePass");
let eye = hidepass.nextElementSibling;
eye.onclick = function () {
    if(hidepass.type == "password") {
        hidepass.type = "text";
        eye.classList.add('hide');
    }
    else {
        hidepass.type = "password";
        eye.classList.remove('hide');
    }
    
}

let check = document.getElementById("agree");
let continueBtn = document.getElementsByName("continueBtn")[0];
check.onclick = function () {
    if(check.checked) {
        continueBtn.disabled = false;
    }
    else {
        continueBtn.disabled = true;
    }
}

check.onclick = function () {
    continueBtn.disabled = !check.checked;
}


//buttons
let formChildren=Array.from(document.getElementById("fio").elements).splice(1);
let selectAll = document.getElementById("all");
let labelSelect = document.getElementById("chooseAll");

//console.log(formChildren)

selectAll.onclick = function() {

    if (selectAll.checked == true) {
        labelSelect.textContent = "Снять выделение";
        formChildren.forEach((elem) => elem.checked = true)
    }
    else {
        labelSelect.textContent = "Выделить всех";
        formChildren.forEach((elem) => elem.checked = false)
    }
}

//bg
let buttons=Array.from(document.getElementsByName("bg"));
let body = document.body

buttons.forEach(button => button.onclick = function() {body.style.backgroundImage= `url(${button.value})`})


