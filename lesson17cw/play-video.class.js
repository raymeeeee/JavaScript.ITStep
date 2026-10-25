let video = document.querySelector('video'),
    btns = document.querySelectorAll('button'),
    canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d');
let canvasWidth = canvas.clientWidth;
let canvasHeight = canvas.clientHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
console.log(canvas.width, canvas.height);

btns.forEach(btn => {
    btn.onclick = switchSrc;
})
function switchSrc(){
     let dataSrc = this.dataset.src;
     console.log(dataSrc);
     video.src=dataSrc;
     video.load();
     video.play();
}
video.onplay = function(){
    if(video.paused || video.ended) return false;
    draw(this, context, canvasWidth, canvasHeight);
}
function draw (video, canvas, width, height){
    canvas.drawImage(video, 0,0, width, height);
    setTimeout(draw, 20, video, canvas, width, height);
}