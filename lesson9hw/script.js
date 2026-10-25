//1

let textList = document.getElementsByClassName("textList")[0];
let outputText = document.getElementsByClassName("outputText")[0];


textList.onmousedown = function(event){
    if(event.target.tagName == 'LI'){
        text = event.target.textContent.split("")
        text = text.reverse()
        
        outputText.textContent = text.join("")
    }
}

//2

let row = document.getElementsByClassName("row")[0];
choice = row.children[0];
console.log(choice.firstElementChild)

choice.onclick = function(event){

    if(event.target.tagName == 'A'){

        let children = choice.firstElementChild.children;
        [...children].forEach(elem => {
            elem.classList.remove("active")
            elem.firstElementChild.style.backgroundColor = "transparent"
        });
    
    event.target.classList.add("active")
        console.log(`img/${event.target.getAttribute("data-color")}.webp`)
        row.children[1].firstElementChild.src = `img/${event.target.getAttribute("data-color")}.webp` //img/lightgray.webp
        row.children[2].lastElementChild.textContent = event.target.getAttribute("data-price")
        event.target.firstElementChild.style.backgroundColor = event.target.getAttribute("data-color")
    }
}


//3


let circle = document.createElement('img');
circle.src="img/circle.svg"

let cross = document.createElement('img');
cross.src="img/cross.svg"

//let td = document.getElementsByTagName("td");
//td.append(circle);

let game = document.getElementById('game');
console.log(game)

let currentMove = true;

let moves = 0

function restart() {
    let trS = [...game.firstElementChild.children]
    console.log();

    for (let i = 0; i < trS.length; i++) {
        let tr = trS[i];

        let tdS = [...tr.children];

        for (let j = 0; j < tdS.length; j++) {
            let td = tdS[j];
            console.log(td);
            td.innerHTML = ""
        }
        
    }
    moves = 0;
    currentMove = true;
};


game.onclick = function(event){
    //console.log(event.target.children)

    if (event.target.children.length != 0){
        alert("Cell is not empty")
    }
    else if(event.target.tagName == 'TD' && currentMove==true){
        event.target.innerHTML = `<img src="./img/circle.svg" alt="">`;
        currentMove=false;
        moves++;
    }
    else if (event.target.tagName == 'TD' && currentMove==false){
        event.target.innerHTML = `<img src="./img/cross.svg" alt="">`;
        currentMove=true;
        moves++;
    }

    if (moves == 9) {
        alert("Game will be restarted") //почему то алерт выводиться перед картинкой
        setTimeout(restart, 5000)
    }
    
}

