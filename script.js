document.addEventListener('click', (event) => {
  if (event.target.classList.contains('tarefa')) {
    let tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
      tarefas[i].style.backgroundColor = null;
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('tarefa')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

document.getElementById('criar-tarefa').onclick = function () {
  let listaTarefas = document.querySelector('#lista-tarefas');
  let tarefa = document.createElement('li');
  tarefa.innerText = document.querySelector('#texto-tarefa').value;
  tarefa.className = 'tarefa';
  listaTarefas.appendChild(tarefa);
  document.querySelector('#texto-tarefa').value = null;
};

document.getElementById('remover-finalizados').onclick = function () {
  let tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('completed')) {
      document.querySelector('#lista-tarefas').removeChild(tarefas[i]);
    }
  }
};

document.getElementById('apaga-tudo').onclick = function () {
  let listaTarefas = document.querySelector('#lista-tarefas');
  while (listaTarefas.hasChildNodes()) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
};
