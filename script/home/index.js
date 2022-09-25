const postsmain = document.getElementById("postspublicado")
//indetificador qual perfil logado 
let idDoUsuario = localStorage.getItem("idLogado")
function usuarioLogado(usuarios){
  for(let i = 0; i<usuarios.length; i++){
    let usuario = usuarios[i]
    if(usuario.id == idDoUsuario){
       return usuario
    }
  }
  
}
let loggedUser = usuarioLogado(listaUser) 

document.getElementById("butaoSair").addEventListener("click",function(){
  localStorage.removeItem("idLogado")
  window.location.href = "../../index.html"
})
//dados do perfil logado
const principal = document.querySelector(".post-header")
const imgpost = document.createElement("img")
const postTitle = document.createElement("div")
postTitle.classList.add("post-title")
const postName = document.createElement("h2")
const userStack = document.createElement("p")
principal.appendChild(imgpost)
principal.appendChild(postTitle)
postTitle.appendChild(postName)
postTitle.appendChild(userStack)
imgpost.src = loggedUser.img
postName.innerText = loggedUser.user
userStack.innerText = loggedUser.stack

//carregando posts
function crregandoPosts(usuario, datapost){
for(let i = 0; i<datapost.length; i++){
for(let j = 0; j<usuario.length; j++){
    if(usuario[j].id === datapost[i].user){
    const postheader = document.createElement("div")
    const divPosters = document.createElement("div")
    postheader.classList = "post-header"
    const postPimg = document.createElement("img")
    const posDivtitle = document.createElement("div")
    posDivtitle.classList = "post-title"
    const nomeuserPost = document.createElement("h2")
    const stackPost = document.createElement("p")
    const postConteudo = document.createElement("div")
    postConteudo.classList = "post-content"
    const postConteudoTitle = document.createElement("h2")
    const postConteudoparagrafo = document.createElement("p")
    postConteudoparagrafo.classList = "conteudo-post"
    const divButoes = document.createElement("div");
    divButoes.classList = ("post-botoes");
    const botaoAbrirPost = document.createElement("button");
    botaoAbrirPost.classList = ("btn-abrir")
    botaoAbrirPost.id = datapost[i].id_post
    const imgCoraçao = document.createElement("img")
    imgCoraçao.classList = ("coracao")
    postsmain.appendChild(divPosters)
    divPosters.appendChild(postheader)
    postheader.appendChild(postPimg)
    postheader.appendChild(posDivtitle)
    posDivtitle.appendChild(nomeuserPost)
    posDivtitle.appendChild(stackPost)
    divPosters.appendChild(postConteudo)
    postConteudo.appendChild(postConteudoTitle)
    postConteudo.appendChild(postConteudoparagrafo)
    divPosters.appendChild(divButoes)
    divButoes.appendChild(botaoAbrirPost)
    divButoes.appendChild(imgCoraçao)
    postPimg.src = usuario[j].img
    nomeuserPost.innerText = usuario[j].user
    stackPost.innerText = usuario[j].stack
    postConteudoTitle.innerText = datapost[i].title
    postConteudoparagrafo.innerText = datapost[i].text
    botaoAbrirPost.innerText = "Abrir Post"
    imgCoraçao.src = "../../assets/img/coracao.png"
    }
  }
 }
}
let AllPosts = JSON.parse(localStorage.getItem('AllPosts') || "[]")
//console.log(AllPosts == "")
if(AllPosts == ""){
for(let i = 0; i<posts.length; i++){
  AllPosts.push(posts[i])
}
}
localStorage.setItem('AllPosts', JSON.stringify(AllPosts))
crregandoPosts(listaUser,AllPosts)
crregandoPosts(users,AllPosts)
AllPosts.reverse();
console.log(AllPosts)
//Butao de postar post
document.getElementById("Postarpost").addEventListener("click",function(){
  let titlepost = document.querySelector(".form-post-input").value
  let conteudopost = document.querySelector(".form-post-textarea").value
  console.log(conteudopost >= 10)
  if(titlepost.length >= 5 && conteudopost.length >= 10){
  AllPosts.push({
      id_post: AllPosts.length + 1,
      user:  loggedUser.id,
      title: titlepost,
      text: conteudopost
  })
  localStorage.setItem('AllPosts', JSON.stringify(AllPosts))
  window.location.reload()
 }else{
  alert("Preencha todos os campos abaixo")
 }
})
