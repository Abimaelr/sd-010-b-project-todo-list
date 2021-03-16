// Captura de elementos HTML
const inputBox = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

// ----------------------------------------------------------------------------

// Função "Item focado": Altera background color do item de lista selcionado
function focusedItem(li) {
  const currentlyFocusedIte = document.querySelector('.selected-list-item');
  if (currentlyFocusedIte != null) {
    currentlyFocusedIte.className = '';
  }
  const changeBackgroundColor = li.target;
  changeBackgroundColor.className = 'selected-list-item';
}

// Função "Item da Lista Ouvindo" Escuta click em cada item da lista de tarefas e chama função "Item focado"
function listItemListening() {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', focusedItem);
  }
}

// Função "Insere Item lista"
function insertListItem() {
  const newListItem = document.createElement('li');
  newListItem.innerText = inputBox.value;
  orderedList.appendChild(newListItem);
  inputBox.value = '';
  listItemListening();
}

// ----------------------------------------------------------------------------

// Escuta click no botão Adicionar e chama função "Insere Item Lista"
addButton.addEventListener('click', insertListItem);
