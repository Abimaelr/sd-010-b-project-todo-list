// Captura de elementos HTML
const inputBox = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

// ----------------------------------------------------------------------------

function insertListItem() {
  const newListItem = document.createElement('li');
  newListItem.innerText = inputBox.value;
  inputBox.value = '';
  orderedList.appendChild(newListItem);
}

// ----------------------------------------------------------------------------

// Escuta click no botão Adicionar e chama função "Insere Item Lista"
addButton.addEventListener('click', insertListItem);
