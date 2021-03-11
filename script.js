document.getElementById('criar-tarefa').addEventListener('click', inserirTarefa);

function inserirTarefa() {
  let listaOrde = document.getElementById("lista-tarefas");
  let itemNovo = document.createElement("li")
  itemNovo.innerHTML = document.getElementById('texto-tarefa').value;
  listaOrde.appendChild(itemNovo).classList.add('itens');
  document.getElementById('texto-tarefa').value = "";
}




// site que me ajudou https://pt.stackoverflow.com/questions/375441/selecionar-um-select-pelo-valor-digitado-no-input

let listaOrdenada = document.getElementsByClassName('itens');
for (let index = 0; index < listaOrdenada.length; index += 1) {
  listaOrdenada[index].addEventListener('click', function (event) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    event.target.classList.add('selected');

  })
}
