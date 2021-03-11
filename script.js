document.getElementById('criar-tarefa').addEventListener('click', function createTask() {
  const tarefa = document.createElement('li')
  const listaTarefa = document.getElementById('lista-tarefas');
  tarefa.innerText = document.getElementById('texto-tarefa').value;
  tarefa.className = 'tasks';
  listaTarefa.appendChild(tarefa);
  document.getElementById('texto-tarefa').value = '';
})

document.getElementById('lista-tarefas').addEventListener('click', function selectTask(event) {
  if(event.target.className == 'tasks') {
    for(let index = 0; index < document.getElementsByClassName('tasks').length; index += 1) {
      document.getElementsByClassName('tasks')[index].className = 'tasks';
    }
    event.target.className += ' selected';
  }
})

document.getElementById('lista-tarefas').addEventListener('dblclick', function completedTask(event) {
  if(event.target.className.includes('tasks')) {
    if(event.target.className.includes('completed')) {
      event.target.classList.remove('completed');
    }
    else {
      event.target.className += ' completed';
    }
  }
})