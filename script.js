// Constantes Gerais
const btnTaskCreation = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
let tasks = document.querySelectorAll('li');
const completedElement = document.querySelector('.completed');


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
  if (completedElement === null) {
    this.className = 'completed';
  } else if (this.classList.contains('completed')) {
    this.className = '';
  } else {
    completedElement.classList.remove('completed');
    this.className = 'completed';
  }
}

// Criação de nova tarefa

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
    }
  }
}

btnTaskCreation.addEventListener('click', taskCreation);
