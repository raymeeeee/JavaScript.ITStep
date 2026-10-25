let salad = prompt("Enter a salad: ")
let side1 = prompt("Enter a first side: ")
let side2 = prompt("Enter a second side: ")
let desert = prompt("Enter a desert: ")
let saladPrice = 67.5
let side1Price = 103.9
let side2Price = 89.5   
let desertPrice = 53.6

let menu = ""
let total = 0
if (salad != null) {
    menu += `        ${salad} - ${saladPrice}uah.\n`
    total += saladPrice;
}
if (side1 != null) {
    menu += `        ${side1} - ${side1Price}uah.\n`
    total += side1Price;
}
if (side2 != null) {
    menu += `        ${side2} - ${side2Price}uah.\n`
    total += side2Price;
}
if (desert != null) {
    menu += `        ${desert} - ${desertPrice}uah.\n`
    total += desertPrice;
}

if (total != 0) {
    alert(
        `You ordered:
${menu}Total: ${total}uah.`
)

}
