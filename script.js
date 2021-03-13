const createTasksBtn = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const deleteAllTasksBtn = document.getElementById('apaga-tudo');
const deleteCompletedTasksBtn = document.getElementById('remover-finalizados');
const saveTasksBtn = document.getElementById('salvar-tarefas');
const moveDownBtn = document.getElementById('mover-baixo');
const moveUpBtn = document.getElementById('mover-cima');

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
  /* if (element.classList.contains('completed')) {
    element.classList.remove('completed');
  } else {
    element.classList.add('completed');
  } */
  element.classList.toggle('completed');
}, false);

deleteAllTasksBtn.addEventListener('click', () => { toDoList.innerHTML = ''; }, false);

deleteCompletedTasksBtn.addEventListener('click', () => {
  while (document.querySelector('.completed')) {
    const completedTask = document.querySelector('.completed');
    completedTask.remove();
  }
}, false);

function saveList() {
  const tasks = document.getElementById('lista-tarefas').innerHTML;
  localStorage.list = tasks;
  window.alert('Lista Salva Com sucesso!');
}

function saveButton() {
  saveTasksBtn.addEventListener('click', () => {
    saveList();
  });
}
saveButton();

function loadList() {
  if (localStorage.list) {
    document.getElementById('lista-tarefas').innerHTML = localStorage.list;
  }
}
loadList();

function moveUp() {
  moveUpBtn.addEventListener('click', () => {
    let todaLista = document.querySelectorAll('li');
    for (let index = 0; index < todaLista.length; index += 1) {
      let pos = todaLista[index];
      if (pos.classList.contains('selected') && pos.previousElementSibling !== null) {
        toDoList.insertBefore(pos, todaLista[index - 1]);
      }
    }
  });
}
moveUp();

function moveDown() {
  moveDownBtn.addEventListener('click', () => {
    let todaLista = document.querySelectorAll('li');
    for (let index = 0; index < todaLista.length; index += 1) {
      let pos = todaLista[index];
      if (pos.classList.contains('selected') && pos.nextElementSibling !== null) {
        toDoList.insertBefore(todaLista[index + 1], pos);
      }
    }
  });
}
moveDown();
