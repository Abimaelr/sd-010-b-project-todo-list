let buttonCriarTarefa = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');

function addEventClickInTask(task) {
    task.addEventListener('click', changeColorTask)
}

function addTaskInList() {
  let taskText = document.getElementById('texto-tarefa');
  let task = document.createElement('li');
  task.innerText = taskText.value;
  taskList.appendChild(task);
  taskText.value = "";
  addEventClickInTask(task);
}

function changeColorTask(element) {
  element.target.style.backgroundColor = 'rgb(128,128,128)';
}

buttonCriarTarefa.addEventListener('click', addTaskInList);
