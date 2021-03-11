function setColor(event) {
  const tarefa = event.target;
  const tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].classList.remove('cinza');
  }
  tarefa.classList.add('cinza');
}

function setRiscado(event) {
  const tarefa = event.target;
  const listClasses = tarefa.classList;
  const tamanhoListaClasses = listClasses.length;
  if (tamanhoListaClasses === 3) {
    tarefa.classList.remove('completed');
  } else {
    tarefa.classList.add('completed');
  }
}

function criarTarefa() {
  const pai = document.getElementById('lista-tarefas');
  const tarefa = document.getElementById('texto-tarefa').value;
  if (tarefa === '') {
    alert('Você deve incluir uma tarefa!');
  } else {
    const li = document.createElement('li');
    li.className = 'tarefa';
    li.innerHTML = tarefa;
    pai.appendChild(li);
    li.addEventListener('click', setColor);
    li.addEventListener('dblclick', setRiscado);
    document.getElementById('texto-tarefa').value = '';
  }
}

function apagarTarefas() {
  // referencia tirada do site: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
  const pai = document.getElementById('lista-tarefas');
  while (pai.firstChild) {
    pai.removeChild(pai.firstChild);
  }
}
