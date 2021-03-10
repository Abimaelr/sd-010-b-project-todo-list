const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function addTask() {
  createTaskButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerHTML = taskInput.value;
    listItem.className = 'tarefa';
    taskList.appendChild(listItem);
    taskInput.value = '';
  });
}

function selectTask() {
  taskList.addEventListener('click', (event) => {
    const taskItems = document.querySelectorAll('.tarefa');
    for (let i = 0; i < taskItems.length; i += 1) {
      taskItems[i].classList.remove('selected');
    }

    event.target.classList.add('selected');
  });
}

function doneTask() {
  taskList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

window.onload = () => {
  addTask();
  selectTask();
  doneTask();
};
