let phone = document.getElementById('phone');
phone.addEventListener('input', () => {
    phone.value = phone.value.replace(/\D/g, "").slice(0, 11);
});

const text = document.body.innerHTML;
const links = text.match(/"(http:\/\/|https:\/\/\S+)"/gi);
console.log(links);

let linkTest = document.getElementById('linkTest');
const urlPattern = /(\b(https|ftp|file):\/\/[-A-Z0-9+&@#\/%=~_|$?!:,.]*)/gi;
const urls = linkTest.innerHTML.match(urlPattern);
console.log(urls);

const linkify = linkTest.innerHTML.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
linkTest.innerHTML = linkify;