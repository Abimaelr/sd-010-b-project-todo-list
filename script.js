
  var button = document.getElementById('criar-tarefa');
  var lista = document.getElementById('lista-tarefas');
  var input = document.getElementById('texto-tarefa');
  
  function adicionar() {
    lista.innerHTML += '<li onClick="changeColor(this)" ondblClick="finished(this)">'+input.value+'</li>'
    input.value= '';
  }

  function changeColor(e) {
    if (e.classList.contains('gray')) {
      e.classList.remove('gray')
    } else {
      e.classList.add('gray')
    }
  }

  function finished(e) {
    if (e.classList.contains('completed')) {
      e.classList.remove('completed')
    } else {
      e.classList.add('completed')
    }
  }

