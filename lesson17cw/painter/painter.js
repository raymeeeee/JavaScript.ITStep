const canvas = document.getElementById("jsCanvas"),
  ctx = canvas.getContext("2d"),
  colorsContainer = document.querySelector(".controls__colors"),
  range = document.getElementById("strokeRange"),
  btnFill = document.getElementById("btnFill"),
  btnSave = document.getElementById("btnSave");

const INIT_COLOR = "#222";
const CANVAS_SIZE = 450;


canvas.width = CANVAS_SIZE; 
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INIT_COLOR;
ctx.fillStyle = INIT_COLOR;
ctx.lineWidth = 2.5;

let painting = false,
  fillCanvas = false;
function onMouseMove(event) {
  let x = event.offsetX,
    y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
    console.log(painting);
  }
}
function onMouseDown(event) {
  painting = true;
}

function stopPainting(event) {
  painting = false;
}
function handleCanvasClick() {
  fillCanvas ? ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE) : "";
}
function handleCanvasContextMenu(event){
  event.preventDefault();
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener('contextmenu', handleCanvasContextMenu);
}

colorsContainer.addEventListener("click", changeColor);

function changeColor(event) {
  if (event.target.className === "controls_color") {
    ctx.strokeStyle = ctx.fillStyle = event.target.style.backgroundColor;
    //console.log( ctx.strokeStyle)
  }
}

range.addEventListener("change", changeBrushSize);

function changeBrushSize() {
  ctx.lineWidth = this.value;
}

btnFill.addEventListener("click", changeCanvasFill);

function changeCanvasFill() {
  if (fillCanvas) {
    fillCanvas = false;
    this.textContent = "Заливка";
  } else {
    fillCanvas = true;
    this.textContent = "Рисование";
  }
}

btnSave.addEventListener('click', savePicture);

function savePicture(){
  const picture = canvas.toDataURL(); //default 'image/png'
  const link = document.createElement('a');
  link.href = picture;
  link.download = "painter";
  // console.log(link);
  link.click();
}