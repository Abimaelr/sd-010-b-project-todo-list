function addSelectedClass(item, selecClass) {
  const selectedClass = selecClass;
  const selected = document.querySelector(`.${selectedClass}`);
  if (selected !== null) {
    selected.classList.remove(selectedClass);
  }
  item.classList.add(selecClass);
}

function addEvent(item, event, addFunction) {
  item.addEventListener(event, addFunction);
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
  addEvent(item, 'click', () => {
    addSelectedClass(item, 'selected');
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
