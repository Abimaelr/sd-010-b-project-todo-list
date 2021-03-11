const taskList = document.getElementById('lista-tarefas');

function taskSelect(e) {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected) {
    taskSelected.classList.remove('selected');
  }
  e.target.classList.add('selected');
}

function taskCompleted(e) {
  e.target.classList.toggle('completed');
}

function addTask() {
  const newTask = document.getElementById('texto-tarefa');
  if (newTask.value !== '') {    
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = newTask.value;
    taskList.appendChild(task);
    // task.addEventListener('click', taskSelect);
    task.addEventListener('dblclick', taskCompleted);
    newTask.value = '';
  }
}

function removeAllTasks() {
  taskList.innerHTML = '';
}

function removeCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');
  for (let i = 0; i < completedTasks.length; i++) {
    completedTasks[i].remove();
  }
  if (completedTasks.length > 0) {
    removeCompletedTasks();
  }
}

const btnAdd = document.getElementById('criar-tarefa');
btnAdd.addEventListener('click', addTask);

const btnRmvAll = document.getElementById('apaga-tudo');
btnRmvAll.addEventListener('click', removeAllTasks);

const btnRmvCompleted = document.getElementById('remover-finalizados');
btnRmvCompleted.addEventListener('click', removeCompletedTasks);