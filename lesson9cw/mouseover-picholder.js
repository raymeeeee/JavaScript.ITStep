let picContainer = document.getElementById('picContainer');

let picHolder = document.getElementById('picHolder');

picContainer.onmouseover = function(event){
    if(event.target.tagName == 'IMG'){
        picHolder.style.display = "block";
        picHolder.style.backgroundImage = `url(${event.target.src})`
    }
    else {
        picHolder.style.display = "none";
    }
}

picContainer.onmouseout = function(event){
    picHolder.style.display = "none";
}