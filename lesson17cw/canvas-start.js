const canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
context.fillStyle = "#ff0";
context.lineWidth = 5;
context.strokeStyle = "#f00";
context.strokeRect(50,50,400,200); 
context.fillRect(50,50,400,200)

context.clearRect(0,0,460,260);

context.fillRect(50, 50, 200, 200);
 context.clearRect(100, 100, 100, 100);
 context.strokeRect(110, 110, 80, 80);
 context.strokeRect(60, 60, 180, 180);

 context.fillStyle = "#900";
 context.strokeStyle = "#f00";
 
 context.fillRect(300, 50, 200, 200);
 context.clearRect(350, 100, 100, 100);
 context.strokeRect(360, 110, 80, 80);
 context.strokeRect(310, 60, 180, 180);