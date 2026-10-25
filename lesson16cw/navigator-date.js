function getCurrentDate() {
    let today = new Date();
    let monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    document.querySelector(".date").innerHTML = today.getDate();
    document.querySelector(".month").innerHTML = monthes[today.getMonth()];
    document.querySelector(".year").innerHTML = today.getFullYear();

}
getCurrentDate()
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function success(position) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=533be3249a8b3414777e1f6567da8034`)
                .then(response => response.json())
                .then(data => showInfo(data))
                .then(()=>{document.querySelector(".weather-type").classList.add("active")
                    document.querySelector(".weather-image").classList.add("active")
                })
                .catch(err => console.error(err))
        },
        function error(err) {
            console.log(`Ошибка (${err.code}): ${err.message}`);
        }
    );

    function showInfo(data) {
        document.querySelector(".temperature").innerHTML=`${(data.main.temp-273.15).toFixed()}<sup>0</sup>C`;
        document.querySelector(".weather-type").innerHTML=data.weather[0].description;
        document.querySelector(".weather-image").firstElementChild.innerHTML=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".country").innerHTML=data.sys.country;
        console.log(data);
    }
}