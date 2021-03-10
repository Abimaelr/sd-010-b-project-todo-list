document.getElementById('criar-tarefa').onclick = function () {
  let listaTarefas = document.querySelector('#lista-tarefas');
  let tarefa = document.createElement('li');
  tarefa.innerText = document.querySelector('#texto-tarefa').value;
  listaTarefas.appendChild(tarefa);
  document.querySelector('#texto-tarefa').value = '';
};