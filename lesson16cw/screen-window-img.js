let testImg = document.querySelectorAll('.test-img');

function func1() {
    testImg.forEach(item => {
        item.onclick = openImgWindow;
        item.classList.remove('red-border');
        item.classList.add('blue-border')
    })
}

function func2() {
    testImg.forEach(item => {
        item.onclick = openImgModal;
        item.classList.remove('blue-border');
        item.classList.add('red-border');
    })
}

let openImgWindow = function () {
    let w = screen.availWidth / 1.5;
    let h = screen.availHeight / 1.5;
    console.log(w, h);
    let newWin = window.open(this.getAttribute('href'), w, h);
    newWin.resizeTo(w, h);
    return false;
}
function openImgModal(e) {
    e.preventDefault();
    let modal = document.createElement('div');
    modal.className = 'bg-modal';
    let img = document.createElement('img');
    img.src = this.getAttribute('href');
    img.width = screen.availWidth / 2;
    modal.append(img);
    document.body.append(modal);
    modal.onclick = function () { this.remove(); }
}