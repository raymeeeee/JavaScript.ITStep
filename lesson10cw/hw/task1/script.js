
let buttons=Array.from(document.getElementsByName("chooseSize"));
let photo = document.getElementById("photo")
buttons.forEach(button => button.onclick = function() {console.log(button.value); console.log(photo.width); photo.width = `${button.value}`})
