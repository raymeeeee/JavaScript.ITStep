let btn = document.getElementById('btn');
output = document.getElementById('output');
btn.onclick = testPromise;

let randomNum = (x) => Math.round(Math.random()*x);

function testPromise(){
  let numPromise = new Promise(function(resolve, reject){
    let num = randomNum(400);//0...400
    console.log(num);
    setTimeout(function(){
      if(num>200) resolve('Поздравляю! Вы выиграли! Ваш номер '+num);
      else reject('Извините, Вы проиграли! Ваш номер '+num);
    }, 1000);
  });
  numPromise.then( message => output.insertAdjacentHTML('beforeEnd', '<li style="color: red">'+message+'</li>'))
  .catch( message => output.insertAdjacentHTML('beforeEnd', '<li>'+message +'</li>'))
}