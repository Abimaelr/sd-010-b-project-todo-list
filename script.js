const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const deleteTasksButton = document.querySelector('#apaga-tudo');

// Adicionando uma tarefa a lista de tarefas
function addTask() {
  createTaskButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerHTML = taskInput.value;
    listItem.className = 'tarefa';
    taskList.appendChild(listItem);
    // taskInput.value = '';
  });
}

// Selecionando uma tarefa da lista
function selectTask() {
  taskList.addEventListener('click', (event) => {
    const taskItems = document.querySelectorAll('.tarefa');
    for (let i = 0; i < taskItems.length; i += 1) {
      taskItems[i].classList.remove('selected');
    }

    event.target.classList.add('selected');
  });
}

// Marcando uma tarefa que já foi realizada
function doneTask() {
  taskList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

// Deletando dota a lista de tarefas
function deleteAllTasks() {
  deleteTasksButton.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}

window.onload = () => {
  addTask();
  selectTask();
  doneTask();
  deleteAllTasks();
};
