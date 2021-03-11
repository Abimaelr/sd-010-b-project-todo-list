let flag = true;
function riskCompleted(evt) {
  const tgt = evt.target;
  tgt.className = flag ? 'completed' : '';
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
        allLis[i].style.backgroundColor = '';
      }
      const tgt = event.target;
      tgt.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    newTask.addEventListener('dblclick', riskCompleted);
    taskText.value = '';
  });
}
const eraseBtn = document.getElementById('apaga-tudo');
eraseBtn.addEventListener('click', () => {
  const tasksList = document.getElementById('lista-tarefas');
  tasksList.innerHTML = '';
});

const rmCompletedBtn = document.getElementById('remover-finalizados');
rmCompletedBtn.addEventListener('click', () => {
  // utilizei o forEach nessa situação após consultar o stackoverflow
  // link: https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
  document.querySelectorAll('.completed').forEach((a) => {
    a.remove();
  });
});

const input = document.querySelector('input');
input.addEventListener('keypress', (evt) => {
  if (evt.code === 'Enter') {
    document.getElementById('criar-tarefa').click();
  }
});

const saveTasksBtn = document.getElementById('salvar-tarefas');
saveTasksBtn.addEventListener('click', () => {
  const tasks = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('tasks', tasks);
});

function putSavedTasks() {
  for (let i = 0; i < localStorage.key.length; i += 1) {
    const tasks = localStorage.getItem('tasks');
    const tasksList = document.querySelector('#lista-tarefas');
    const listHTML = document.createElement('p');
    listHTML.innerHTML = tasks;
    tasksList.appendChild(listHTML);
  }
}
createNewTask();
putSavedTasks();
