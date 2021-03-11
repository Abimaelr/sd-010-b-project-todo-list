function createTask() {
  document.getElementById('criar-tarefa').addEventListener('click', function() {
    let tarefa = document.createElement('li'), listaTarefa = document.getElementById('lista-tarefas');
    tarefa.innerText = document.getElementById('texto-tarefa').value;
    listaTarefa.appendChild(tarefa);
    document.getElementById('texto-tarefa').value = '';
  })
}

createTask();
