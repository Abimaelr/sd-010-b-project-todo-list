

window.onload = function () {
  let addButton = document.getElementById('criar-tarefa');

  function listenClick () {
    addButton.addEventListener('click', addTask);
  }

  function addTask () {
    let taskList = document.getElementById('lista-tarefas');
    let newTask = document.createElement("li");
    let textTask = document.createTextNode(getText());  

    newTask.appendChild(textTask);
    newTask.setAttribute('class', 'task');

    taskList.appendChild(newTask)
  }

  function getText () {
    let text = document.getElementById('texto-tarefa').value;

    return text;
  }

  listenClick();
}

 