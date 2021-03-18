function spawn(element) {
  const main = document.querySelector('main');
  main.appendChild(element);
  return main;
}

const title = document.createElement('header');
title.id = 'title';
title.innerText = 'Minha Lista de Tarefas';
spawn(title);

const p = document.createElement('p');
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
spawn(p);

const input = document.createElement('input');
input.id = 'texto-tarefa';
spawn(input);

const order = document.createElement('ol');
order.id = 'lista-tarefas';
spawn(order);

const createB = document.createElement('button');
createB.id = 'criar-tarefa';
spawn(createB);
createB.addEventListener('click', function () {
  order.appendChild(document.createElement('li'));
  order.lastChild.innerText = input.value;
  input.value = '';
});

const highlight = document.getElementsByClassName('highl');
order.addEventListener('click', function (event) {
  if (highlight.element !== 1) {
    event.target.className = 'highl';
    highlight[0].style.backgroundColor = 'rgb(128, 128, 128)';
  }
  highlight[0].style.backgroundColor = 'white';
  highlight[0].className = '';
  event.target.className = 'highl';
  highlight[0].style.backgroundColor = 'rgb(128, 128, 128)';
});

order.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
  if (event.target.classList.contains('completed')) {
  }  else {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = 'initial';
  }
});
