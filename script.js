const createTasksBtn = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const deleteAllTasksBtn = document.getElementById('apaga-tudo');
const deleteCompletedTasksBtn = document.getElementById('remover-finalizados');
const saveTasksBtn = document.getElementById('salvar-tarefas');

function createTasks() {
  const toDoListItem = document.createElement('li');
  toDoListItem.innerText = taskInput.value;
  toDoList.appendChild(toDoListItem);
  taskInput.value = '';
}
createTasksBtn.addEventListener('click', createTasks);

// Explorar a resolução com querySelectorAll('#lista-tarefas li')
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

saveTasksBtn.addEventListener('click', () => {
  const toDoListItems = document.querySelectorAll('#lista-tarefas li');
  const content = [];
  const className = [];
  const itemSalvos = { content, className };
  for (let index = 0; index < toDoListItems.length; index += 1) {
    content.push(toDoListItems[index].innerHTML);
    className.push(toDoListItems[index].className);
  }
  localStorage.setItem('itens-salvos', JSON.stringify(itemSalvos));
}, false);

window.onload = () => {
  const saveItemsLocalStorage = localStorage.getItem('itens-salvos');
  if (saveItemsLocalStorage !== null) {
    const saveItemsObj = JSON.parse(saveItemsLocalStorage);
    for (let index = 0; index < saveItemsObj.content.length; index += 1) {
      const toDoListItem = document.createElement('li');
      toDoListItem.innerHTML = saveItemsObj.content[index];
      toDoListItem.className = saveItemsObj.className[index];
      toDoList.appendChild(toDoListItem);
    }
  }
};
