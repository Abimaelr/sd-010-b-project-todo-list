const criarBtnAdicionar = document.createElement('button');
const txtTarefa = document.querySelector('#texto-tarefa');
const ordLista = document.querySelector('#lista-tarefas');
const sectionInput = document.querySelector('#section-input');
const getItem = document.getElementsByTagName('li');

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
  ordLista.appendChild(criarLi);
  txtTarefa.value = '';
}

// função para pintar o background
function pintarLinha() {
  for (let index = 0; index < getItem.length; index += 1) {
    if (getItem[index].id === 'selected') {
      getItem[index].style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

// função para selecionar com 1 click o item a ser pintado
function selecionaLinha(event) {
  event.target.id = 'selected';
  pintarLinha();
}

// função para riscar
function itemCompleto(evento) {
  const unid = evento.target;
  if (unid.className === 'completed') {
    unid.className = '';
    unid.style.textDecoration = '';
  } else {
    unid.className = 'completed';
  }
  riscar();
}
// riscando
function riscar() {
  for (let index = 0; index < getItem.length; index += 1) {
    if (getItem[index].className === 'completed') {
      getItem[index].style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  }
}

// evento ao clicar no botao "adicionar" insere um item na lista.
criarBtnAdicionar.addEventListener('click', criarTarefa);

ordLista.addEventListener('dblclick', itemCompleto);

ordLista.addEventListener('click', selecionaLinha);

window.onload = function () {
  criarButao();
};
