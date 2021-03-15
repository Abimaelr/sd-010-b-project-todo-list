/* function localStorageTaskList(tasksObject) {
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

const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonMoveTaskUp = document.getElementById('mover-cima');
const buttonMoveTaskDn = document.getElementById('mover-baixo');

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

/* Evento para deletar todas as tarefas 
buttonDeleteTasks.addEventListener('click', deleteTasks);

function qtdTasksEnded() {
  let tasks = document.getElementsByClassName('completed');
  return tasks.length;
}*/
const buttonDeleteTasksEnded = document.getElementById('remover-finalizados');
function deleteTasksEnded() {
  let taskList = document.getElementById('lista-tarefas');
  while(document.getElementsByClassName('completed')[0]) {
    document.getElementsByClassName('completed')[0].remove();
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
}
buttonSaveTasks.addEventListener('click', saveTasks)

//Adicionando botoes para mover as tarefas para cima ou para baixo
function showConsole(values) {
  return console.log(values);
}

function mountTaskList(tasks) {
  list = document.getElementById('lista-tarefas');
  console.log(list);
  for (let index = 1; index <= tasks.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = 'ola';//tasks[index].innerText;
    list.appendChild(li);
  }
}

function getTasksObject() {
  tasks = document.getElementsByTagName('li');
  console.log(tasks);
  tasksObj = {};
  for (let index = 1; index <= tasks.length; index += 1) {
    tasksObj[index] = tasks[index-1];
  }
  return tasksObj;
}

function getTaskSelected() {
  let tasks = document.getElementsByTagName('li');
  let taskSelected = null;
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].style.backgroundColor = 'rgb(128, 128, 128)'){
      taskSelected = tasks[index];
    }
  }
  return taskSelected;
}
function moveTaskUp(element) {
  let tasksObj = {};
  tasksObj = getTasksObject();
  console.log(tasksObj);
  let taskSelected = getTaskSelected();
  console.log(taskSelected);
  for (let index = 1; index <= tasksObj.length; index += 1) {
    if(tasksObj[index] === taskSelected) {
      tasksObj[index-1] = taskSelected;
      tasksObj[index] = taskSelected.previousSibling();
    }
  }
  mountTaskList(tasksObj);
}

buttonMoveTaskUp.addEventListener('click', moveTaskUp);
