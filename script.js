function createNewTask() {
  const newTaskBtn = document.getElementById('criar-tarefa');
  const tasksList = document.getElementById('lista-tarefas');
  const taskText = document.getElementById('texto-tarefa');
  newTaskBtn.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = taskText.value;
    tasksList.appendChild(newTask);
    taskText.value = '';
  });
}
createNewTask();
