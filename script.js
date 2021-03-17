/*
   Essa função recebe um texto, cria um element li, altera sua classe para 'task', adiciona o texto da tarefa e o retorna.
  */
function createTask(text) {
  const task = document.createElement('li'); // cria um element li e armazena em task
  task.className = 'task'; // altera a classe do element para 'task'
  task.innerHTML = text; // adiciona o texto da tarefa em task
  return task; // retorna o element criado
}

/*
   Essa função insere a tarefa digitada na caixa de texto em lista de tarefas.
  */
function insertTask() {
  const input = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');

  if (input.value !== '') { // se há texto digitado na caixa de texto
    const task = createTask(input.value); // cria uma tarefa e adiciona em task
    lista.appendChild(task); // a task é adicionada como filha em lista de tarefas
    input.value = ''; // limpa o texto da caixa de texto.
  }
}

/*
   Essa função executa a function init para carregar valores e adicionar escutador de evento click que dispara a function insertTask.
  */
window.onload = function init() {
  // define uma função init para carregar valores e adicionar escutador de evento click

  // obtem o elemento de id criar-tarefa e armazena em button
  const button = document.querySelector('#criar-tarefa');

  // adiciona um escutador de evento click que dispara a function insertTask para elemento de id criar-tarefa
  button.addEventListener('click', insertTask);
};
