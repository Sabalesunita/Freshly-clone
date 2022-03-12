document.querySelector("form").addEventListener("submit", calling)
listarr = JSON.parse(localStorage.getItem("Delivery")) || [];

function calling(event) {
    event.preventDefault();

    var first = document.querySelector("#firstname").value;

    var last = document.querySelector("#lastname").value;

    var full = document.querySelector("#lastname").value;

    var address1 = document.querySelector("#addressline1").value;

    var address2 = document.querySelector("#addressline2").value;

    var city = document.querySelector("#city").value;

    var state = document.querySelector("#state").value;

    var zip = document.querySelector("#zip").value;

    var phone = document.querySelector("#phone").value;

    var email = document.querySelector("#email").value;

    // console.log(first,last,full,address1,address2,city,state,zip,phone,email)

    var object = {
        first: first,
        last: last,
        full: full,
        add1: address1,
        add2: address2,
        city: city,
        state: state,
        zip: zip,
        phone: phone,
        email: email
    }


    // console.log(listarr)

    if (first.length == 0 || last.length == 0 || full.length == 0 || address1 == 0 || city == 0 || state == 0 || zip == 0 || phone == 0 || email == 0) {
        alert("data are missing")
    }
    else {
        listarr.push(object);
        localStorage.setItem("Delivery", JSON.stringify(listarr));
        window.location.href = "/nextcheck/nextcheck.html";
    }

}

// getting data from sonthosh page


var addedarr = JSON.parse(localStorage.getItem("addedtocart"))

//    console.log(addedarr)

var price = JSON.parse(localStorage.getItem("price"))

//    console.log(typeof price)

var items = document.createElement("p")
items.textContent = addedarr.length + " " + "meals";

document.querySelector(".items").append(items);
//  console.log(items)

var price1 = document.createElement("h4")
price1.textContent = "$" + price;

document.querySelector(".items").append(price1)
//   console.log(price1)
var price2 = document.createElement("h4")
price2.textContent = "$" + price;
document.querySelector(".newchange").append(price2)

var calculated = document.createElement("h4")
calculated.textContent = ("$" + (price + 6.99 + 3.99));

//   console.log(calculated)

document.querySelector(".total").append(calculated)



addedarr.map(function (elem) {

    var box = document.createElement("div")

    var image = document.createElement("img");
    image.setAttribute("src", elem.smallimage)

    var title = document.createElement("h5")
    title.textContent = elem.name;

    box.append(image, title)

    document.querySelector(".box2").append(box)

})