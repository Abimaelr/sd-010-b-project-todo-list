document.getElementById('criar-tarefa').addEventListener('click', inserirTarefa);

function inserirTarefa() {
    let listaOrde = document.getElementById("lista-tarefas");
    let itemNovo = document.createElement("li")
    itemNovo.innerHTML = document.getElementById('texto-tarefa').value;
  listaOrde.appendChild(itemNovo);
 
}

// site que me ajudou https://pt.stackoverflow.com/questions/375441/selecionar-um-select-pelo-valor-digitado-no-input