function addSelectedClass(item, classes) {

  const selectedClass = 'selected';
  const selected = document.querySelector(`.${selectedClass}`);
  if (selected !== null) {
    selected.classList.remove(selectedClass);
  }
  item.classList.add(classes);
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
