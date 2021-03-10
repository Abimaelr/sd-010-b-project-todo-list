function criaItemLista() {
  const texto = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const criaItem = document.createElement('li');
  criaItem.innerText = texto.value;
  criaItem.classList.add('itens');
  lista.appendChild(criaItem);
  texto.value = '';
}
const botaoAdicionar = document.querySelector('#criar-tarefa');
botaoAdicionar.addEventListener('click', criaItemLista);

function removeSelected(elemento) {
  const tagItem = elemento;
  for (let index = 0; index < elemento.length; index += 1) {
    tagItem[index].style.backgroundColor = 'white';
    tagItem[index].classList.remove('selected');
  }
}
const lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', (event) => {
  const itens = document.querySelector('ol').children;
  removeSelected(itens);
  const itemSelecionado = event.target;
  itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
  itemSelecionado.classList.add('selected');
  console.log(itemSelecionado);
});

lista.addEventListener('dblclick', (event) => {
  const itemSelecionado = event.target;
  if (itemSelecionado.classList.contains('completed')) {
    itemSelecionado.classList.remove('completed');
  } else {
    itemSelecionado.classList.add('completed');
  }
});

function removeTodaLista() {
  const listaPai = document.querySelector('ol');
  const tarefas = document.querySelectorAll('li');
  for (let index = 0; index < tarefas.length; index += 1) {
    listaPai.removeChild(tarefas[index]);
  }
}
const botaoApagaTudo = document.querySelector('#apaga-tudo');
botaoApagaTudo.addEventListener('click', removeTodaLista);

function removeFinalizados() {
  const listaPai = document.querySelector('ol');
  const tarefasFinalizadas = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefasFinalizadas.length; index += 1) {
    listaPai.removeChild(tarefasFinalizadas[index]);
  }
}
const botaoApagaFinalizados = document.querySelector('#remover-finalizados');
botaoApagaFinalizados.addEventListener('click', removeFinalizados);
