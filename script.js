let buttonCriarTarefa = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');

function addTaskInList() {
  let taskText = document.getElementById('texto-tarefa');
  let task = document.createElement('li');
  task.innerText = taskText.value;
  taskList.appendChild(task);
  taskText.value = "";
}

buttonCriarTarefa.addEventListener('click', addTaskInList);
