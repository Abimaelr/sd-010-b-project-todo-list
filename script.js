function criarTarefa() {
    let pegaTextoTarefa = document.getElementById("texto-tarefa").value;
    let pegaLista = document.getElementById("lista-tarefas");
    let criarItemDaLista = document.createElement("li");
    criarItemDaLista.innerText = pegaTextoTarefa;

    pegaLista.appendChild(criarItemDaLista);
    let pegaTarefa = document.getElementById("texto-tarefa");
    pegaTarefa.value = ""
    console.log(pegaTarefa);
    
}