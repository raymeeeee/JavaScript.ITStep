function sayHello(user="User") {
    alert(`Hello, ${user}!`)
}

//sayHello()

function createTable(rows = 3, cols = 3){
    var table="<table style='width: 600px' border='1'>";
    for(var i=0; i<rows; i++){
      table +="<tr>";
        for(var j=0; j<cols; j++){
          table +="<td> Ячейка "+(j+1)+" </td>";
        }
      table +="</tr>";
    }
    table +="</table>";
    document.write(table);
}
createTable();
createTable(4,6);

function summa() {    
    var sum = 0,
    str = "";
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {        sum += arguments[i];
       str += arguments[i] + ",";     }
     str=str.slice(0,-1);
     return str+"="+sum;
}
console.log(summa(1, 2, 3)); //запишет в консоли [1,2,3];
document.write("<p> Сумма чисел " + summa(2, 3, 56, 17, 34, 67) + "</p>");

// function wordsSpace() {
//     var str = ""
//     for (var i = 0; i < arguments.length; i++) { 
//         str += arguments[i] + " ";
//     }
//     return str;
// }
// console.log(wordsSpace("apple", "banana", "peach"));
// console.log(wordsSpace("apple", "banana"));

// function tableMult(cols){
//     rows = 9
//     var table="<table style='width: 600px' border='1'>";
//     for(var i=1; i<=rows; i++){
//       table += "<tr><td> " + cols + " * " + i + " = " + (cols * i) + "</td></tr> "
//     }
//     table +="</table>";
//     document.write(table);
// }
// tableMult(2)
// tableMult(9)


// (function(x){
//     let str = '';
//     if(x>0) str='Вы ввели положительное число';
//     else if(x<0) str='Вы ввели отрицательное число';
//     else str='Ваше число - 0';
//     alert(str);
// })(+prompt('Введите число', 5))



// let i=0;
// let timeId = setInterval(num, 200);

// function num(){ 
//     i+=10;
//     console.log(i);
//     if(i>100) clearInterval(timeId);
// }

let i=5;
let timeId = setInterval(num, 1000);

function num(){ 
    i--;
    timer.textContent = i;
    if(i<=0) {
        question1.hidden = true;
        question2.hidden = false;
        clearInterval(timeId);
    }
}

// const helloSay1 = (user) => alert('Hello world. This is '+user)
// helloSay("Henry");

// const helloSay2 = (userName, userLastname) => alert('Hello world. This is '+userName +' '+userLastname)
// helloSay("Henry", "O'Nill");

// const sum1 = (a, b) => a+b
// console.log(sum1(12,5))

// const max = (a,b) => (a>b) ? a : b; 

// let randNum = Math.random()*50 + 50; //0 ...100
// //20... 200
// //m ... n
// //Math.random()*(n-m)) + m
// console.log(randNum, Math.round(randNum));
 
let randNum = (a,b) => parseInt(Math.random()*(b-a) + a);
console.log(randNum(100,200));
