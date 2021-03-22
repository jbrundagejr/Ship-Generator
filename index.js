let body = document.querySelector("#body")
let h1 = document.createElement("h1")
body.append(h1)
h1.innerText = "Random Star Wars Ship Generator"
let button = document.createElement("button")
button.id = "button"
body.append(button)
button.innerText = "GET ME A SHIP!"
let ul = document.createElement("ul")
body.append(ul)
let p = document.createElement("p")
ul.append(p)

button.addEventListener("click", function(evt) {
    fetch("https:/swapi.dev/api/starships/")
    .then (res => res.json())
    .then (function(starship){
        function randomNumber() {
            let i = Math.floor(Math.random() * (10))
            return i
        }
        p.innerText = starship.results[randomNumber()].name
    })
})