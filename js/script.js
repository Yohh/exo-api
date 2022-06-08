const app = document.querySelector(".app")
const string = document.createElement("p")
string.classList.add("text")
app.appendChild(string)

const url = "https://api.chucknorris.io/jokes/random"

fetch(url)
.then((resp) => resp.json())
.then((data) => {
    string.innerHTML = data.value   
})


const button = document.createElement("input")
button.classList.add("update")
button.type = "button"
button.value = "update"
app.appendChild(button)
button.onclick = () => window.location.reload();
