const leBoby = document.querySelector('body');

function addButtons(tag, tId, tInner) {
  const aux = document.createElement(tag);
  aux.id = tId;
  aux.innerText = tInner;
  leBoby.appendChild(aux);
}

addButtons('header', '', 'Minha Lista de Tarefas');
addButtons('p', 'funcionamento', 'Clique duas vezes em um item para marcá-lo como completo');
addButtons('input', 'texto-tarefa', '');
addButtons('button', 'criar-tarefa', 'Adicionar');
addButtons('ol', 'lista-tarefas', '');
addButtons('button', 'remover-selecionado', 'remover selecionado');
addButtons('button', 'mover-cima', 'mover-baixo');
addButtons('button', 'mover-cima', 'mover-baixo');
addButtons('button', 'remover-finalizados', 'Limpar Completos');
addButtons('button', 'apaga-tudo', 'Limpar Lista');
addButtons('button', 'salvar-tarefas', 'Salvar Lista');
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
const leOl = document.querySelector('#lista-tarefas');
leOl.addEventListener('click', pintarCinca);

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
leOl.addEventListener('dblclick', dbClick);

function apagaLista() {
  const aux = document.querySelector('#lista-tarefas');
  aux.innerHTML = '';
}
const auxButtonClear = document.querySelector('#apaga-tudo');
auxButtonClear.addEventListener('click', apagaLista);

function removeFinalizados() {
  const aux = document.querySelectorAll('.completed');
  for (let i = 0; i < aux.length; i += 1) {
    aux[i].remove();
  }
}

function salvarDados() {
  const auxLi = document.querySelectorAll('li');
  const aux = [];
  for (let i = 0; i < auxLi.length; i += 1) {
    aux[i] = auxLi[i].innerText;
  }
  localStorage.setItem('ListaSalva', JSON.stringify(aux));
}

const auxRemoveFinalizados = document.querySelector('#remover-finalizados');
auxRemoveFinalizados.addEventListener('click', removeFinalizados);
const auxSalvar = document.querySelector('#salvar-tarefas');
auxSalvar.addEventListener('click', salvarDados);

if (localStorage.ListaSalva) {
  const aux = JSON.parse(localStorage.getItem('ListaSalva'));
  for (let i = 0; i < aux.length; i += 1) {
    const ol = document.querySelector('#lista-tarefas');
    const auxRecupera = document.createElement('li');
    auxRecupera.innerHTML = aux[i];
    ol.appendChild(auxRecupera);
  }
}
