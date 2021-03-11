const createListButton = document.getElementById('criar-tarefa');

function createListItem() {
  const list = document.getElementById('lista-tarefas');
  const capture = document.getElementById('texto-tarefa').value;
  const newListItem = document.createElement('li');

  newListItem.innerText = capture;
  list.appendChild(newListItem);

  document.getElementById('texto-tarefa').value = ''; // para limpar o input
}

createListButton.addEventListener('click', createListItem);
