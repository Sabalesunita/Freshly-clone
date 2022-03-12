

// document.querySelector("form").addEventListener("submit", choosePayment)
// function choosePayment(event) {
//     event.preventDefault()
//     alert("choose payment option")

// }



document.querySelector("#method1").addEventListener("change", function () {
    document.querySelector("form").addEventListener("submit", submit)
    function submit(event) {
        event.preventDefault()
        window.location.href = "/payment/payment.html"
    }
})


var listarr = JSON.parse(localStorage.getItem("Delivery"))
var originalarr = [];
originalarr.push(listarr[listarr.length - 1])

originalarr.map(function (elem) {

    var first = document.createElement("p")
    first.textContent = elem.first;

    document.querySelector(".firstname").append(first)

    var last = document.createElement("p")
    last.textContent = elem.last;

    document.querySelector(".lastname").append(last)

    var fullname = document.createElement("p")
    fullname.textContent = elem.full;

    document.querySelector(".fullname").append(fullname)

    var addressline1 = document.createElement("p")
    addressline1.textContent = elem.add1;

    document.querySelector(".addressline1").append(addressline1)

    var addressline2 = document.createElement("p")
    addressline2.textContent = elem.add2;

    document.querySelector(".addressline2").append(addressline2)

    var city = document.createElement("p")
    city.textContent = elem.city;

    document.querySelector(".city").append(city)

    var state = document.createElement("p")
    state.textContent = elem.state;

    document.querySelector(".state").append(state)

    var zip = document.createElement("p")
    zip.textContent = elem.zip;

    document.querySelector(".zip").append(zip)

    var phone = document.createElement("p")
    phone.textContent = elem.phone;

    document.querySelector(".phone").append(phone)

    var email = document.createElement("p")
    email.textContent = elem.email;

    document.querySelector(".email").append(email)
})

// getting data from sonthosh page


var addedarr = JSON.parse(localStorage.getItem("addedtocart"))

console.log(addedarr)

var price = JSON.parse(localStorage.getItem("price"))

console.log(typeof price)

var items = document.createElement("p")
items.textContent = addedarr.length + " " + "meals";

document.querySelector(".items").append(items);
console.log(items)

var price1 = document.createElement("h4")
price1.textContent = +price;

document.querySelector(".items").append(price1)
console.log(price1)

var calculated = document.createElement("h4")
calculated.textContent = ("&", +price + 6.99 + 3.99);

console.log(calculated)

document.querySelector(".total").append(calculated)



addedarr.map(function (elem) {

    var box = document.createElement("div")

    var image = document.createElement("img");
    image.setAttribute("src", elem.smallimage)
    image.setAttribute("id", "changeme")
    var title = document.createElement("h5")
    title.textContent = elem.name;

    box.append(image, title)

    document.querySelector(".box2").append(box)

})
