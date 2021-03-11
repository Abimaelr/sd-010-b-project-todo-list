document.getElementById('criar-tarefa').onclick = function () {
  let listaTarefas = document.querySelector('#lista-tarefas');
  let tarefa = document.createElement('li');
  tarefa.innerText = document.querySelector('#texto-tarefa').value;
  tarefa.className = 'tarefa';
  listaTarefas.appendChild(tarefa);
  document.querySelector('#texto-tarefa').value = '';
};

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