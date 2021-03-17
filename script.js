// Captura de elementos HTML
const inputBox = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

// ----------------------------------------------------------------------------

// Função "Item Focado": Marca item selecionado com cor GRAY (adiciona ClassName=selected-list-item) e remove do selcionado, se houver.
function focusedItem(li) {
  const currentlyFocusedItem = document.querySelector('.selected-list-item');

  if (currentlyFocusedItem != null) {
    currentlyFocusedItem.classList.remove('selected-list-item');
    li.target.classList.add('selected-list-item');
  } else {
    li.target.classList.add('selected-list-item');
  }
}

// Função "Item Completado": Marca item como completo (adiciona ClassName=completed-list-item) ou remove se já marcado.
function completedItem(li) {
  const currentlyItem = li.target;
  const completed = currentlyItem.classList.contains('completed');

  if (completed) {
    currentlyItem.classList.remove('completed');
  } else {
    currentlyItem.classList.add('completed');
  }
}

// Função "Itens da Lista Ouvindo": Adiciona evento"s" de escuta em cada item da lista de tarefas e chama funções específicas pra cada evento"
function listItemsListening() {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', focusedItem);
    listItems[index].addEventListener('dblclick', completedItem);
  }
}

// Função "Insere Item lista": Insere elemento <li>, dentro da <ol>, com conteúdo do inputBox.
function insertListItem() {
  const newListItem = document.createElement('li');
  newListItem.innerText = inputBox.value;
  orderedList.appendChild(newListItem);
  inputBox.value = '';
  listItemsListening();
}

// ----------------------------------------------------------------------------

// Escuta click no botão Adicionar e chama função "Insere Item Lista"
addButton.addEventListener('click', insertListItem);
