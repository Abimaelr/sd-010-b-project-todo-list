let inputTask = document.getElementById('texto-tarefa');
let orderedList = document.getElementById('lista-tarefas');
let buttonCreateTask = document.getElementById('criar-tarefa');
let buttonCleanList = document.getElementById('apaga-tudo');
let buttonRemoveFinishedTasks = document.getElementById('remover-finalizados');
let buttonSaveTasks = document.getElementById('salvar-tarefas')

function createTask() {
  buttonCreateTask.addEventListener('click', () => {
    let task = document.createElement('li')
    task.innerHTML = inputTask.value;
    inputTask.value = '';
    orderedList.appendChild(task);
  })
}
createTask();

function changeListItemColor() {
  orderedList.addEventListener('click', function (event) {
    for (i = 0; i < orderedList.children.length; i += 1) {
      orderedList.children[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}
changeListItemColor();

function scratchTask() {
  orderedList.addEventListener('dblclick', function (event) {
    if (event.target.className === 'completed') {
      event.target.className = ""
    } else {
      event.target.className = "completed"
    }
  })
}
scratchTask();

function cleanList() {
  buttonCleanList.addEventListener('click', function () {
    orderedList.textContent = '';
  })
}
cleanList();

function removeFinishedTasks() {
  buttonRemoveFinishedTasks.addEventListener('click', function (event) {
    let CompletedTasks = document.getElementById('lista-tarefas');
    for (i = CompletedTasks.children.length - 1; i >= 0; i -= 1) {
      let task = CompletedTasks.children[i]
      if (task.className === "completed") {
        CompletedTasks.removeChild(CompletedTasks.children[i])
      }
    }
  })
}
removeFinishedTasks();

function SetLocalStorage() { // função baseada na solução do colega Gustavo Cerqueira
  buttonSaveTasks.addEventListener('click', function () {
    const allListItems = document.getElementsByTagName('li');
    storedList = [];
    for (let item of allListItems) {
      const storedItem = {
        text: item.innerHTML,
        class: item.className,
      }
      storedList.push(storedItem);
      localStorage.setItem('task', JSON.stringify(storedList));
    }
  })
}
SetLocalStorage();

function getLocalStorage() {
  function loadTask(paramTask, paramClass) {
      let newTask = document.createElement('li')
      newTask.innerHTML = paramTask;
      newTask.className = paramClass;
      orderedList.appendChild(newTask);
}

  storedTasks = JSON.parse(localStorage.getItem('task'));
  for (let i in storedTasks) {
    loadTask(storedTasks[i].text, storedTasks[i].class);
  }
}
getLocalStorage();
