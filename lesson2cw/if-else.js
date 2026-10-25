
// alert( confirm("Вам уже есть 18?") ? 'Вам на триллер' : 'Для вас мультфильм');
// myheader.style.color = +prompt("Введите число", 10) > 50? "red" : "blue";

/* let sum = 0, res = "";
confirm("Дельфины - это рыбы?") ? sum-- : sum++;
confirm("Земля круглая?") ? sum++ : sum--;
confirm("JavaScript == Java?") ? sum-- : sum++;
confirm("2*2+2 = 6?") ? sum++ : sum--;
console.log(sum);

switch(sum){
	case -4: res = "Все ответы неверны!!!"; break;
	case -2: res = "3 ответа неверны!!!"; break;
	case 0:  res = "Половина верных ответов!!!"; break;
	case 2:  res = "3 ответа верные!!!"; break;
	case 4:  res = "Все ответы верны!!!"; break;
}
console.log(res); */
/* let w = 600;
document.write(`<div class="test" style="width: ${w}px">Test Test Test</div>`); */

/* var num = +prompt("Пожалуйста, введите число от 1 до 10.");
console.log(num)

while (num < 1 || num > 10 || isNaN(num)) {
		num = prompt("Введено неправильное значение, пожалуйста, введите число от 1 до 10!");
}

alert("Отлично! Вы ввели число: " + num); */

/* let words = ['Уж', 'я', 'веники', 'не', 'вяжу'];
console.log(words)
for(let one of words){
  console.log(one);
}

let tds = document.getElementsByTagName("td");
console.log(tds);
for(let oneTD of tds){
	oneTD.style.cssText = "font-style: italic; background-color: yellow;";
} */

	let person= {
    firstname: "Vasya",
    lastname: "Pupkin",
    age: 23,
    email: 'pupkin@gmail.com'
}
console.log(person["age"]);
for(let field in person){
    document.write(`<p><strong>${field}</strong>: ${person[field]}</p>`)
}
