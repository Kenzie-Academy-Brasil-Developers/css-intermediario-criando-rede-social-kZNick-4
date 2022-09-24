let listaUser = []
let userValid = {
    id:"",
    user:"",
    stack:"",
    img:"",
    email:"",
    senha:""
}
listaUser = JSON.parse(localStorage.getItem("listaUser"))

document.getElementById("butaologin").addEventListener("click",function(){
    let loginEmail = document.getElementById("emailLogin").value
    let loginSenha = document.getElementById("senhalogin").value
    function indentificador(data){
    for(let i = 0; i<data.length;i++){
        let user = data[i]
        if(loginEmail == user.email && loginSenha == user.senha){
            return user
        }
    }
    }

    if(indentificador(listaUser) !== undefined ){
        alert("Login Valido")
        let usuarioLogado = indentificador(listaUser)
        let idUsuario = usuarioLogado.id
        localStorage.setItem("idLogado",idUsuario)
        window.location.replace("../../pages/home/index.html")
    }if(indentificador(users) == undefined){
        alert("Login Ivalido")
    }
});