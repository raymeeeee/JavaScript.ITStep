let num1 = parseFloat(prompt("Enter some number: "))
let num2 = parseFloat(prompt("Enter some number again: "))

let countAnswers = 0;
let numIncrease = 5
while (true){
    let sum = num1 * numIncrease + num2 * numIncrease;
    let answer = parseFloat(prompt(`Enter the sum of ${num1 * numIncrease} and ${num2 * numIncrease}: `))

    if (sum != answer) {
        break
    }
    else {
        countAnswers++;
    }

    numIncrease += 5;
}

alert(`Sorry, but you have made a mistake after ${countAnswers} tries.`)
