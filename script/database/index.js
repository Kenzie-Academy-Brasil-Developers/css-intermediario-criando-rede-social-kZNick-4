/* Desenvolva a lógica da página aqui */
const btnLogar = document.getElementById("btn-logar")

btnLogar.addEventListener("click", (event) => {
    event.preventDefault()
    window.location.replace("./pages/home/index.html");
})

const btnRegistro = document.getElementById("btn-registro")

btnRegistro.addEventListener("click", (event) => {
    event.preventDefault()
    window.location.replace("./pages/resgister/index.html");
})


