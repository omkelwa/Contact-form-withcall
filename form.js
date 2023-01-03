let form = document.querySelector("form")
let firstName = document.getElementById("name")
// firstName.style.backgroundColor = "orange"
let address = document.querySelector("#address")
// address.style.backgroundColor = "blue"
let contact = document.querySelector("#contact")
// contact.style.backgroundColor = "blue"
let selected = document.querySelector("#select")



form.addEventListener("submit", saveTodo)

function saveTodo(e){
e.preventDefault()
let tbody = document.querySelector("tbody")
let tr = document.createElement("tr")
tbody.appendChild(tr)
let td1 = document.createElement("td")
td1.innerText = firstName.value
let td2 = document.createElement("td")
td2.innerText = address.value
let td3 = document.createElement("td")
td3.innerText = contact.value
let td4 = document.createElement("td")
td4.innerText = selected.value
let number = `tel:${contact.value}`
let a = document.createElement("a")
a.innerText = "call"
a.setAttribute('href',number)
// let td5 = document.querySelector("a")
let td5 = a
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
tr.appendChild(td5)
form.reset()
}
