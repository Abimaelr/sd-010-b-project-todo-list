function addSelectedClass(element, selecClass) {
  const selectedClass = selecClass;
  const selected = document.querySelector(`.${selectedClass}`);
  if (selected !== null) {
    selected.classList.remove(selectedClass);
  }
  element.target.classList.add(selecClass);
}

/* function toggleCompletedClass(item, completClass) {
  item.classList.toggle(completClass);
}

function addEvent(item, action, addFunction) {
  item.addEventListener(action, addFunction);
} */

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

function addButtonClick() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    addItemToList();
    cleanInput();
  });
}

addButtonClick();
