

var Data = JSON.parse(localStorage.getItem("BusinessData")) || [];

document.querySelector("#btn").addEventListener("click", primeData)

function primeData() {
    // event.preventDefault()
    var fname = document.querySelector("#fname").value
    var lname = document.querySelector("#lname").value
    var role = document.querySelector("#role").value
    var email = document.querySelector("#email").value
    var cname = document.querySelector("#cname").value
    var pnum = document.querySelector("#pnum").value
    var zip = document.querySelector("#zip").value
    // console.log(fname, lname, role, email, cname, pnum, zip)


    var obj = {}
    if (fname != "" && lname != "" && role != "" && email != "" && cname != "" && pnum != "" && zip != "") {
        obj["fName"] = fname,
            obj["lName"] = lname,
            obj["Role"] = role,
            obj["Email"] = email,
            obj["Company_Name"] = cname,
            obj["Phone"] = pnum,
            obj["Zip"] = zip
        Data.push(obj);
        localStorage.setItem("BusinessData", JSON.stringify(Data))
        alert("successfully registered")
        window.location.href = "/freshly business/freshlybusiness.html"
    }
    else {
        alert("enter the correct data")
    }
}