// var itstep = "Компьютерная Академия \"ШАГ\"";
// itstep[3] = '1'
// itstep += "100"
// console.log(itstep)
// console.log(itstep.charAt(3))

// var str = new String("String obj")
// str[5] = '!'
// console.log(str)
// console.log(itstep, itstep.toLowerCase(), itstep.toLocaleLowerCase(), itstep.toLocaleUpperCase())


// let div = '<div class="row">';
// for(let i=0; i<8; i++){
//     div+=`<div class="col-md-3 col-sm-6">
//             <div class="card text-bg-primary mb-3">
//                 <div class="card-header">Header ${i+1}</div>
//                 <div class="card-body">
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" class="card-link">Card link</a>
//                 </div>
//             </div>
//         </div>`;
// }
// div+='</div>';

// //document.write(`<div class="container">${div}</div>`);
// main.innerHTML = div;


// let text = `Lorem ipsum dolor,
//  sit amet consectetur adipisicing elit.
//   Aspernatur, 
// `


// var textId = setInterval(printText, 100), i=0;
// function printText(){
//   if (i!=text.length) {
//     block.innerHTML += text[i];
//     i++;
//   }
//   else {
//     clearInterval(textId)
//     block.innerHTML += "\nEnd Interval"
//   }
// }

// let blockId = setTimeout(printBlock, 100), j=0;
// function printBlock() {
//     if (j!=text.length) {
//         block2.innerHTML+=text[j];
//         j++;
//         blockId = setTimeout(printBlock, 100)
//     }
//     else{
//         clearTimeout(blockId);
//         block2.innerHTML+="Timeout end";
//     }
// }



//<b style="color:red">char</b> for every first char in <p>

let textN = [
    `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, accusamus.</p>`,
    `<p>Laboriosam, dolorem iure magni modi animi mollitia minus eaque eius!</p>`,
    `<p>Voluptates vero officia, voluptate dolorum adipisci fugiat perspiciatis eius veniam.</p>`]

var div = ""
    textN.forEach(element => {
      div += element.substring(0, 3)
      div += `<b style="color:red">${element[3]}</b>`
      div += element.substring(4)
    });

redText.innerHTML = div


let files = ['picture.jpg', 'document.docx', 'archive.zip', 'index.html']

files.forEach(element => {
  filetype = element.substring(element.lastIndexOf('.'))
  console.log(filetype)
});

files = files.map((element) => {
  return element.substring(element.lastIndexOf('.'))
}
);

console.log(files)


let phrase1 = "Уж я веники не вяжу"
let phrase2 = "шалаш"

function palyndrom(phrase) {
  phrase = phrase.toLowerCase()
  phrase = phrase.split(" ") //deleting spaces
  phrase = phrase.join("") //creating solid string 
  phrase = phrase.split("") //spliting by char

  console.log(phrase.join(""),(phrase.reverse()).join(""))
  
  if (phrase == (phrase.reverse())) { //comparing two arrays
    return true;
  }
  else {
    return false;
  }
}

console.log(phrase1, palyndrom(phrase1))
console.log(phrase2, palyndrom(phrase2))
console.log("красивые розы", palyndrom("красивые розы"))