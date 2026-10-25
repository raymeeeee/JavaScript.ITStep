function someFunc() {
    alert("This is about events.")
}

function over(elem){
    console.log(elem)
    elem.src="https://picsum.photos/id/221/400/300";
  }
  function out(elem){
    elem.src="https://picsum.photos/id/239/400/300";
  }

let pCollection = document.getElementsByTagName('p');
console.log(pCollection)
for(let oneP of pCollection){
      oneP.onclick = toggleP;
      oneP.addEventListener('click',styleP);
  }
  pCollection[5].onclick = null;
  pCollection[6].removeEventListener('click',styleP);
  function toggleP(){
      this.classList.toggle('bigger');
  }
  function styleP(){
      this.style.backgroundColor = "#ddd";
  }

let closeBtn = document.getElementsByClassName('close')
console.log(closeBtn);
[...closeBtn].forEach(elem => {
    
    elem.addEventListener("click", function(){
        //this.parentElement.style.display="none";
        this.parentElement.remove();
    })
})