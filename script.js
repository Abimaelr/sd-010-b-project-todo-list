function criarTarefa() {
  const pai = document.getElementById('lista-tarefas');
  const tarefa = document.getElementById('texto-tarefa').value;
  if (tarefa === '') {

    alert('Você deve incluir uma tarefa!')
  } else {

    const li = document.createElement('li');
    li.className = 'tarefa';
    li.innerHTML = tarefa;
    pai.appendChild(li);
    li.addEventListener('click', setColor);
    document.getElementById('texto-tarefa').value = '';

  }
}

function setColor(event) {
  const tarefa = event.target;
  tarefa.style.backgroundColor = 'rgb(128, 128, 128)';
}
