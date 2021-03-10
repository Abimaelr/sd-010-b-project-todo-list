const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const deleteTasksButton = document.querySelector('#apaga-tudo');
const removeDoneTasksButton = document.querySelector('#remover-finalizados');
const storage = localStorage;
const saveTaskButton = document.querySelector('#salvar-tarefas');

// Adicionando uma tarefa a lista de tarefas
function addTask() {
  createTaskButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.innerHTML = taskInput.value;
    listItem.className = 'tarefa';
    listItem.addEventListener('click', () => { // Selecionando uma tarefa
      const taskItems = document.querySelectorAll('.tarefa');
      for (let i = 0; i < taskItems.length; i += 1) {
        taskItems[i].classList.remove('selected');
      }

      listItem.classList.add('selected');
    });
    listItem.addEventListener('dblclick', () => { // Marcando uma tarefa que já foi realizada
      listItem.classList.toggle('completed');
    });
    taskList.appendChild(listItem);
    taskInput.value = '';
  });
}

// Deletando toda a lista de tarefas
function clearTasks() {
  deleteTasksButton.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}

// Deletando as tarefas já realizadas da lista
function removeDoneTasks() {
  removeDoneTasksButton.addEventListener('click', () => {
    const done = [];
    taskList.childNodes.forEach((child) => {
      if (child.classList.contains('completed')) done.push(child);
    });
    for (let i = 0; i < done.length; i += 1) {
      taskList.removeChild(done[i]);
    }
  });
}

function saveTasks() {
  saveTaskButton.addEventListener('click', () => {
    const arrTasks = [];
    const tasks = document.querySelectorAll('.tarefa');
    tasks.forEach((task) => {
      const properties = {
        text: task.innerText,
        classes: task.className,
      };
      arrTasks.push(properties);
    });
    storage.setItem('tasks', JSON.stringify(arrTasks));
  });
}

function loadTasks() {
  const tasks = JSON.parse(storage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i += 1) {
    const task = document.createElement('li');
    task.innerHTML = tasks[i].text;
    task.className = tasks[i].classes;
    taskList.appendChild(task);
  }
}

window.onload = () => {
  addTask();
  clearTasks();
  removeDoneTasks();
  loadTasks();
  saveTasks();
};
