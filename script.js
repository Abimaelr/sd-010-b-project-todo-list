window.onload = function () {
  let tarefas = JSON.parse(localStorage.getItem('tarefas'));
  if (tarefas != null) {
    for (let i = 0; i < tarefas.length; i += 1) {
      let listaTarefas = document.querySelector('#lista-tarefas');
      let novaTarefa = document.createElement('li');
      novaTarefa.innerText = tarefas[i][0];
      novaTarefa.className = 'tarefa';
      if (tarefas[i][1]) {
        novaTarefa.classList.add('completed');
      }
      listaTarefas.appendChild(novaTarefa);
    }
  }
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('tarefa')) {
    let tarefas = document.querySelectorAll('.tarefa');
    // ??? Consigo chamar o elemento procurando pelo atributo style?
    for (let i = 0; i < tarefas.length; i += 1) {
      tarefas[i].classList.remove('selected');
      tarefas[i].style.backgroundColor = null;
    }
    // ???
    event.target.classList.add('selected');
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
  let tarefaCompletada;
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

document.getElementById('mover-cima').onclick = function () {
  let tarefa = document.querySelector('.selected');
  if (tarefa !== null) {
    let listaTarefas = document.querySelector('#lista-tarefas');
    if (tarefa !== listaTarefas.firstChild) {
      listaTarefas.insertBefore(tarefa, tarefa.previousSibling);
    }
  }
};

document.getElementById('mover-baixo').onclick = function () {
  let tarefa = document.querySelector('.selected');
  if (tarefa !== null) {
    let listaTarefas = document.querySelector('#lista-tarefas');
    if (tarefa !== listaTarefas.lastChild) {
      // ??? Existe outra maneira de fazer isto sem ser usando o insertBefore?
      listaTarefas.insertBefore(tarefa, tarefa.nextSibling.nextSibling);
    }
  }
};

document.getElementById('remover-selecionado').onclick = function () {
  let tarefa = document.querySelector('.selected');
  if (tarefa !== null) {
    let listaTarefas = document.querySelector('#lista-tarefas');
    listaTarefas.removeChild(tarefa);
  }
}
