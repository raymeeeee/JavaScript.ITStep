let strTotal = ""
while (true) {
    let str = prompt("Enter some word: ")
    if (str != null){
        strTotal += str + " ";
        var Enough = confirm("Enough?");
        if (Enough) break;
    }
    else {
        break;
    }
}
alert(strTotal)