const criarBtnAdicionar = document.createElement('button');
const criarBtnDelete = document.createElement('button');
const criarBtnCompleto = document.createElement('button');
const criarBtnSalva = document.createElement('button');
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

// função cria botao de limpar
function criarBotaoDelete() {
  criarBtnDelete.id = 'apaga-tudo';
  criarBtnDelete.className = 'btnDel';
  criarBtnDelete.innerText = 'Limpar';
  sectionBtn.appendChild(criarBtnDelete);
}

// função cria botao de limpar completos
function criarBotaoCompleto() {
  criarBtnCompleto.id = 'remover-finalizados';
  criarBtnCompleto.className = 'btnCmp';
  criarBtnCompleto.innerText = 'Remover Completos';
  sectionBtn.appendChild(criarBtnCompleto);
}

// função cria botao de salvar
function criarBotaoSalvar() {
  criarBtnSalva.id = 'salvar-tarefas';
  criarBtnSalva.className = 'btnSav';
  criarBtnSalva.innerText = 'Salvar Tarefas';
  sectionBtn.appendChild(criarBtnSalva);
}

// função que cria os itens na lista
function criarTarefa() {
  const criarLi = document.createElement('li');
  criarLi.innerText = txtTarefa.value;
  ordLista.appendChild(criarLi);
  txtTarefa.value = '';
}

// função para pintar o background
// function pintarLinha() {
//   for (let index = 0; index < getItem.length; index += 1) {
//     if (getItem[index].id === 'selected') {
//       getItem[index].style.backgroundColor = 'rgb(128, 128, 128)';
//     }
//   }
// }

// função para selecionar com 1 click o item a ser pintado
function selecionaLinha(event) {
  const selector = document.querySelector('#selected');
  if (selector) {
    selector.removeAttribute = ('id');
    event.target.id = 'selected';
  } else {
    event.target.id = 'selected';
  }
//  pintarLinha();
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

// função limpa lista
function limparLista(pai) {
  while (pai.firstChild) {
    pai.removeChild(pai.lastChild);
  }
}

// função limpa completos
function LimparCompletos() {
  const itensCompletos = document.getElementsByClassName('completed');
  for (let index = 0; index < itensCompletos.length; index = 0) {
    itensCompletos[0].parentNode.removeChild(itensCompletos[0]);
  }
}

// EVENTOS
// evento ao clicar no botao "adicionar" insere um item na lista.
criarBtnAdicionar.addEventListener('click', criarTarefa);

// evento ao clicas 2 vezes sublinha o item
ordLista.addEventListener('dblclick', itemCompleto);

// evento clicar 1 vez pinta
ordLista.addEventListener('click', selecionaLinha);

// evento do botao limpar
criarBtnDelete.addEventListener('click', () => limparLista(ordLista));

criarBtnCompleto.addEventListener('click', LimparCompletos);

window.onload = function () {
  criarBotaoAdd();
  criarBotaoDelete();
  criarBotaoCompleto();
  criarBotaoSalvar();
};
