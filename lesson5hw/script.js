
//1
let task = []
for (let i = 0; i < 4; i++) {
    task.push(Math.random() < 0.5)
}

console.log(task)

let panels = document.getElementsByClassName("panel");

console.log(panels)

let count = 0
for (let panel of panels) {
    if (task[count]){
        panel.firstElementChild.className = "panel-header collapsed"
        panel.firstElementChild.firstElementChild.className = "bi bi-chevron-double-down"
    }
    count++;
}


//2
function oddEvenChars(word) {

    const evenChars = [...word].filter((char, index) => index % 2 === 0);
    const oddChars = [...word].filter((char, index) => index % 2 !== 0);
  
    return evenChars.join('') + ' ' + oddChars.join('');
}

console.log(oddEvenChars('Алфавіт')); 
console.log(oddEvenChars('Академія'));
console.log(oddEvenChars('Влада')); 


//3
function numberToText(num) {
    if (num < 10 || num > 99) return "Число має бути від 10 до 99";
    
    const units = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 
                  'шість', 'сім', 'вісім', 'дев\'ять'];
    const teens = ['десять', 'одинадцять', 'дванадцять', 'тринадцять',
                 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять',
                 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
    const tens = ['', '', 'двадцять', 'тридцять', 'сорок',
                'п\'ятдесят', 'шістдесят', 'сімдесят',
                'вісімдесят', 'дев\'яносто'];
  
    const digit1 = Math.floor(num / 10);
    const digit2 = num % 10;
  
    if (digit1 === 1) {
      return teens[digit2];
    } else {
      return (tens[digit1] + 
             (digit2 !== 0 ? ' ' + units[digit2] : ''));
    }
  }
  
  console.log(numberToText(35));
  console.log(numberToText(89)); 
  console.log(numberToText(12)); 


//4
function flyWord(word){
    document.write(`<div style="padding: 20px">`);
    [...word].forEach((char, i) => 
        document.write(`<span class="fly" style="animation-delay: .${i}s;">${char}</span>`)
    )
    document.write("</div>");
}

flyWord("ANIMATE")
flyWord("THESE")
flyWord("WORDS")

//5

function analyzeUrl(url) {
    try {
      const urlObj = new URL(url);
      
      const port = urlObj.port ? `:${urlObj.port}` : '';

      const result = {
        протокол: urlObj.protocol.replace(':', ''),
        домен: urlObj.hostname,
        шлях: urlObj.pathname,
      };
      
      return result;
    } catch (e) {
      return { помилка: "Incorrect URL object" };
    }
  }

console.log(analyzeUrl("https://itstep.org/ua/about"));