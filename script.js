function completedTask(event) {
  const compTask = event.target;
  if (compTask.classList.contains('completed')) {
    compTask.classList.remove('completed');
  } else {
    compTask.classList.add('completed');
  }
}

// eslint-disable-next-line max-lines-per-function
function createTask() {
  const button = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');

  button.addEventListener('click', () => {
    const item = document.createElement('li');
    const input = document.getElementById('texto-tarefa');
    item.innerText = input.value;
    taskList.appendChild(item);

    input.value = '';

    item.addEventListener('click', (event) => {
      const allLis = document.getElementsByTagName('li');
      for (let i = 0; i < allLis.length; i += 1) {
        allLis[i].style.backgroundColor = 'rgba(0, 0, 0, 0.01)';
      }
      // eslint-disable-next-line no-param-reassign
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });

    item.addEventListener('dblclick', completedTask);
  });
}
createTask();
