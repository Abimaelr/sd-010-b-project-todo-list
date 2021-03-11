window.onload = function () {
  function listenClick () {
    let addButton = document.getElementById('criar-tarefa');
    let deleteButton = document.getElementById('apaga-tudo');

    addButton.addEventListener('click', addTask);
    deleteButton.addEventListener('click', deleteAll);
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

  listenClick();

}
