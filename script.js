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
button.innerHTML = 'Adicionar';
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
      newItem.classList.add('task');
      inputValue.value = '';
      ordenedList.appendChild(newItem);
    }
  });
}
addNewTask();

function getTask() {
  const list = document.getElementsByClassName('task');
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener('click', () => {
      console.log('worked');
      // event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
getTask();

const clearList = createElement('button');
clearList.id = 'apaga-tudo';
clearList.innerHTML = 'Limpar lista';
main.appendChild(clearList);
clearList.addEventListener('click', () => {
  ordenedList.innerHTML = '';
});
