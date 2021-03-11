document.getElementById('criar-tarefa').addEventListener('click', inserirTarefa);



function inserirTarefa() {
    let listaOrde = document.getElementById("lista-tarefas");
    let itemNovo = document.createElement("li")
    itemNovo.innerHTML = document.getElementById('texto-tarefa').value;
  listaOrde.appendChild(itemNovo);
 
}
