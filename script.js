document.querySelector('#criar-tarefa').addEventListener('click', function () {
  task = document.querySelector('#texto-tarefa');
  taskList = document.querySelector('#lista-tarefas');
  generateLi = document.createElement('li');
  generateLi.innerHTML = task.value;
  taskList.appendChild(generateLi);
  task.value = '';
})
