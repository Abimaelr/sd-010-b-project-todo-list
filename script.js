// Elements
const addItemBtn = document.querySelector('#criar-tarefa');
const itemText = document.querySelector('#texto-tarefa');
const OlElement = document.querySelector('#lista-tarefas');
const clearBtn = document.querySelector('#apaga-tudo');

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
  OlElement.appendChild(li);
};

const getItemAndAdd = () => {
  const { value } = itemText;
  addToOl(value);
  itemText.value = '';
};

// Clear All items from list

const clearAll = () => {
  OlElement.innerHTML = '';
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

// all buttons

const loadButtons = () => {
  setAddBtn();
  setClearBtn();
};

window.onload = () => {
  loadButtons();
};
