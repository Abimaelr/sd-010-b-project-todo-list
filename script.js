function criarTarefa() {
    let pegaTextoTarefa = document.getElementById("texto-tarefa").value;
    let pegaLista = document.getElementById("lista-tarefas");
    let criarItemDaLista = document.createElement("li");
    criarItemDaLista.innerText = pegaTextoTarefa;
    criarItemDaLista.classList.add("item-lista")
    let pegaTarefa = document.getElementById("texto-tarefa");
    pegaTarefa.value = ""
    pegaLista.appendChild(criarItemDaLista);
    
}
function apagarTudo() {
    let pegarLi = document.querySelectorAll('.item-lista');
    for (let i = 0;i <= pegarLi.length;i++) {
        pegarLi[i].remove();
    }
}