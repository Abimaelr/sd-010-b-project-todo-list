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

/* Evento para deletar todas as tarefas */
buttonDeleteTasks.addEventListener('click', deleteTasks);

function qtdTasksEnded() {
  let tasks = document.getElementsByClassName('completed');
  return tasks.length;
}

/* Removendo tarefas finalizadas */
function deleteTasksEnded() {
  let taskList = document.getElementById('lista-tarefas');
  if(qtdTasksEnded() !== 0) {
    document.getElementsByClassName('completed')[0].remove();
    deleteTasksEnded();
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

//Adicionando botoes para mover as tarefas para cima ou para baixo
function showConsole(values) {
  return console.log(values);
}

function mountTaskList(tasks) {
  let tasksInfo = [];
  for (let task of tasks) {
    tasksInfo.push([task.innerText, task.className, task.style.backgroundColor])
  }
  
  list = document.getElementById('lista-tarefas');
  list.innerHTML = '';
  for (let index = 0; index < tasksInfo.length; index += 1) {
    li = document.createElement('li');
    li.innerText = tasksInfo[index][0];
    li.className = tasksInfo[index][1];
    li.style.backgroundColor = tasksInfo[index][2]
    list.appendChild(li);
  }
  return console.log(tasksInfo);
}

function moveTaskUp() {
  tasks = document.getElementsByTagName('li');
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        tasks[index] = tasks[index].previousSibling
    }
  }
  mountTaskList(tasks);
}

buttonMoveTaskUp.addEventListener('click', moveTaskUp)



