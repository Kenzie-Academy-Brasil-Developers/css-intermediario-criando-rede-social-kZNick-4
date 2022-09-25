const btns = document.querySelectorAll('.btn-abrir');
btns.forEach((btn) =>
  btn.addEventListener('click', function(event){
    let idButao = event.currentTarget.id
    const modalPost = document.querySelector(".div-modal")
    modalPost.innerHTML = ""
    document.querySelector(".modal-post").classList.toggle("modal-on")
    //criando conteudo do modal
    function CreanteModal (conteudo,usuario){
    for(let i = 0; i<conteudo.length; i++){
       let idPost = conteudo[i].id_post
       let idUser =conteudo[i].user
       for(let j= 0; j<usuario.length; j++){
        if(usuario[j].id == idUser){
             if(idPost == idButao){
                const modalPost = document.querySelector(".div-modal")
                const postheader = document.createElement("div")
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
                const butaoFechar = document.createElement("button")
                butaoFechar.classList = "butao-fechar-modal"
                modalPost.appendChild(postheader)
                postheader.appendChild(postPimg)
                postheader.appendChild(posDivtitle)
                posDivtitle.appendChild(nomeuserPost)
                posDivtitle.appendChild(stackPost)
                modalPost.appendChild(postConteudo)
                postConteudo.appendChild(postConteudoTitle)
                postConteudo.appendChild(postConteudoparagrafo)
                modalPost.appendChild(butaoFechar)
                postConteudoTitle.innerText = conteudo[i].title
                postConteudoparagrafo.innerText = conteudo[i].text
                nomeuserPost.innerText = usuario[j].user
                stackPost.innerText = usuario[j].stack
                postPimg.src = usuario[j].img
                butaoFechar.innerText ="x"
                butaoFechar.addEventListener('click', function(){
                    document.querySelector(".modal-post").classList.toggle("modal-on")
                }
                )
        }
    }}}}
    CreanteModal (AllPosts,listaUser)
    CreanteModal (AllPosts,users)
  })
);
