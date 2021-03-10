function saveTask() {
  const task = document.getElementById('texto-tarefa');
  const saveButton = document.getElementById('criar-tarefa');
  const list = document.getElementById('lista-tarefas');
  
  saveButton.addEventListener('click', () => {
    const createListItem = document.createElement('li');
    createListItem.innerText = task.value;
    list.appendChild(createListItem);
    task.value = '';
  });
}
saveTask();
