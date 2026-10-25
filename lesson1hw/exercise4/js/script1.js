let l = parseFloat(prompt("Enter length in mm: ", 2000))/1000
let w = parseFloat(prompt("Enter width in mm: ", 300))/1000
alert(
`Results:
------------
Area: ${l*w}sq.m.
Perimeter: ${(l+w)*2}m.`
)