function setColor(event) {
  const tarefa = event.target;
  const identificador = event.target.id;
  const tarefas = document.querySelectorAll('.tarefa');
  let count = 0;

  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[1].classList.length == 1) {
      count = count + 1;
    }
  }
  if (count == tarefas.length) {
    tarefa.classList.add('cinza');
  }
  console.log(count);
  console.log(tarefas.length);
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
    document.getElementById('texto-tarefa').value = '';

  }
}
