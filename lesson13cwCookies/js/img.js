card = document.querySelectorAll(".choose-photo");
chooseBtn = document.querySelector(".btn-success");

card.forEach((element) => {
  element.addEventListener("click", function () {
    if (document.querySelector(".bg-success")) {
      document.querySelector(".bg-success").classList.remove("bg-success");
    }
    this.classList.add("bg-success");
    Cookies.set("id", this.id);
  });
});

chooseBtn.addEventListener("click", function () {
  if (document.querySelector(".bg-success")) {
    var cardData = document.querySelector(".bg-success")
    var data = {
        flower: cardData.querySelector(".card-header").innerHTML,
        url: cardData.getAttribute("data-url"),
        desc: cardData.getAttribute("data-description"),
        img: cardData.querySelector('.card-body img').src
    }
    localStorage.setItem("flower", JSON.stringify(data));
    window.location.href = "big_image.html"
  }
});
const checkFlower = () =>{
    var id = Cookies.get("id")
    if (id) {
        document.getElementById(id).classList.add("bg-success");
    }
}
checkFlower()
