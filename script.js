const createTasksBtn = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');

function createTasks() {
  const toDoListItem = document.createElement('li');
  toDoListItem.innerText = taskInput.value;
  toDoList.appendChild(toDoListItem);
  taskInput.value = '';
}
createTasksBtn.addEventListener('click', createTasks);

toDoList.addEventListener('click', (event) => {
  const element = event;
  if (document.querySelector('.selected') === null) {
    element.target.className = 'selected';
  } else {
    document.querySelector('.selected').removeAttribute('class');
    element.target.className = 'selected';
  }
}, false);
