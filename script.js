function addClass(item, classes) {
  if (Array.isArray(classes)) {
    item.classList.add(...classes);
  }
  if (typeof classes === 'string') {
    item.classList.add(classes);
  }
}

function addClickEvent(item, addFunction) {
  item.addEventListener('click', addFunction);
}

function cleanInput() {
  const input = document.getElementById('texto-tarefa');
  input.value = '';
}

function addItemToList() {
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  item.innerText = input.value;
  addClickEvent(item, () => {
    addClass(item, 'selected');
  });
  list.appendChild(item);
}

function addButtonClick() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    addItemToList();
    cleanInput();
  });
}

addButtonClick();
