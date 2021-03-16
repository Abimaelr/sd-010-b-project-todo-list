// criar tarefa
const valueInput = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const olListaTarefas = document.getElementById('lista-tarefas');
const btnLimpar = document.getElementById('apaga-tudo');

// área das funções
function alteraFundoParaCinza(e) {
  const evento = e;
  const liSelecionado = document.querySelector('.selected');
  if (liSelecionado !== null) {
    liSelecionado.classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

function addCompleted(parameter) {
  const addStyleCompleted = parameter;
  addStyleCompleted.classList.add('completed');
}

function remCompleted(parameter) {
  const remStyleCompleted = parameter;
  remStyleCompleted.classList.remove('completed');
}

function apagaLista() {
  while (olListaTarefas.hasChildNodes()) {
    olListaTarefas.removeChild(olListaTarefas.firstChild);
  }
}

// eventos de chamada das funções
btnCriarTarefa.addEventListener('click', () => {
  const liTarefa = document.createElement('li');
  liTarefa.className = 'tarefa';
  olListaTarefas.appendChild(liTarefa).innerHTML = valueInput.value;

  valueInput.value = '';
});

olListaTarefas.addEventListener('click', alteraFundoParaCinza);

olListaTarefas.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('completed')) {
    remCompleted(e.target);
  } else {
    addCompleted(e.target);
  }
});

btnLimpar.addEventListener('click', apagaLista);
