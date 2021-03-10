// Elements
const addItemBtn = document.querySelector('#criar-tarefa');
const itemText = document.querySelector('#texto-tarefa');
const OlElement = document.querySelector('#lista-tarefas');
// functions to Listeners

// Add Item
const addToOl = (text) => {
  const li = document.createElement('li');
  li.innerText = text;
  OlElement.appendChild(li);
};

const getItemAndAdd = () => {
  let { value } = itemText;
  addToOl(value);
  value = '';
};

// Add Listeners

// Add add item button listener
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
