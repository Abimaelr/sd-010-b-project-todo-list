
  var button = document.getElementById('criar-tarefa');
  var lista = document.getElementById('lista-tarefas');
  var input = document.getElementById('texto-tarefa');
  
  function adicionar() {
    lista.innerHTML += '<li>'+input.value+'</li>'
    input.value= '';
  }