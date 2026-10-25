
//1
const monthCssColors = {
  "January": "lightblue",
  "February": "lavender",
  "March": "lightgreen",
  "April": "lemonchiffon",
  "May": "lightpink",
  "June": "skyblue",
  "July": "coral",
  "August": "gold",
  "September": "peru",
  "October": "orangered",
  "November": "sienna",
  "December": "silver"
};
for (let key in monthCssColors) {
  document.write(`<div style="background-color: ${monthCssColors[key]}; padding: 20px; text-align: center">${key}</div>`);
}

//2

const questions = {
  "Земля плоская?": false,
  "Солнце вращается вокруг Земли?": false,
  "Вода кипит при 100 градусах Цельсия на уровне моря?": true,
  "У кошки 9 жизней?": false,
  "JavaScript — это язык программирования?": true,
  "HTML — это язык программирования?": false,
  "2 + 2 = 5?": false
}

var answers = []
for (let key in questions) {
    (confirm(`${key}`) ==  questions[key] ? answers.push([key, 10]): answers.push([key, 0]));
}

document.write('<table style="width:100%";> ')
document.write("<tr>\
  <th>Questions</th>\
  <th>Score</th>\
  </tr>")

var score = 0
for (let index = 0; index < answers.length; index++) {
  document.write(`\
    <tr>\
  <th>${answers[index][0]}</th>\
  <th>${answers[index][1]}</th>\
  </tr>`)
  score += answers[index][1]
}

document.write(`<tr>\
  <th>Total</th>\
  <th>${score}</th>\
  </tr>`)
document.write('</table>')


//3

var nums = [10,22,30,40,123,95,132,123,48,49]

var num1index = nums.findIndex(item => item==22)
console.log(num1index, (num1index != -1 ? nums[num1index] : "Not found"))
var num2index = nums.findIndex(item => item==48)
console.log(num2index, (num2index != -1 ? nums[num2index] : "Not found"))
var num3index = nums.findIndex(item => item==96)
console.log(num3index, (num3index != -1 ? nums[num3index] : "Not found"))

//

var arr =  [-8, 19, -2, 41, 90, -123, -2, 34, 56];

var sumOfPos = arr.reduce(function (total, num) {
  if (num > 0) {
    return total + num;
  }
  else {
    return total;
  }
  
}, 0) //start value

console.log(sumOfPos)
