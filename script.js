window.onload = function () {
};

function createElement(tag) {
  const element = document.createElement(tag);
  return element;
}

// Montagem do HTML:
const main = document.getElementById('main');

const title = createElement('h1');
title.innerHTML = 'Minha Lista de Tarefas';
main.appendChild(title);
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

// Adcionar:
function addNewTask() {
  const inputValue = document.getElementById('texto-tarefa');

  button.addEventListener('click', () => {
    if (inputValue.value.length > 0) {
      const newItem = createElement('li');
      newItem.innerHTML = inputValue.value;
      newItem.classList.add('task');
      inputValue.value = '';
      ordenedList.appendChild(newItem);
    }
  });
}
addNewTask();

// Seleciona tarefa na lista:
function getTask() {
  ordenedList.addEventListener('click', (e) => {
    // for (let i = 0; i < ordenedList.length; i += 1) {
    if (e.target.classList.contains('select')) {
      e.target.classList.remove('select');
    } else {
      e.target.classList.add('select');
    }
    // }
  });
}

getTask();

function taskDone() {
  ordenedList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('done')) {
      e.target.classList.remove('done');
    } else {
      e.target.classList.add('done');
    }
  });
}
taskDone();

// Limpa lista:
const clearList = createElement('button');

clearList.id = 'apaga-tudo';
clearList.innerHTML = 'Limpar lista';
main.appendChild(clearList);

clearList.addEventListener('click', () => {
  ordenedList.innerHTML = '';
});
