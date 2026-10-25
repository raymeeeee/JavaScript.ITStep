window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent.toFixed()}%`;

    infoBox.innerHTML = `window.innerWidth: ${window.innerWidth}<br>
    window.innerHeight: ${window.innerHeight}<br>
    window.pageYOffset : ${window.pageYOffset.toFixed(2)}<br>
    window.scrollY: ${window.scrollY.toFixed(2)}<br>
    progress: ${scrollPercent.toFixed()}%`

})