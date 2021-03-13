// requesito 5 e 6

function createListItem () {
  const taskName = document.querySelector('#texto-tarefa');
  if (taskName.value !== '') {
    const makeList = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');    
    listItem.innerText = taskName.value;
    makeList.appendChild(listItem);
    taskName.value = ''; 
  }
};

const btnList = document.querySelector('#criar-tarefa');
btnList.addEventListener('click', createListItem);