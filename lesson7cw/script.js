const body = document.body

const container = body.firstElementChild
console.log(container.children)
const lastDiv = container.lastElementChild
console.log(lastDiv)

//header.textContent = "Lesson 7. DOM in Js" // if more than one objects with same id this method won`t work

document.getElementById("header").innerHTML = "Lesson 7. DOM in Js"

console.log(container.children[1].getElementsByTagName("div"))


const cards = document.getElementsByClassName("card");
for(let oneCard of cards) {
    //oneCard.firstElementChild.firstElementChild.className += " hover-img";
    oneCard.firstElementChild.firstElementChild.classList.add("hover-img");
}

// cardTextP.forEach(paragraph => {
//     paragraph.style.cssText = 'text-align:right; font-weight: bold; border: 1px solid orange';
//   })

let links = document.links;
console.log(links);
[...links].forEach(link=>{
    console.log(link);
    if (!link.matches(".more")){
        link.href="https://dom-optiki.ua/ru/solncezaschitnye-ochki"
        //link.target = "_blank";
        link.setAttribute("target", "_blank")
        console.log(link)
    }
});

let cardImgDivs = document.querySelectorAll('.card-img');
cardImgDivs.forEach(item => {
    let rating = item.dataset.rating;
    console.log(rating)
    let div = document.createElement('div');
    div.className = 'rating';
    for(let i=0; i<5; i++){
        let span = document.createElement('span');
        span.className = i<rating ? 'star': 'star-outline';
        div.appendChild(span);
    }
    item.nextElementSibling.append(div);
});

