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
    let taskItens = document.querySelectorAll('li');
    for (let index = 0; index < taskItens.length; index++) {
      taskItens[index].classList.remove('completed');
    }
    taskItem.classList.add('completed');
  }



  listenClick();

}
