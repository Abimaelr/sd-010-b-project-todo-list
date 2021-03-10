function addTask() {
  const newTask = document.getElementById('texto-tarefa');
  if (newTask.value !== '') {    
    const taskList = document.getElementById('lista-tarefas');
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = newTask.value;
    taskList.appendChild(task);
    newTask.value = '';
  }
}

const btnAdd = document.getElementById('criar-tarefa');
btnAdd.addEventListener('click', addTask);
