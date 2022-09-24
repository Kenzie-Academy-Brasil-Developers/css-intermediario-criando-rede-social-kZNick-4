const modalbutton = document.querySelectorAll("[data-control-modal]")

for(let i = 0; i <modalbutton.length; i++){
    modalbutton[i].addEventListener("click",function(){
       let modalcontrol = modalbutton[i].getAttribute("data-control-modal")
       document.getElementById(modalcontrol).classList.toggle("modal-on")
    }
)
}
const esqueciSenha = document.getElementById("esqueciSenha")
esqueciSenha.addEventListener("click",function(){
    document.getElementById("login").classList.toggle("modal-on")
    document.getElementById("recupearsenha").classList.toggle("modal-on")
    let fecharsenha = document.getElementById("fecharsenha")
   })
   const fecharsenha = document.getElementById("fecharsenha")
   fecharsenha.addEventListener("click",function(){document.getElementById("recupearsenha").classList.toggle("modal-on")})