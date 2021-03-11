document.getElementById('criar-tarefa').addEventListener('click', inserirTarefa);

function inserirTarefa() {
  let listaOrde = document.getElementById("lista-tarefas");
  let itemNovo = document.createElement("li")
  itemNovo.innerHTML = document.getElementById('texto-tarefa').value;
  listaOrde.appendChild(itemNovo).classList.add('itens');
  document.getElementById('texto-tarefa').value = "";
}

// site que me ajudou https://pt.stackoverflow.com/questions/375441/selecionar-um-select-pelo-valor-digitado-no-input

let cinza = document.getElementById('lista-tarefas');
cinza.addEventListener('click', function(event){
    let cinza2 = document.getElementsByClassName('itens');
    for (let index = 0; index < cinza2.length; index += 1) {
    document.getElementsByClassName('itens')[index].classList.remove('selected');
    event.target.classList.add('selected');
    }
    
})

// for (let index = 0; index < palet.length; index += 1) {
//     palet[index].addEventListener('click', function (event) {
//       document.getElementsByClassName('selected')[0].classList.remove('selected');
      