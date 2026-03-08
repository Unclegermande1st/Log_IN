document.addEventListener("DOMContentLoaded", () => {

const container = document.querySelector(".container")

const signUpLink = document.querySelector(".SignUpLink")
const signInLink = document.querySelector(".SignInLink")

if(signUpLink){

signUpLink.addEventListener("click", (e) => {

e.preventDefault()
container.classList.add("active")

})

}

if(signInLink){

signInLink.addEventListener("click", (e) => {

e.preventDefault()
container.classList.remove("active")

})

}

})