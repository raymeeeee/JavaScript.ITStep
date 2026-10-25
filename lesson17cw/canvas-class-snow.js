let canvas = document.getElementById('blocks'),
ctx = canvas.getContext('2d'),
cw = canvas.width, ch = canvas.height, 
loopId;

class Circle {
 constructor(x = 0, y = 0, radius = 50, fillColor = '#cde') {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.height = radius;
  this.fillColor = fillColor;
  this.velocityVal = Math.round(Math.random() * 5 + .5);
 }
draw(context) {
  context.beginPath();
  context.fillStyle = this.fillColor;
  context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  context.fill();
 }
 get velocity() { return this.velocityVal;  }
set velocity(velocityVal) { this.velocity = velocityVal || this.velocityVal;  }

 animate(context, canvasHeight) {
  this.y > this.height + canvasHeight ? this.y = -this.height :
  this.y += this.velocity;
  this.draw(context);
 }
}

// let c1 = new Circle(60, 100, 25,'rgb(228,228, 228, .5)');
// c1.draw(ctx)

let snowArray = [];

let randomSize = (size) => Math.round(Math.random() * size + 2);

function hexToRGB(hex, alpha) {
 let r = parseInt(hex.slice(1, 3), 16),
  g = parseInt(hex.slice(3, 5), 16),
  b = parseInt(hex.slice(5, 7), 16);
return alpha ? "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"  :
 "rgb(" + r + ", " + g + ", " + b + ")";
}
let roundAlpha = () => Math.ceil((Math.random() + .1) * 10) / 10;

for (let i = 0; i < 50; i++) { 
  snowArray.push(new Circle(randomSize(cw), randomSize(ch), randomSize(10), hexToRGB('#ffffff', roundAlpha() )));
   snowArray[i].draw(ctx);
}
// console.log(snowArray)

function loop() {

 loopId = window.requestAnimationFrame(loop);

 ctx.clearRect(0, 0, cw, ch);

 for (snow of snowArray) {
  snow.animate(ctx, ch);
 }
}

window.onload = canvas.ondblclick = loop;
canvas.onclick = function() {
 window.cancelAnimationFrame(loopId)
}