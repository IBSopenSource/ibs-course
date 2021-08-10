// const person = {
//     name : "Ahmed",
//     age: 20
// }

const username = document.getElementById("username")
const password = document.getElementById("password")

function inputChanged(e) {
    console.log("input changed");
    console.log(e);
}

function buttonClicked(e) {
    e.preventDefault();
    console.log("button clicked");
    console.log(username.value)
    console.log(password.value)
}


const button = document.getElementById("button")

// username.addEventListener("change", inputChanged)
// password.addEventListener("change", inputChanged)
button.addEventListener("click", buttonClicked)