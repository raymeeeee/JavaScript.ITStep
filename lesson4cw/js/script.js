var num = [2, 56, 7, 90, 44];
console.log(num)
num.length = 0;
console.log(num)
let empty = [];
console.log(empty); 
const arr = new Array(63, 7, 18, 9, 99, 100);
console.log(arr);
const emptyArr = new Array();
console.log(emptyArr);
const arr5 = new Array(5);
console.log(arr5);

let randNum = (x) => parseInt(Math.random()*x)

for(let i=0; i<arr5.length; i++){
	arr5[i] = randNum(50);
}
console.log(arr5.join(" | "))

function printArray(arr, text="Начальный массив"){
	document.write(`<h3>${text}</h3>`);
	document.write('<ol start="0"><li>'+arr.join('<li>')+'</ol>');
}

let group = ["Иванов", "Петров", "Васечкин", "Пупкин", "Овчинникова"];

printArray(group);

group.unshift("Арбузова", "Данильченко")
group.push("Новиков", "Рыбальченко")

printArray(group, "После добавления элементов")

var last = group.pop()
let first = group.shift();
console.log(last, first)

printArray(group, "После удаления последнего и первого элементов");


let students = group.splice(1, 2, "Онищенко", "Харламов", "Шевченко",)

printArray(group, "После использования slice()");
console.log(students);


console.log(group.concat(students, first, last))

printArray(group, "После использования concat()");

group = [...group, ...students, first, last];
console.log(group)
printArray(group, "После объединения с помощью concat()/spread-operator");

let groupSlice = group.slice();
let groupCopy = group;
group.push("Тараканов");
groupCopy.push("Ющенко");
groupSlice.push("Кириченко");
 
printArray(groupSlice, 'Новая группа');
printArray(group, 'Исходная группа');
printArray(groupCopy, 'Скопированная группа');

function sortByName (name1, name2) {
    return name2.toLowerCase() > name1.toLowerCase()? -1: 1;
  }
   
group.sort(sortByName);
printArray(groupCopy, 'Отсортированная группа');

var numbers =[1, 34, 10, 33, 20, 2, 14, 67, 23, 78,90, 14];
printArray(numbers);
// numbers.sort(function (a, b) {
//   return a - b;
// });
printArray(numbers, 'Отсортированные числа');

group.forEach(function(item, ind, arr){
    document.write(`<p>${ind+1}. ${item.toUpperCase()} в массиве ${arr.join(' | ')}</p>`)
  })

document.write('<h2>Массив numbers увеличенный в 10 раз</h2>')

numbers.forEach(function(item){
    document.write(`${item*10}&nbsp&nbsp&nbsp`)

})


let numbersDividedBy3 = numbers.map(function(item){
    return (item/3).toFixed(2);
})

document.write('<h2>Массив numbers поделенный на 3</h2>')

printArray(numbersDividedBy3, '');


let numbersGreaterThen20 = numbers.filter(function(a){
    return a > 20
})

document.write('<h2>numbers.items > 20</h2>')
printArray(numbersGreaterThen20, '');


let numbersGreaterThen20new = numbers.filter(item => item>20)
printArray(numbersGreaterThen20new, '');


let site=[];
site["name"] = 'Магазин игрушек "Bambino House"';
site["url"] = 'http://bambino-house.com/';
site["admin_name"] = 'dinamit'; 
site["admin_pass"] = 'my_pass';
for(let each in site){
   console.log(site[each]);
}

 