// criar tarefa
const valueInput = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const olListaTarefas = document.getElementById('lista-tarefas');

btnCriarTarefa.addEventListener('click', () => {
  const liTarefa = document.createElement('li');
  liTarefa.className = 'tarefa';
  olListaTarefas.appendChild(liTarefa).innerHTML = valueInput.value;

  valueInput.value = '';
});

function bgCinza(e) {
  const evento = e;
  const liSelecionado = document.querySelector('.selected');
  if (liSelecionado !== null) {
    liSelecionado.classList.remove('selected');
  }
  evento.target.classList.add('selected');
}
olListaTarefas.addEventListener('click', bgCinza);
