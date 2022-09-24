const btns = document.querySelectorAll('.btn-abrir');
btns.forEach((btn) =>
  btn.addEventListener('click', function(event){
    let idButao = event.currentTarget.id
    const modalPost = document.querySelector(".div-modal")
    modalPost.innerHTML = ""
    document.querySelector(".modal-post").classList.toggle("modal-on")
    for(let i = 0; i<posts.length; i++){
       let idPost = posts[i].id_post
       let idUser =posts[i].user
       for(let j= 0; j<users.length; j++){
        if(users[j].id == idUser){
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
                postConteudoTitle.innerText = posts[i].title
                postConteudoparagrafo.innerText = posts[i].text
                nomeuserPost.innerText = users[j].user
                stackPost.innerText = users[j].stack
                postPimg.src = users[j].img
                butaoFechar.innerText ="x"
                butaoFechar.addEventListener('click', function(){
                    document.querySelector(".modal-post").classList.toggle("modal-on")
                }
                )
        }
    }}}
  })
);
