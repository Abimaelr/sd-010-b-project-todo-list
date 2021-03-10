const leBoby = document.querySelector('body');
const leOl = document.querySelector('#lista-tarefas');

function addHeader() {
  const aux = document.createElement('header');
  aux.innerText = 'Minha Lista de Tarefas';
  leBoby.appendChild(aux);
}
addHeader();

function addP() {
  const aux = document.createElement('p');
  aux.id = 'funcionamento';
  aux.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  leBoby.appendChild(aux);
}
addP();

function addInput() {
  const aux = document.createElement('input');
  aux.id = 'texto-tarefa';
  leBoby.appendChild(aux);
}
addInput();

function addButton() {
  const aux = document.createElement('button');
  aux.id = 'criar-tarefa';
  aux.innerText = 'Adicionar';
  leBoby.appendChild(aux);
}
addButton();

function addOl() {
  const aux = document.createElement('ol');
  aux.id = 'lista-tarefas';
  leBoby.appendChild(aux);
}
addOl();

function addLista() {
  const auxInput = document.querySelector('#texto-tarefa');
  if (auxInput.value !== '') {
    const auxOl = document.querySelector('#lista-tarefas');
    const auxLi = document.createElement('li');
    auxLi.innerText = auxInput.value;
    auxLi.className = 'ncinca ncompleted';
    auxOl.appendChild(auxLi);
    auxInput.value = '';
  }
}
const auxButton = document.querySelector('#criar-tarefa');
auxButton.addEventListener('click', addLista);
/* /////////////////// */
function clearCompleted() {
  const aux = document.querySelectorAll('li');
  for (let i = 0; i < aux.length; i += 1) {
    const auxSalveCom = aux[i].className.split(' ')[1];
    aux[i].className = `ncinca ${auxSalveCom}`;
  }
}
function pintarCinca(evento) {
  const aux = evento.target;
  const auxSalveCin = aux.className.split(' ')[0];
  const auxSalve = aux.className.split(' ')[1];
  clearCompleted();
  if (aux.className !== auxSalveCin) {
    aux.className = `cinca ${auxSalve}`;
  } else {
    aux.className = `ncinca ${auxSalve}`;
  }
}
const auxClickLi = document.querySelector('#lista-tarefas');
auxClickLi.addEventListener('click', pintarCinca);

function dbClick(event) {
  const aux = event.target;
  const auxSalve = aux.className.split(' ')[0];
  const auxSalveCom = aux.className.split(' ')[1];
  if (auxSalveCom !== 'completed') {
    aux.className = `${auxSalve} completed`;
  } else {
    aux.className = `${auxSalve} ncompleted`;
  }
}
const auxClickLi1 = document.querySelector('#lista-tarefas');
auxClickLi1.addEventListener('dblclick', dbClick);
/* ////////////////////qqqq */
function addButtonClear() {
  const aux = document.createElement('button');
  aux.id = 'apaga-tudo';
  aux.innerText = 'Limpar Lista';
  leBoby.appendChild(aux);
}
addButtonClear();

function apagaLista() {
  const aux = document.querySelector('#lista-tarefas');
  aux.innerHTML = '';
}
const auxButtonClear = document.querySelector('#apaga-tudo');
auxButtonClear.addEventListener('click', apagaLista);

function addButtonfinalizados() {
  const aux = document.createElement('button');
  aux.id = 'remover-finalizados';
  aux.innerText = 'Limpar Completos';
  leBoby.appendChild(aux);
}
addButtonfinalizados();

function addButtonSalvar() {
  const aux = document.createElement('button');
  aux.id = 'salvar-tarefas';
  aux.innerText = 'Salvar Lista';
  leBoby.appendChild(aux);
}
addButtonSalvar();

function removeFinalizados() {
  const aux = document.querySelectorAll('.completed');
  for (let i = 0; i < aux.length; i += 1) {
    aux[i].remove();
  }
}
const auxRemoveFinalizados = document.querySelector('#remover-finalizados');
auxRemoveFinalizados.addEventListener('click', removeFinalizados);
const auxSalvar = document.querySelector('#salvar-tarefas');
auxSalvar.addEventListener('click', salvarDados);
function salvarDados() {
  const auxLi = document.querySelectorAll('li');
  const aux = [];
  for (let i = 0; i < auxLi.length; i += 1) {
    aux[i] = auxLi[i].innerText;
  }
  localStorage.setItem('ListaSalva', JSON.stringify(aux));
}
if (localStorage.ListaSalva) {
  const aux = JSON.parse(localStorage.getItem('ListaSalva'));
  for (let i = 0; i < aux.length; i += 1) {
    const ol = document.querySelector('#lista-tarefas');
    const auxRecupera = document.createElement('li');
    auxRecupera.innerHTML = aux[i];
    ol.appendChild(auxRecupera);
  }
}
