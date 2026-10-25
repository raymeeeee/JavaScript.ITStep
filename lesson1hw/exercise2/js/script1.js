let salad = prompt("Enter a salad: ")
let side1 = prompt("Enter a first side: ")
let side2 = prompt("Enter a second side: ")
let desert = prompt("Enter a desert: ")
let saladPrice = 120.5
let side1Price = 162.5
let side2Price = 98.3   
let desertPrice = 50.5
alert(
    `You ordered:
        ${salad} - ${saladPrice}uah.
        ${side1} - ${side1Price}uah.
        ${side2} - ${side2Price}uah.
        ${desert} - ${desertPrice}uah.
Total: ${saladPrice+side1Price+side2Price+desertPrice}uah.`
)