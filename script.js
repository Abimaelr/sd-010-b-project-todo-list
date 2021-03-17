
function spawn(element) {
  const elementMain = document.querySelector('main');
  elementMain.appendChild(element);
  return elementMain;
}

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Minha Lista de Tarefas';
spawn(title);
