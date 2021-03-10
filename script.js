function createTask() {
  const button = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');

  button.addEventListener('click', () => {
    const item = document.createElement('li');
    const input = document.getElementById('texto-tarefa');
    item.innerText = input.value;
    taskList.appendChild(item);

    input.value = '';
  });
}

createTask();
