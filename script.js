window.onload = function () {
};

function createElement(tag) {
  const element = document.createElement(tag);
  return element;
}

const main = document.getElementById('main');

const title = createElement('header');
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
button.innerHTML = 'Cria tarefa';
button.id = 'cria-tarefa';
main.appendChild(button);
