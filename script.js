function criarTarefa() {
    let pegaTarefa = document.getElementById("texto-tarefa").value;
    let pegaLista = document.getElementById("lista-tarefas");
    let criarItemDaLista = document.createElement("li");
    criarItemDaLista.innerText = pegaTarefa;
    console.log(pegaTarefa);
    pegaLista.appendChild(criarItemDaLista);
    pegaTarefa.value = ''
    console.log(pegaTarefa);
}