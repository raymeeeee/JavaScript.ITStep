navigator.geolocation.getCurrentPosition(
 function succsess(position){
   document.querySelector('.date').innerHTML = position.coords.latitude;
   document.querySelector('.month').innerHTML = position.coords.longitude;
 },
 function error(err) {
  console.warn(`Ошибка (${err.code}): ${err.message}`);
}
)