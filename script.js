
const lista = document.getElementById('lista-tarefas');
const tarefas = document.getElementById('texto-tarefa');


function createTaskList() {
  if (tarefas.value) {
    const itemAdd = document.createElement('li');
    itemAdd.innerText = tarefas;
    lista.appendChild(itemAdd);
  } else {
    alert('Digite uma tarefa');
  }
  tarefas.value = '';  
}

function addItem() {
  const newItem = document.querySelector('#criar-tarefa');
  newItem.addEventListener('click', createTaskList);
}

createTaskList();
addItem();

