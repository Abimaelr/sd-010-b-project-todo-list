const listTask = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');

function createTask(event) {
  const task = document.createElement('li');
  listTask.appendChild(task);
  task.textContent = event.target.value;
}

inputField.addEventListener('change', createTask);

function taskOrdener() {
  task.sort();
}

taskOrdener();
