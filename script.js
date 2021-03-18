// requisito 5 e 6
const criarTarefa = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

function addTarefa(add) {
  add.preventDefault();
  const novoItem = document.createElement('li');
  const novaTarefa = inputTarefa.value;
  novoItem.innerText = novaTarefa;
  listaTarefa.appendChild(novoItem);
  inputTarefa.value = '';
}

criarTarefa.addEventListener('click', addTarefa);

// requisito 7 
function alteraCor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

listaTarefa.addEventListener('click', alteraCor);
