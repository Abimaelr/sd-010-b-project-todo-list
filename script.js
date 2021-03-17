const createTask = document.querySelector('#criar-tarefa');
const clearTasks = document.querySelector('#apaga-tudo');
const removeCompletedButton = document.querySelector('#remover-finalizados');
 
createTask.addEventListener('click', addTask);
clearTasks.addEventListener('click', clearTasks);
removeCompletedButton.addEventListener('click', removeCompleted);

function changeCompletedTask(event) {
  if (event.target.className === 'completed selected') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function changeSelectedTask(event) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function addTask(event, taskName, className) {
  const taskList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  if (!taskName) {
    const task = document.querySelector('#texto-tarefa');
    taskName = task.value;
    task.value = '';
  }
  if (className) {
    listItem.className = className;
  }
  listItem.innerText = taskName;
  listItem.addEventListener('click', changeSelectedTask);
  listItem.addEventListener('dblclick', changeCompletedTask);
  taskList.appendChild(listItem);
}
function clearTasks() {
  const taskList = document.querySelector('#lista-tarefas');
  while (taskList.firstElementChild)
