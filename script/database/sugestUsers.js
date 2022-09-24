//ID dos usuários sugeridos para seguir
const sugestUsers = [3, 7, 6];
function usuariosSugeridos(arr){
    for(let i = 0; i<users.length; i++){
    for(let j = 0; j<arr.length; j++){
    if(users[i].id == arr[j]){
        const asideDiv = document.querySelector(".user-sugeridos")
        const userSugeridos = document.createElement("div")
        userSugeridos.classList.add("user-suger")
        const divImg = document.createElement("div")
        divImg.classList.add("user-img")
        const img = document.createElement("img")
        const divDados = document.createElement("div")
        divDados.classList.add("user-dados")
        const nomeUser = document.createElement("h2")
        const stackUser = document.createElement("p")
        const divButao = document.createElement("div")
        divButao.classList.add("user-botoes")
        const butao = document.createElement("button")
        butao.classList.add("btn-seguir")
        asideDiv.appendChild(userSugeridos)
        userSugeridos.appendChild(divImg)
        divImg.appendChild(img)
        userSugeridos.appendChild(divDados)
        divDados.appendChild(nomeUser)
        divDados.appendChild(stackUser)
        userSugeridos.appendChild(divButao)
        divButao.appendChild(butao)
    img.src = users[i].img
    nomeUser.innerText = users[i].user
    stackUser.innerText = users[i].stack||""
    butao.innerText = "seguir"
    }
}}
}
usuariosSugeridos(sugestUsers)