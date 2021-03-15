function clearInput() {
  document.getElementById('texto-tarefa').value = '';
}

function addItems() {
  let inputed = document.getElementById('texto-tarefa');
  let list = document.getElementById('lista-tarefas');
  let listItem = document.createElement('li');
  if(inputed.value === "") {
    alert("Campo vazio!");
  } else {
    listItem.innerText = inputed.value;
    list.appendChild(listItem);
    clearInput();
    listItem.addEventListener('click', selectItem);
    listItem.addEventListener('dblclick', completedTask);
  }
}

function removeSelect() {
  const selected = document.querySelector('.selected');
  if(selected)
  selected.classList.remove('selected');
}

function selectItem(selected) {
  removeSelect();
  const newSelected = selected.target;
  newSelected.classList.add('selected');
}

function completedTask(completed) {
  const completedTask = completed.target;
  completedTask.classList.add('completed');
}

function notCompletedTask() {
  const notCompleted = document.querySelectorAll('.completed');
  for(let index in notCompleted) {
    if(notCompleted[index].classList.contains('completed')) {
      this.classList.remove('completed');
    }
  }
  notCompleted.addEventListener('dblclick', notCompletedTask);
}

function clearAll() {
  const clearTasks = document.getElementsByTagName('li');
  const taskList = document.getElementsByTagName('ol');
  for(let index = clearTasks - 1; index < clearTasks.length; index -= 1) {
    taskList.removeChild(taskList.clearTasks[index]);
  }
}

document.getElementById('criar-tarefa').addEventListener('click', addItems);
document.getElementById('apaga-tudo').addEventListener('click', clearAll);