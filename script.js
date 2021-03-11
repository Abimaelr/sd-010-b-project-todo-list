let tarefas = JSON.parse(localStorage.getItem('tarefas'));
for (let i = 0; i < tarefas.length; i += 1){
  let listaTarefas = document.querySelector('#lista-tarefas');
  let novaTarefa = document.createElement('li');
  novaTarefa.innerText = tarefas[i][0];
  novaTarefa.className = 'tarefa';
  if (tarefas[i][1]) {
    novaTarefa.classList.add('completed');
  }
  listaTarefas.appendChild(novaTarefa);
}

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
  let novaTarefa = document.createElement('li');
  novaTarefa.innerText = document.getElementById('texto-tarefa').value;
  novaTarefa.className = 'tarefa';
  listaTarefas.appendChild(novaTarefa);
  document.getElementById('texto-tarefa').value = null;
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

document.getElementById('salvar-tarefas').onclick = function () {
  let tarefas = document.querySelectorAll('.tarefa');
  let tarefasSalvas = [];
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('completed')) {
      tarefaCompletada = true;
    } else {
      tarefaCompletada = false;
    }
    tarefasSalvas.push([tarefas[i].innerText, tarefaCompletada]);
  }
  localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
  alert('Tarefas salvas!');
};
