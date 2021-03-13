// criar tarefa
const valueInput = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const olListaTarefas = document.getElementById('lista-tarefas');

btnCriarTarefa.addEventListener('click', () => {
  const liTarefa = document.createElement('li');
  liTarefa.className = 'tarefa';
  olListaTarefas.appendChild(liTarefa).innerHTML = valueInput.value;

  valueInput.value = '';

  // alterar cor do background da tarefa
  liTarefa.addEventListener('click', function () {
    liTarefa.classList.add('selected');
  });
});
