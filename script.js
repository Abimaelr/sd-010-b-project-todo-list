// requesito 5 e 6

function createListItem() {
  const taskName = document.querySelector('#texto-tarefa');
  if (taskName.value !== '') {
    const makeList = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = taskName.value;
    makeList.appendChild(listItem);
    listItem.classList.add('taskList');
    taskName.value = '';
  }
}

const btnList = document.querySelector('#criar-tarefa');
btnList.addEventListener('click', createListItem);

// requesito 7

const olParent = document.getElementById('lista-tarefas');

olParent.addEventListener('click', function(event) {
  const taskList = document.querySelector('.selected')
  if (taskList !== null) {
    taskList.classList.remove('selected');
  }  
  event.target.classList.toggle('selected');
})

// Requesito 8

olParent.addEventListener('dblclick', function(event) {
  event.target.classList.toggle('completed')
})