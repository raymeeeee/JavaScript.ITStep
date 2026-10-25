//1

let container = document.getElementById("gallery")

let html = ""

let urls = {"https://source.unsplash.com/MCMfw-bl8lY/500x500" : "My dream",
            "https://source.unsplash.com/9FEoZ7Oj4R8/500x500" : "Roads",    
            "https://source.unsplash.com/fFX2vB_NNzQ/500x500" : "Early morning",
            "https://source.unsplash.com/KkCig7EbfoA/500x500" : "Lost",
            "https://source.unsplash.com/HAoEfVC3y68/500x500" : "#Brooklyn Bridge",
            "https://source.unsplash.com/y6aXFooXcRs/500x500" : "Skys",
            "https://source.unsplash.com/kJmY4eNmMVo/500x500" : "Forest",
            "https://source.unsplash.com/0hAnt8BUbbA/500x500" : "My temporary home",
            "https://source.unsplash.com/MU70DTGr7d0/500x500" : "Love",
            "https://source.unsplash.com/L4nwL3195U0/500x500" : "Grandma",
            "https://source.unsplash.com/I4dR572y7l0/500x500" : "Miss you...",
            "https://source.unsplash.com/BcVvVvqiCGA/500x500" : "Dance"
}

for (const [key, value] of Object.entries(urls)){

    console.log(key, value)
    html += `<figure style="transform: rotate(${Math.random() * (30) - 15}deg); margin: 30px">
        <img src="${key}">
        <figcaption>${value}</figcaption>
        </figure>`
}

container.innerHTML = html


//2

function Car(manufacturer, model, year, averageSpeed) {
    this.manufacturer = manufacturer
    this.model = model
    this.year = year
    this.averageSpeed = averageSpeed
  };

Car.prototype.showInfo = function() {
	document.write(`<p>${this.manufacturer} ${this.model} ${this.year} ${this.averageSpeed}</p>`);
}

let car1 = new Car("Toyota", "Camry", "2020", 90)
car1.showInfo()

Car.prototype.calcTimeDistance = function(km) {

    let time = km/this.averageSpeed;
    return time + Math.floor(time/4);
}

console.log(car1.calcTimeDistance(90));
console.log(car1.calcTimeDistance(180));
console.log(car1.calcTimeDistance(1000));


//3

let productList = {
    products: ['milk', 'coffee']
}

productList.showProducts = function() {
    document.write(`<ol>`)
    for (let product of this.products){
        document.write(`<li>${product}`);
    }
    
}

productList.addProduct = function(product) {
    this.products.push(product)
    
}

productList.deleteProduct = function(index) {
    this.products.splice(index-1, 1) 
}

productList.addProduct("Apples")
productList.addProduct("Bananas")

productList.deleteProduct(2) //coffee

productList.showProducts()
  