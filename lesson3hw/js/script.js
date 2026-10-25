//1
var isEven = (num) => num%2==0;
for (let index = 20; index < 38; index++) {
    if (isEven(index)){
        console.log(index)
    }
}

//2
function writeStr() {
        for (var i = 0; i < arguments.length; i++) { 
            document.write("<li> " + (i+1) + ". " + (arguments[i]) + "</li>")
        }
    }
writeStr("Elden Ring", "God of War: Ragnarok", "Total War", "Dota 2")

//3
function reverseStr(str) {
    var newStr = ""
    for (let index = str.length-1; index >= 0; index--) {
        newStr += str[index]
    }
    return newStr;
}
console.log(reverseStr("12345"))

//4

function calcArea() {
    if (arguments.length == 2){
        return arguments[0]*arguments[1];
    }
    else if (arguments.length == 1){
        return arguments[0]**2;
    }
}
console.log(calcArea(10))
console.log(calcArea(10, 20))

//5

function printTime(h,m,s) {
    if (s >= 60) {
        m+= parseInt(s/60);
        s = s%60;
    }
    if (m >= 60) {
        h+= parseInt(m/60);
        m = m%60;
    }
    if (h >= 24) {
        h = h%24;
    }

    var str = (h < 9 ? "0" : "") + h + ":" + (m < 9 ? "0" : "") + m + ":" + (s < 9 ? "0" : "") + s
    return str;
}

console.log(printTime(20,0,20))
console.log(printTime(25,121,1234))
console.log(printTime(49,130,432))

//6

var printStars = (x) => {
    let stars = "";
    for (let i = 0; i < x; i++) {
      stars += "*";
    }
    console.log(stars);
};

var printTriangle = (y) => {
    for (let i = 1; i <= y; i++) {
       printStars(i);
    }
}

//printStars(10)
printTriangle(5)

