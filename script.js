let taskList = document.getElementById('lista-tarefas');
function localStorageTaskList(tasksObject) {
  for (let key in tasksObject) {
    taskItem = document.createElement('li');
    taskItem.innerText = tasksObject[key][0];
    taskItem.className = tasksObject[key][1];
    taskItem.style.backgroundColor = tasksObject[key][2];
    taskList.appendChild(taskItem);
    addEventClickInTask(taskItem);
  }
}
if(localStorage.getItem('tasks')) {
  localStorageTaskList(JSON.parse(localStorage.getItem('tasks')));
}


let buttonCriarTarefa = document.getElementById('criar-tarefa');
const buttonDeleteTasks = document.getElementById('apaga-tudo');
const buttonDeleteTasksEnded = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');

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

/* Removendo tarefas finalizadas */
function deleteTasksEnded() {
  let tasks = document.getElementsByClassName('completed');
  for (let index = 0; index <= tasks.length; index += 1) {
    taskList.removeChild(document.getElementsByClassName('completed')[0]);
  }
}

buttonDeleteTasksEnded.addEventListener('click', deleteTasksEnded);

/* Exercício 12: */
function saveTasks() {
  let tasks = document.getElementsByTagName('li');
  let tasksArray = [];
  let tasksObject = {};
  for (let task of tasks) {
    tasksArray.push([task.innerText, task.className, task.style.backgroundColor]);
  }

  for (let index in tasksArray) {
    tasksObject[index] = tasksArray[index]
  }
  localStorage.setItem('tasks', JSON.stringify(tasksObject));
  alert('Suas tarefas foram salvas com sucesso!!!');
}
buttonSaveTasks.addEventListener('click', saveTasks)


