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
  /* const element = event.target;
  const liArray = toDoList.children;
  for (let index = 0; index < liArray.length; index += 1) {
    const liArrayItem = liArray[index];
    if (liArrayItem.style.backgroundColor === 'rgb(128, 128, 128)') {
      liArrayItem.style.backgroundColor = '';
    }
  }
  if (element.style.backgroundColor === '') {
    element.style.backgroundColor = 'rgb(128, 128, 128)';
  } */
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
