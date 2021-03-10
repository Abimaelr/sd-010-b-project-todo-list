const criarBtnAdicionar = document.createElement('button');
const criarBtnDelete = document.createElement('button');
const txtTarefa = document.querySelector('#texto-tarefa');
const ordLista = document.querySelector('#lista-tarefas');
const sectionInput = document.querySelector('#section-input');
const getItem = document.getElementsByTagName('li');
const sectionBtn = document.querySelector('#section-btn');

// função cria botao adicionar os itens na lista
function criarBotaoAdd() {
  criarBtnAdicionar.id = 'criar-tarefa';
  criarBtnAdicionar.className = 'btnAdd';
  criarBtnAdicionar.innerText = 'Adicionar';
  sectionInput.appendChild(criarBtnAdicionar);
}

function criarBotaoDelete() {
  criarBtnDelete.id = 'apaga-tudo';
  criarBtnDelete.className = 'btnDel';
  criarBtnDelete.innerText = 'Limpar';
  sectionBtn.appendChild(criarBtnDelete);
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
  const unit = event.target;
  unit.id = 'selected';
  pintarLinha();
}

// riscando
function riscar() {
  for (let index = 0; index < getItem.length; index += 1) {
    if (getItem[index].className === 'completed') {
      getItem[index].style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  }
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

function limparLista(pai) {
  while (pai.firstChild) {
    pai.removeChild(pai.lastChild);
  }
}

// evento ao clicar no botao "adicionar" insere um item na lista.
criarBtnAdicionar.addEventListener('click', criarTarefa);

// evento ao clicas 2 vezes sublinha o item
ordLista.addEventListener('dblclick', itemCompleto);

// evento clicar 1 vez pinta
ordLista.addEventListener('click', selecionaLinha);

// evento do botao limpar
criarBtnDelete.addEventListener('click', () => limparLista(ordLista));

window.onload = function () {
  criarBotaoAdd();
  criarBotaoDelete();
};
