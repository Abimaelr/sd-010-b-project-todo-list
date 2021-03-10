let flag = true;
function riskCompleted(evt) {
  evt.target.className = flag ? 'completed' : '';
  flag = !flag;
}
function createNewTask() {
  const newTaskBtn = document.getElementById('criar-tarefa');
  const tasksList = document.getElementById('lista-tarefas');
  const taskText = document.getElementById('texto-tarefa');
  newTaskBtn.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = taskText.value;
    tasksList.appendChild(newTask);
    newTask.addEventListener('click', (event) => {
      const allLis = document.getElementsByTagName('li');
      for (let i = 0; i < allLis.length; i += 1) {
        allLis[i].style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    newTask.addEventListener('dblclick', riskCompleted);
    taskText.value = '';
  });
}

createNewTask();
