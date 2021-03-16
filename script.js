function botao() {
  let bt = document.querySelector("#criar-tarefa");
  let inputtexto = document.querySelector("#texto-tarefa");

  let listapai = document.querySelector("#lista-tarefas");
  bt.addEventListener("click", function() {
    let lista = document.createElement("li");
    lista.innerHTML = inputtexto.value
    listapai.appendChild(lista)
    inputtexto.value = "";

  })
}
botao()

function selecionandocores() {
  let lista = document.querySelector("#lista-tarefas")

  lista.addEventListener("click", function(event) {
    let selecionada = document.querySelector(".selected");
    if (selecionada !== null) {
      selecionada.classList.remove("selected");

      event.target.classList.add("selected")
    } else {

      event.target.classList.add("selected")

    }
  })
}
selecionandocores()