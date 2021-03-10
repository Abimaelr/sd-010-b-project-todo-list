function cleanInput() {
  const input = document.getElementById('texto-tarefa');
  input.value = '';
}

function addItemToList() {
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  item.innerText = input.value;
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
