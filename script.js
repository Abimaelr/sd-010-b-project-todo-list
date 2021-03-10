// Constantes Gerais
const btnTaskCreation = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

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
  }
}

btnTaskCreation.addEventListener('click', taskCreation);
