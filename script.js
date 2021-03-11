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
input.id = 'texto-area';
main.appendChild(input);
