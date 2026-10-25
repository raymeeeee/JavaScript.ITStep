console.log(a,b,flag);
//console.log(c); //everything after error will be ignored

{
var a=3, b=10; var flag=true; //can be used outside the field //can be used before initalization

let c = 1; //cannot be used outside the field //cannot be used before initalization
}
let a1 = .3443234, bigNum = 1.34e4 //in js all numbers are floats
const List = [1,2,3,4,5];
List[0] = 100;

console.log(List[0]);
console.log(a,b,flag);
console.log(a1.toFixed(2)); //num becomes string
console.log(parseInt(a1) + 100); //num becomes string
console.log("123");

let num1 = parseFloat(prompt("Enter a number: ", 123)) //Number() to number // parseFloat to float // parseInt to int // + to number
//let num1 = +prompt("Enter a number: ")
console.log(num1, typeof(num1), a, typeof(a))

const poem = `Lorem, ipsum "dolor" sit amet \
 consectetur adipisicing elit. \
 Aliquid ipsa quas ${a} possimus et dolor nobis`; //Перенос только в редакторе // \n\ перенос и в редакторе и в строке

console.log(poem)
 
//practice

let name = "Рома"

let string = `
Ой у полі криниченька,
Там холодна водиченька.
 
Ой там ${name}н воли пасе,
Катерино воду несе.
 
Ой став ${name}н жартувати,
З відер воду виливати.
 
Ой `+name+`не, моє серце,
Остав води хоть відерце.
 
Тепер вода не літняя,
В мене мати не рідная,
 
Буде бити ще й лаяти,
Ще й ${name}ном докоряти.`

console.log(string)

////

console.log(document.getElementById("element1"))

console.log([1,2,3,4,5])



const person = {
    name: "Julia",
    age: 23,
    email: "julia1987@gmail.com"
}
 //Литерал объекта
console.log (typeof person); // object
person.name = "Anna";
person["age"] = 25;
console.log(person);

function sayHello(){ alert("Hello world"); }
sayHello();
function sayHello(name){ alert("Hello "+ name); }
sayHello ("Julia ");


//practice

var a = 10000
a *= 0.9
a *= 0.9
a -= 500
a /= 2
console.log(a)

//practice

alert("Think about some number")
alert("Multiply it by 2")
alert("Add 5 to it")
let num =prompt("Enter your number: ") 
alert(`Your number: ${(num-5)/2}`)

