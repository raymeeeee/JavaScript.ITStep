let nLinks = document.getElementsByClassName("nav-link")
for (let nLink of nLinks) {
    nLink.onclick=linkClick
    
}

function linkClick(){
    let s = document.querySelector(".active");
    if (s){s.classList.remove("active")}
    this.classList.add("active")
}

let buttonMenu = document.querySelector(".navbar-toggler")
console.log(buttonMenu.nextElementSibling)

buttonMenu.onclick = function(){this.nextElementSibling.classList.toggle("collapse")}



let panelsHeadings = document.getElementsByClassName("panel-heading")
console.log(panelsHeadings)

for (let heading of panelsHeadings) {
    heading.onclick = function(){
        this.parentElement.classList.toggle("panel-collapsed")
        let chevron = heading.lastElementChild.firstElementChild
        if (chevron.classList.contains("fa-chevron-up")){
            chevron.classList.replace("fa-chevron-up","fa-chevron-down")
        }
        else{
            chevron.classList.replace("fa-chevron-down","fa-chevron-up")
        }

    }
    
}




let groupImage = document.getElementsByClassName('portfolio-link')
let modal = document.getElementById('portfolioModal')
let closeModal = document.querySelectorAll('[data-dismiss]')
for(let link of groupImage){
    link.onclick=OpenModal;
}
function OpenModal (){
    modal.style.display='block'
    document.body.classList.add('modal-open')
    let bigImg = document.getElementsByClassName('big-image')[0]
    bigImg.src=this.dataset.big
    console.log(bigImg)
}
for(closeB of closeModal){
    closeB.onclick=CloseModal;
}
function CloseModal(){
    modal.style.display='none'
    document.body.classList.remove('modal-open')
}

