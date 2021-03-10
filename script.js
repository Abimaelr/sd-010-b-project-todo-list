const criarBtnAdicionar = document.createElement('button');
const txtTarefa = document.querySelector('#texto-tarefa');
const ordLista = document.querySelector('#lista-tarefas');
const sectionInput = document.querySelector('#section-input');
const getItem = document.getElementsByClassName('item-lista');

// função cria botao adicionar os itens na lista
function criarButao() {
  criarBtnAdicionar.id = 'criar-tarefa';
  criarBtnAdicionar.className = 'btnAdd';
  criarBtnAdicionar.innerText = 'Adicionar';
  sectionInput.appendChild(criarBtnAdicionar);
}

// função que cria os itens na lista
function criarTarefa() {
  const criarLi = document.createElement('li');
  criarLi.innerText = txtTarefa.value;
  criarLi.setAttribute('class', 'item-lista');
  ordLista.appendChild(criarLi);
  txtTarefa.value = '';
}

function pintarLinha() {
  for (let index = 0; index < getItem.length; index += 1) {
    if (getItem[index].id === 'selected') {
      getItem[index].style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

function selecionaLinha(li) {
  li.target.id = 'selected';
  pintarLinha();
}

// evento ao clicar no botao "adicionar" insere um item na lista.
criarBtnAdicionar.addEventListener('click', criarTarefa);

ordLista.addEventListener('click', selecionaLinha);

window.onload = function () {
  criarButao();
};
