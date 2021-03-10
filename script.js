const btnAdd = document.querySelector('#criar-tarefa');
const txtTarefa = document.querySelector('#texto-tarefa');
const ordLista = document.querySelector('#lista-tarefas');

function criarTarefa() {
  const criarLi = document.createElement('li');
  criarLi.innerText = txtTarefa.value;
  criarLi.setAttribute('class', 'item-lista');
  ordLista.appendChild(criarLi);
  txtTarefa.value = '';
}

btnAdd.addEventListener('click', criarTarefa);
