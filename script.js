function createLiText() {
  let novaLi = document.createElement('li');
  let inputTextLi = document.getElementById('texto-tarefa');
  novaLi.innerText = inputTextLi.value;
  let listaTarefa = document.getElementById('lista-tarefas');
  listaTarefa.appendChild(novaLi);
  inputTextLi.value = '';
}

let butaDicionarLista = document.getElementById('criar-tarefa');
butaDicionarLista.addEventListener('click', createLiText);

function selecionarItem(event) {
  let itemSelecionado = document.querySelector('.selected');
  if (itemSelecionado !== null) {
    itemSelecionado.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

let listaTarefa = document.getElementById('lista-tarefas');
listaTarefa.addEventListener('click', selecionarItem);

function itemDuploClick(event) {
 event.target.classList.toggle('completed');
}
listaTarefa.addEventListener('dblclick', itemDuploClick);

function LimpaLista() {
  let limpaTudo = document.getElementById('lista-tarefas');
  while (limpaTudo.firstChild) {
    limpaTudo.removeChild(limpaTudo.lastChild);
  }
}

let buttonLimpaTudo = document.getElementById('apaga-tudo');
buttonLimpaTudo.addEventListener('click', LimpaLista);

function excluirItemLista(event) {
  let elemento = document.querySelectorAll('li');
  if(elemento){
  event.target.classList.value = elemento[0].remove('lista-tarefas');
  }
}


let buttonExcluir = document.getElementById('remover-finalizados');
buttonExcluir.addEventListener('click', excluirItemLista);
