// requesito 5

function createListItem () {  
  const makeList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  const taskName = document.querySelector('#texto-tarefa');
  listItem.innerText = taskName.value;
  makeList.appendChild(listItem);
  taskName.value = '';
    
}

const btnList = document.querySelector('#criar-tarefa');
btnList.addEventListener('click', createListItem);

