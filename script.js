const createTasksBtn = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const deleteAllTasksBtn = document.getElementById('apaga-tudo');
const deleteCompletedTasksBtn = document.getElementById('remover-finalizados');

function createTasks() {
  const toDoListItem = document.createElement('li');
  toDoListItem.innerText = taskInput.value;
  toDoList.appendChild(toDoListItem);
  taskInput.value = '';
}
createTasksBtn.addEventListener('click', createTasks);

toDoList.addEventListener('click', (event) => {
  const element = event.target;
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) selectedItem.classList.remove('selected');
  element.classList.add('selected');
}, false);

toDoList.addEventListener('dblclick', (event) => {
  const element = event.target;
  if (element.classList.contains('completed')) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  }
}, false);

deleteAllTasksBtn.addEventListener('click', () => { toDoList.innerHTML = ''; }, false);

deleteCompletedTasksBtn.addEventListener('click', () => {
  while (document.querySelector('.completed')) {
    const completedTask = document.querySelector('.completed');
    completedTask.remove();
  }
}, false);
