const selectionOl = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');

function criarTarefa() {
  if (inputText.value === '') {
    alert('Digite uma Tarefa');
  } else {
    const newLi = document.createElement('li');
    newLi.innerText = inputText.value;
    selectionOl.appendChild(newLi);
    inputText.value = '';
  }
}
// Escutador de Eventos
const adicionarTarefas = document.getElementById('criar-tarefa');
adicionarTarefas.addEventListener('click', criarTarefa);
