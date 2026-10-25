//1
let html = document.getElementsByTagName("html")[0]
console.log(html)
html.classList.add('red-border');

//2
let body = document.body
console.log(body)
body.style.padding = '20px';

//3
let ul = document.querySelector("ul")
console.log(ul)
ul.style.backgroundColor = '#f0f0f0';

//4
let p = document.querySelectorAll("p")[2]
console.log(p)
p.classList.add('highlight');

//5
let googleList = document.querySelector(".google-list-item")
console.log(googleList)
googleList.style.fontWeight = 'bold';

//6
let menu = document.querySelector(".menu")
console.log(menu.children)
Array.from(menu.children).forEach(child => {
    child.style.margin = '5px 0';
    child.style.padding = '5px';
});

//7
const googleLink = document.querySelector('a[href="https://google.com"]');
if (googleLink) {
    googleLink.style.color = 'green';
    googleLink.style.textDecoration = 'none';
}

//8
let lastElement = document.querySelector('script:last-of-type');
console.log(lastElement)

//9
let pPrevLast = document.getElementsByTagName("p")[document.getElementsByTagName("p").length-2]
console.log(pPrevLast)
pPrevLast.classList.add('blue-text');

//10
let span = document.querySelector('span');
console.log(span)
span.classList.add('large-text', 'green-bg');


//additional
function traverseDOM(node, indent = 0) {
    console.log(' '.repeat(indent) + node.nodeName + 
                (node.className ? ` (class: ${node.className})` : '') + 
                (node.id ? ` (id: ${node.id})` : ''));
    
    for (let child of node.childNodes) {
        if (child.nodeType === Node.ELEMENT_NODE) {
            traverseDOM(child, indent + 2);
        }
    }
}

console.log('DOM Tree:');
traverseDOM(document.documentElement);

