function createElement(tag) {
  const element = document.createElement(tag);
  return element;
}

// Montagem do HTML:
const main = document.getElementById('main');

const title = createElement('h1');
title.innerHTML = 'Minha Lista de Tarefas';
document.querySelector('header').appendChild(title);
title.id = 'title';

const funcionamento = createElement('p');
funcionamento.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
main.appendChild(funcionamento);
funcionamento.id = 'funcionamento';

const input = createElement('input');
input.id = 'texto-tarefa';
main.appendChild(input);

const button = createElement('button');
button.innerHTML = 'Adicionar';
button.id = 'criar-tarefa';
main.appendChild(button);

const ordenedList = createElement('ol');
ordenedList.id = 'lista-tarefas';
main.appendChild(ordenedList);

const clearList = createElement('button');
clearList.id = 'apaga-tudo';
clearList.innerHTML = 'Limpar lista';
main.appendChild(clearList);

const clearDone = createElement('button');
clearDone.id = 'remover-finalizados';
clearDone.innerHTML = 'Remover finalizados';
main.appendChild(clearDone);

// Adcionar:
function addNewTask() {
  button.addEventListener('click', () => {
    if (input.value.length > 0) {
      const newItem = createElement('li');
      newItem.innerHTML = input.value;
      newItem.classList.add('task');
      input.value = '';
      ordenedList.appendChild(newItem);
    }
  });
}
addNewTask();

// Seleciona tarefa na lista:
function selectTask() {
  ordenedList.addEventListener('click', (e) => {
    for (let i = 0; i < ordenedList.children.length; i += 1) {
      if (ordenedList.children[i].classList.contains('select')) {
        ordenedList.children[i].classList.remove('select');
        e.target.classList.add('select');
      }
      e.target.classList.add('select');
    }
  });
}
selectTask();

// Marca tarefa concluida:
function taskDone() {
  ordenedList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
}
taskDone();

// Limpa lista:
function clearAll() {
  clearList.addEventListener('click', () => {
    ordenedList.innerHTML = '';
  });
}
clearAll();
const doneItens = document.getElementById('lista-tarefas').childNodes;

// Remove finalizados:
function removeDone() {
  clearDone.addEventListener('click', () => {
    for (let i = 0; i < doneItens.length; i += 1) {
      if (doneItens[i].classList.contains('completed')) {
        doneItens[i].parentNode.removeChild(doneItens[i]);
      }
    }
  });
}
removeDone();

window.onload = () => {
};

// npm run cypress:open => eveluator job local

// btn up/down:
// const selected = document.querySelector('.selected');
// const lower = selected.nextElementSibling;
// taskList.removeChild(lower);
// selected.insertAdjacentElement('beforebegin', lower);

// const selected = document.querySelector('.selected');
//   if (selected && selected.previousSibling) {
//     const upper = selected.previousSibling;
//     taskList.removeChild(upper);
//     selected.insertAdjacentElement('afterend', upper);
//   }
