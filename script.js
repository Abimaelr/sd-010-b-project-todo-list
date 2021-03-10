let buttonCriarTarefa = document.getElementById('criar-tarefa');
const buttonDeleteTasks = document.getElementById('apaga-tudo');
let taskList = document.getElementById('lista-tarefas');

function addEventClickInTask(task) {
    task.addEventListener('click', changeColorTask)
    task.addEventListener('dblclick', lineThrough)
}
 var booLineThrough = true;
function lineThrough(element) {
  colorNone();
  if (booLineThrough) {
    element.target.className = 'completed';
    booLineThrough = false;
  } else {
    element.target.className = '';
    booLineThrough = true;
  }
}

function addTaskInList() {
  let taskText = document.getElementById('texto-tarefa');
  let task = document.createElement('li');
  task.innerText = taskText.value;
  taskList.appendChild(task);
  taskText.value = "";
  addEventClickInTask(task);
}

function colorNone() {
    let tasks = document.getElementsByTagName('li');
    for (let task of tasks) {
        task.style.backgroundColor = '';
    }
}

function changeColorTask(element) {
  colorNone();
  element.target.style.backgroundColor = 'rgb(128,128,128)';
}

buttonCriarTarefa.addEventListener('click', addTaskInList);

function deleteTasks() {
  taskList.innerHTML = '';
}

/* Evento para deletar todas as tarefas */
buttonDeleteTasks.addEventListener('click', deleteTasks);
