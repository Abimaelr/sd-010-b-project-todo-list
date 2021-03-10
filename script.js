// Elements
const addItemBtn = document.querySelector('#criar-tarefa');
const itemText = document.querySelector('#texto-tarefa');
const olElement = document.querySelector('#lista-tarefas');
const clearBtn = document.querySelector('#apaga-tudo');
const clearCompletedBtn = document.querySelector('#remover-finalizados');

//          functions to Listeners

// Add selected class to clicked item

const selectItem = (item) => {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement) {
    selectedElement.classList.remove('selected');
    item.classList.add('selected');
  } else {
    item.classList.add('selected');
  }
};

const completeItem = (item) => {
  const { classList } = item;
  if (classList.contains('completed')) {
    classList.remove('completed');
  } else {
    classList.add('completed');
  }
};

// add

// Add Item
const addToOl = (text) => {
  const li = document.createElement('li');
  li.innerText = text;
  li.addEventListener('click', () => selectItem(li));
  li.addEventListener('dblclick', () => completeItem(li));
  olElement.appendChild(li);
};

const getItemAndAdd = () => {
  const { value } = itemText;
  addToOl(value);
  itemText.value = '';
};

// Clear All items from list

const clearAll = () => {
  olElement.innerHTML = '';
};

// Clear Completed Items from list

const clearCompletedItems = () => {
  const completedItems = Array.from(document.querySelectorAll('.completed'));

  // forgot how to remove specific elements, so i found the remove child in stackoveflow
  completedItems.forEach((element) => {
    olElement.removeChild(element);
  });
};

//      Add Listeners

// Add addItem button listener
const setAddBtn = () => {
  addItemBtn.addEventListener('click', getItemAndAdd);
};

// Add ClearAll Button Listener
const setClearBtn = () => {
  clearBtn.addEventListener('click', clearAll);
};

// add Clear Completed Item from list button listener
const setClearCompletedBtn = () => {
  clearCompletedBtn.addEventListener('click', clearCompletedItems);
};

// all buttons

const loadButtons = () => {
  setAddBtn();
  setClearBtn();
  setClearCompletedBtn();
};

window.onload = () => {
  loadButtons();
};
