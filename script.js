window.onload = function () {
  function listenClick () {
    let addButton = document.getElementById('criar-tarefa');
    let deleteButton = document.getElementById('apaga-tudo');
    let removeButton = document.getElementById('remover-finalizados');
    let saveButton = document.getElementById('salvar-tarefas');

    addButton.addEventListener('click', addTask);
    deleteButton.addEventListener('click', deleteAll);
    removeButton.addEventListener('click', removeEnd);
    saveButton.addEventListener('click', saveTasks);
  }

  function addTask () {
    let taskList = document.getElementById('lista-tarefas');
    let newTask = document.createElement("li");
    let textTask = document.createTextNode(getText());  

    newTask.appendChild(textTask);
    newTask.setAttribute('class', 'task');

    newTask.addEventListener('click', taskColor);
    newTask.addEventListener('dblclick', taskThrough);

    taskList.appendChild(newTask);

    cleanText();
  }

  function getText () {
    let text = document.getElementById('texto-tarefa').value;

    return text;
  }

  function cleanText () {
    document.getElementById('texto-tarefa').value = '';
  }

  function taskColor(event) {
    let taskItem = event.target;
    let taskItens = document.querySelectorAll('li');
    for (let index = 0; index < taskItens.length; index++) {
      taskItens[index].classList.remove('li-selected');
    }
    taskItem.classList.add('li-selected');
  }

  function taskThrough(event) {
    let taskItem = event.target;
    taskItem.classList.toggle('completed');
  }

  function deleteAll () {
    let taskList = document.getElementById('lista-tarefas');
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

  function removeEnd () {
    let taskList = document.getElementById('lista-tarefas');
    let taskItems = document.getElementsByTagName('li');

    for (let index = 0; index < taskItems.length; index++) {
      if (taskItems[index].classList.contains('completed')) {
        taskList.removeChild(taskItems[index]);
        index = 0;
      }
    }
  }

  function saveTasks () {
    let taskItems = document.getElementsByTagName('li');
    let arrayTasks = [];
    if (taskItems != null) {
      for (let index = 0; index < taskItems.length; index++) {
        arrayTasks.push(taskItems[index].innerHTML);
      }
      localStorage.setItem('taskStorage', JSON.stringify(arrayTasks));
    }
  }

  function restoreTasks() {
    let restore = JSON.parse(localStorage.getItem('taskStorage'));
    let taskList = document.getElementById('lista-tarefas');

    if (restore != null) {
      for (let index = 0; index < restore.length; index++) {
        let restoredTask = document.createElement("li");
        restoredTask.innerHTML = restore[index];
        restoredTask.setAttribute('class', 'task');
        restoredTask.addEventListener('click', taskColor);
        restoredTask.addEventListener('dblclick', taskThrough);
        taskList.appendChild(restoredTask);
      }
    }
  }

  listenClick();
  restoreTasks();
}
