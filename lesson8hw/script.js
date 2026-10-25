//1

let haschildrenS = document.getElementsByClassName("has-children")


let menu = document.getElementsByClassName("menu")[0];

for (let element of menu.children) {
    element.onclick = function(){

        if (element.classList == "has-children") {
            [...haschildrenS].forEach(elem => elem.lastElementChild.style.display = "none")

            if (element.lastElementChild.style.display == "none"){
                element.lastElementChild.style.display = "block"
            }
            else{
                element.lastElementChild.style.display = "none"
            }
        }
        else {
            [...haschildrenS].forEach(elem => elem.lastElementChild.style.display = "none")
        }
        

    }
    
}


//2

let like = document.getElementById("like");

like.onclick = function(){

    let count = parseInt(like.lastElementChild.textContent);
    like.lastElementChild.textContent = ++count;

}


//3

let spoilerHeaders = document.getElementsByClassName("spoiler-header");

for (let spoilerHeader of spoilerHeaders) {
    spoilerHeader.onclick = function(){

        [...spoilerHeaders].forEach(elem => elem.classList.remove("active"))

        spoilerHeader.classList.add("active")

    }
    
}
