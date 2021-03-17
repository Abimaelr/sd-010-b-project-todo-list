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
  // obtem a caixa de texto e armazena em input
  const input = document.getElementById('texto-tarefa');

  // obtem o elemento id "lista-tarefas" e armazena em lista
  const lista = document.getElementById('lista-tarefas');

  if (input.value !== '') { // se há texto digitado na caixa de texto
    const task = createTask(input.value); // cria uma tarefa e adiciona em task
    lista.appendChild(task); // a task é adicionada como filha em lista de tarefas
    input.value = ''; // limpa o texto da caixa de texto.
  }
}

/*
   Essa função uma string de cor rgb e se houver uma task que possua essa cor de background, ela será retornada.
  */
function selectTaskWithBackgroundColor(color) {
  // obtem todos os elementos task e armazena em taskElementsList
  const taskElementsList = document.querySelectorAll('.task');
  let selectTask = null; // inicializa com null a task

  // para cada elemento task na lista
  taskElementsList.forEach((task) => {
    // se o background do elemento for cinza
    if (task.style.backgroundColor === color) {
      selectTask = task; // armazena o elemento em selecTask
    }
  });

  return selectTask; // retorna null ou a task selecionada
}

/*
   Essa função recebe o evento disparado por um elemento da classe task, obtem esse elemento e altera a cor de fundo para cinza.
  */
function changeTaskBackgroundColor(event) {
  const task = event.target; // armazena o elemento task que disparou o evento

  // verifica se há elemento task selecionado (cor de fundo cinza) e armazena em currentTask
  const currentTask = selectTaskWithBackgroundColor('rgb(128, 128, 128)');

  if (currentTask) {
    // se há elemento selecionado currentElementColor !== null
    currentTask.style.backgroundColor = task.style.backgroundColor; // remove a cor de fundo cinza do elemento task atual
  }

  // altera o backgroundColor do elemento task para cinza rgb(128,128,128)
  task.style.backgroundColor = 'rgb(128, 128, 128)';
}

/*
   Essa função executa a function init para carregar valores e adicionar escutador de evento click que dispara a function insertTask.

   Material consultado sobre o loop forEach
   https://www.w3schools.com/jsref/jsref_foreach.asp

   Material consultado sobre arrow functions
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   https://www.w3schools.com/js/js_arrow_function.asp
  */
window.onload = function init() {
  // define uma função init para carregar valores e adicionar escutador de evento click

  // obtem o elemento de id criar-tarefa e armazena em button
  const button = document.querySelector('#criar-tarefa');

  // adiciona um escutador de evento click que dispara a function insertTask para elemento de id criar-tarefa
  button.addEventListener('click', insertTask);

  // obtem o elemento ol e armazena em taskList
  const taskList = document.querySelector('#lista-tarefas');

  // para cada task da lista
  taskList.addEventListener('click', changeTaskBackgroundColor);
};

//     // obtem uma lista de elementos 'task' e armazena em elementsList
// const taskElementsList = document.querySelectorAll('.task');

// // para cada task da lista
// taskElementsList.forEach((task) => {
//   const t = task;
//   // adiciona um escutador de eventos "click" que dispara a function changeTaskBackgroundColor
//   t.addEventListener('click', changeTaskBackgroundColor);
// });
