const addButton = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
const oL = document.getElementById('lista-tarefas');
let taskList = [];

function creatOL() {
   
  const taski = document.createElement('li');
  taski.className = 'task';
  taski.innerText = task.value;
  oL.appendChild(taski);
}
addButton.addEventListener('click', creatOL);
taskList.push(task.value);