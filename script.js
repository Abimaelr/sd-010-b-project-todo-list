const list = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');

// add a task to the Task List
function addTask() {
  button.addEventListener('click', function () {
    const listItem = document.createElement('li');
    listItem.addEventListener('click', selectItem);
    if (input.value !== '') { // I took this IF idea from Bruno Afonso's PR: https://github.com/tryber/sd-010-b-project-todo-list/blob/brunoAffonso-project-tod-list/script.js
      listItem.innerHTML = input.value; // I took this logic from http://embuscadocodigo.com/codigos/javascript/capturar-valor-digitado-javascript.html
      list.appendChild(listItem);
      input.value = '';
    }
  });
}

addTask();

function selectItem() {
  const selectedItem = document.querySelector('.selectedItem');
  if (selectedItem) {
    selectedItem.classList.remove('selectedItem');
    let clickedItem = event.target;
    clickedItem.classList.add('selectedItem');
  } else {
    let clickedItem = event.target;
    clickedItem.classList.add('selectedItem');
  }
}
