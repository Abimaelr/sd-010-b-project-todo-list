// criar tarefa
const valueInput = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const olListaTarefas = document.getElementById('lista-tarefas');
const btnLimpar = document.getElementById('apaga-tudo');
const btnRemover = document.getElementById('remover-finalizados');
const btnSalvar = document.getElementById('salvar-tarefas');

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

function apagaLista() { // --> enquanto olListaTarefa tiver filhos do typo node, ele irá apagar
  while (olListaTarefas.hasChildNodes()) {
    olListaTarefas.removeChild(olListaTarefas.firstChild);
  }
}

function removerCompletos() {
  const li = document.querySelectorAll('.completed');
  for (let i = 0; i < li.length; i += 1) {
    li[i].remove();
  }
}

function salvar() {
  const itensASalvar = olListaTarefas.innerHTML;
  localStorage.setItem('Salvo', itensASalvar);
}

function recuperaLista() {
  const pegaSalva = localStorage.getItem('Salvo');
  olListaTarefas.innerHTML = pegaSalva;
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

btnRemover.addEventListener('click', removerCompletos);

btnSalvar.addEventListener('click', salvar);

recuperaLista();
