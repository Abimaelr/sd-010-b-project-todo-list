// Elements
const addItemBtn = document.querySelector('#criar-tarefa');
const itemText = document.querySelector('#texto-tarefa');
const OlElement = document.querySelector('#lista-tarefas');
// functions to Listeners

// Add Item
const addToOl = (text) => {
  const li = document.createElement('li');
  li.innerText = text;
  li.addEventListener('click', () => {
    const selectedElement = document.querySelector('.selected');
    if (selectedElement) {
      selectedElement.classList.remove('selected');
      li.classList.add('selected');
    } else {
      li.classList.add('selected');
    }
  });
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
