const forwardBtn = document.querySelector('.forward'),
 backBtn = document.querySelector('.back'),
 goBtn = document.querySelector('.go');

forwardBtn.onclick = function(){
  window.history.forward()
 }
backBtn.onclick = function(){
  history.back()
 }
goBtn.onclick = function(){
  history.go(-1)
 }