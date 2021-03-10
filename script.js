function addSelectedClass(element, selecClass) {
  const selectedClass = selecClass;
  const selected = document.querySelector(`.${selectedClass}`);
  if (selected !== null) {
    selected.classList.remove(selectedClass);
  }
  element.target.classList.add(selecClass);
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
  item.addEventListener('click', (element) => {
    addSelectedClass(element, 'selected');
  });
  item.addEventListener('dblclick', (element) => {
    element.target.classList.toggle('completed');
  });
  list.appendChild(item);
}

function addButtonClick(elementId, clickFunction) {
  const button = document.getElementById(elementId);
  button.addEventListener('click', clickFunction);
}

function cleanList() {
  const list = document.getElementById('lista-tarefas');
  while (list.childNodes.length > 0) {
    list.removeChild(list.lastChild);
  }
}

addButtonClick('criar-tarefa', () => {
  addItemToList();
  cleanInput();
});

addButtonClick('apaga-tudo', () => {
  cleanList();
});
