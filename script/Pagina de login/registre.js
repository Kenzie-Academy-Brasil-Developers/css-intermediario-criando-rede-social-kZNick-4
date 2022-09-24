//criando usuario 
document.getElementById("criarEmail").addEventListener("click",function(){
  let ids = Math.random().toString(16).substr(2)
  console.log(ids)
  let nome = document.getElementById("Emailnome")
  let email = document.getElementById("Emailemail")
  let senha = document.getElementById("Emailsenha")
  let trabalho = document.getElementById("Emailtrabalho")
  let img = document.getElementById("Emailimg")
  //dando push no usuario
  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
  listaUser.push({"id":ids,"user":nome.value,"email":email.value,"senha":senha.value,"stack":trabalho.value,"img":img.value })

   localStorage.setItem('listaUser', JSON.stringify(listaUser))

  //users.push({"id":ids,"user":nome.value,"email":email.value,"senha":senha.value,"stack":trabalho.value,"img":img.value })
  window.location.reload(true)
  document.getElementById("createEmail").classList.toggle("modal-on")

})