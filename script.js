const createTasksBtn = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const deleteAllTasks = document.getElementById('apaga-tudo');

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

deleteAllTasks.addEventListener('click', () => { toDoList.innerHTML = ''; }, false);
