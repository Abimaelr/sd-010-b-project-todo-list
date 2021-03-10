// Elements
const addItemBtn = document.querySelector('#criar-tarefa');
const itemText = document.querySelector('#texto-tarefa');
const olElement = document.querySelector('#lista-tarefas');
const clearBtn = document.querySelector('#apaga-tudo');
const clearCompletedBtn = document.querySelector('#remover-finalizados');
const saveBtn = document.querySelector('#salvar-tarefas');

//              Aux Functions

// Verify has class from localStorage and add it to item

const addClass = (item, classNameList) => {
  if (Object.entries(classNameList).length > 0) {
    const classList = Object.values(classNameList);
    classList.forEach((className) => {
      item.classList.add(className);
    });
  }
};

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
const addToOl = (text, classNameList = '') => {
  const li = document.createElement('li');
  li.innerText = text;
  addClass(li, classNameList);
  li.addEventListener('click', () => selectItem(li));
  li.addEventListener('dblclick', () => completeItem(li));
  olElement.appendChild(li);
};

const getItemAndAdd = () => {
  const { value } = itemText;
  addToOl(value);
  itemText.value = '';
};

// add from localStorage

const getListOnLoad = () => {
  // Object entries found in w3
  if (localStorage.getItem('list')) {
    const items = Object.entries(JSON.parse(localStorage.getItem('list')));
    console.log('oi');
    for (let index = 0; index < items.length; index += 1) {
      const text = items[index][1][0];
      const classNameList = items[index][1][1];
      addToOl(text, classNameList);
    }
  }
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

// Save List State Function

const saveListState = () => {
  if (typeof (Storage) !== 'undefined') {
    const lis = Array.from(document.querySelectorAll('li'));
    const htmlToSave = {};
    lis.forEach((li, index) => {
      htmlToSave[index] = [li.innerText, li.classList];
    });
    const lisToSave = JSON.stringify(htmlToSave);
    localStorage.setItem('list', lisToSave);
  } else {
    alert('Browser has not support to this feature');
  }
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

// add Save Button listener

const setSaveBtn = () => {
  saveBtn.addEventListener('click', saveListState);
};

// all buttons

const loadButtons = () => {
  setAddBtn();
  setClearBtn();
  setClearCompletedBtn();
  setSaveBtn();
};

window.onload = () => {
  loadButtons();
  getListOnLoad();
};
