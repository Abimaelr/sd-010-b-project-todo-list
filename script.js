// Constantes Gerais
const btnTaskCreation = document.getElementById('criar-tarefa');
const btnClearAll = document.getElementById('apaga-tudo');
const btnClearCompleted = document.getElementById('remover-finalizados');
const taskList = document.getElementById('lista-tarefas');
let tasks = document.querySelectorAll('li');

// Selecionar um item da lista

function selectedTask() {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement === null) {
    this.classList.add('selected');
  } else {
    selectedElement.classList.remove('selected');
    this.classList.add('selected');
  }
}

// Selecionar um item da lista

function completedTask() {
  if (this.classList.contains('completed')) {
    this.className = '';
  } else {
    this.className = 'completed';
  }
}

// Criação de nova tarefa
// Referencia: https://stackoverflow.com/questions/880512/prevent-text-selection-after-double-click

function taskCreation() {
  const input = document.getElementById('texto-tarefa').value;
  if (input === '') {
    alert('Nada a ser criado');
  } else {
    const listItem = document.createElement('li');
    listItem.innerText = input;
    taskList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
    tasks = document.querySelectorAll('li');
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].addEventListener('click', selectedTask);
      tasks[i].addEventListener('dblclick', completedTask);
      tasks[i].addEventListener('mousedown', (e) => { e.preventDefault(); }, false);
    }
  }
}

btnTaskCreation.addEventListener('click', taskCreation);

// Apagar lista

function clearAll() {
  taskList.innerHTML = '';
}

btnClearAll.addEventListener('click', clearAll);

// Apagar somente itens finalizados

function clearCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  console.log(completedTasks);
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
}

btnClearCompleted.addEventListener('click', clearCompleted);
