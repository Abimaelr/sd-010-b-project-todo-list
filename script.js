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
      taskItems[i].style.backgroundColor = '';
    }

    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

window.onload = () => {
  addTask();
  selectTask();
};
