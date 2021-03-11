function criarTarefa() {
    let pegaTextoTarefa = document.getElementById("texto-tarefa").value;
    let pegaLista = document.getElementById("lista-tarefas");
    let criarItemDaLista = document.createElement("li");
    criarItemDaLista.innerText = pegaTextoTarefa;
    criarItemDaLista.classList.add("item-lista");

    let pegaTarefa = document.getElementById("texto-tarefa");
    pegaTarefa.value = ""
    pegaLista.appendChild(criarItemDaLista);
    pintar()
}
function pintar() {
  let encontraFundoItem = document.getElementsByClassName("fundo-Item")[0];
let encontraItensDaLista = document.querySelectorAll('.item-lista');
encontraItensDaLista.forEach((element) => {
        element.addEventListener('click', (event) => {
        event.target.classList.add("fundo-Item")
    })
    })
  }
function apagarTudo() {
    let pegarLi = document.querySelectorAll('.item-lista');
    for (let i = 0;i <= pegarLi.length;i++) {
        pegarLi[i].remove();
    }
}