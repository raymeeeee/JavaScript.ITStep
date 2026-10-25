var data = localStorage.getItem("flower");

if (data) {
    data = JSON.parse(data);
    document.getElementById("flowerTitle").innerHTML = data.flower;
    document.getElementById("descr").innerHTML = data.desc;
    document.getElementById("flowerPic").src = data.img;
    document.getElementById("moreLink").href = data.url;
    console.log(data);
}