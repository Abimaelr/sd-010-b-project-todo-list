function spawn(element) {
  const elementMain = document.querySelector('main');
  elementMain.appendChild(element);
  return elementMain;
}

const title = document.createElement('header');
title.id = 'title';
title.innerText = 'Minha Lista de Tarefas';
spawn(title);

const p = document.createElement('p');
p.id = 'funcionamento';
p.innerText = 'Clique duas vezes em um site para marcá-lo como completo';
spawn(p);
