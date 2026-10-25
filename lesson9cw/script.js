// let btns=document.getElementsByClassName('btn');
// for (let b of btns) {
//     b.onclick=function(){
//         document.body.style.backgroundColor=b.style.backgroundColor;
//     }
// }

let ul = document.getElementById('colors');
ul.onclick = function(event){
    if(event.target.tagName = 'LI'){
        document.body.style.backgroundColor=event.target.style.backgroundColor;
    }
}

document.onkeyup = keyColors;

function keyColors(evt){
    switch( evt.keyCode){
        case 49:
        case 97:document.body.style.backgroundColor = '#000'; break;
        case 50:
        case 98:document.body.style.backgroundColor = '#333'; break;
        case 51:
        case 99:document.body.style.backgroundColor = '#666'; break;
        case 52:
        case 100:document.body.style.backgroundColor = '#999'; break;
        case 53:
        case 101:document.body.style.backgroundColor = '#f00'; break;
        default: document.body.style.backgroundColor = '#fff';
    }

}