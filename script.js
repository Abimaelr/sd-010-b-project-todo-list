let task = document.getElementById('texto-tarefa');
let addTask = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');

addTask.addEventListener('click', function(){  
  let newTask = document.createElement('li');
  newTask.classList.add('listItem');
  list.appendChild(newTask).innerHTML = task.value;
  task.value = '';  
});
