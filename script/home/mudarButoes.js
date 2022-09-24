const btnsseguir = document.querySelectorAll('.btn-seguir');

btnsseguir.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    //console.log(event.currentTarget.textContent);
    if(event.currentTarget.classList.contains("btn-seguindo")){
        event.currentTarget.classList.remove("btn-seguindo")
        event.currentTarget.innerHTML = "seguir"
    }else{
    event.currentTarget.classList.toggle("btn-seguindo")
    event.currentTarget.innerHTML = "Seguindo"}
  })
)

const coracao = document.querySelectorAll('.coracao');

coracao.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    if(event.currentTarget.classList.contains("coracao-vermelho")){
        event.currentTarget.classList.remove("coracao-vermelho")
        event.currentTarget.src = "../../assets/img/coracao.png"
    }else{
    event.currentTarget.classList.toggle("coracao-vermelho")
    event.currentTarget.src = "../../assets/img/coracaoVermelho.png"
    }
  })
)