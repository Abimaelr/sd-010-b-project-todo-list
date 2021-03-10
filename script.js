// Elements
const addItemBtn = document.querySelector('#criar-tarefa');
const itemText = document.querySelector('#texto-tarefa');
const OlElement = document.querySelector('#lista-tarefas');
// functions to Listeners

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

// add

// Add Item
const addToOl = (text) => {
  const li = document.createElement('li');
  li.innerText = text;
  li.addEventListener('click', () => selectItem(li));
  OlElement.appendChild(li);
};

const getItemAndAdd = () => {
  const { value } = itemText;
  addToOl(value);
  itemText.value = '';
};

// Add Listeners

// Add addItem button listener
const setAddBtn = () => {
  addItemBtn.addEventListener('click', getItemAndAdd);
};

// all buttons

const loadButtons = () => {
  setAddBtn();
};

window.onload = () => {
  loadButtons();
};
