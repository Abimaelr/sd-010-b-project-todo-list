const leBoby = document.querySelector('body');
function addHeader() {
  let aux = document.createElement('header');
  aux.innerText = 'Minha Lista de Tarefas';
  leBoby.appendChild(aux);
}

addHeader();
function addP() {
  let aux = document.createElement('p');
  aux.id = 'funcionamento';
  aux.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  leBoby.appendChild(aux);
}

addP();
function addInput() {
  let aux = document.createElement('input');
  aux.id = 'texto-tarefa';
  leBoby.appendChild(aux);
}

addInput();
function addButton() {
  let aux = document.createElement('button');
  aux.id = 'criar-tarefa';
  aux.innerText = 'Adicionar';
  leBoby.appendChild(aux);
}

addButton();
function addOl() {
  let aux = document.createElement('ol');
  aux.id = 'lista-tarefas';
  leBoby.appendChild(aux);
}

addOl();
let auxButton = document.querySelector('#criar-tarefa');
auxButton.addEventListener('click', addLista);
function addLista() {
  let auxInput = document.querySelector('#texto-tarefa');
    if(auxInput.value !== '') {
    let auxOl = document.querySelector('#lista-tarefas');
    let auxLi = document.createElement('li');
    auxLi.innerText = auxInput.value;
    auxOl.appendChild(auxLi);
    auxInput.value = '';
  }
}
///////////////////
let auxClickLi = document.querySelector('#lista-tarefas');
auxClickLi.addEventListener('click', pintarCinca);
function pintarCinca(evento) {
  let aux = evento.target;
  if(aux.className !== 'cinca'){
    aux.className = 'cinca';
  } else {
    aux.className = '';
  }
}
let auxClickLi1 = document.querySelector('#lista-tarefas');
auxClickLi1.addEventListener('dblclick', dbClick);
function dbClick(event) {
  let aux = event.target;

  if(aux.className !== 'completed'){
    aux.className = 'completed'
  } else {
    aux.className = '';
  }
}
////////////////////qqqq
function addButtonClear() {
  let aux = document.createElement('button');
  aux.id = 'apaga-tudo';
  aux.innerText = 'Limpar Lista'
  leBoby.appendChild(aux);
}
addButtonClear();
let auxButtonClear = document.querySelector('#apaga-tudo');
auxButtonClear.addEventListener('click', apagaLista);
function apagaLista() {
  let aux = document.querySelector('#lista-tarefas');
  aux.innerHTML = '';
}