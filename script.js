window.onload = function () {
};

function createElement(tag) {
  const element = document.createElement(tag);
  return element;
}

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

const ordenedList = createElement('ol');
ordenedList.id = 'lista-tarefas';
main.appendChild(ordenedList);

const button = createElement('button');
button.innerHTML = 'Criar tarefa';
button.id = 'criar-tarefa';
main.appendChild(button);

function addNewTask() {
  const inputValue = document.getElementById('texto-tarefa');
  // const button = document.getElementById('cria-tarefa');
  // const ordenedList = document.getElementById('lista-tarefas');

  button.addEventListener('click', () => {
    // console.log(inputValue.value);
    if (inputValue.value.length > 0) {
      const newItem = createElement('li');
      newItem.innerHTML = inputValue.value;
      inputValue.value = '';
      ordenedList.appendChild(newItem);
    }
  });
}
addNewTask();
