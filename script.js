window.onload = function () {
  const creatingTasks = document.querySelector('#criar-tarefa');
  creatingTasks.addEventListener('click', addTask);
  const removeItem = document.querySelector('#remover-selecionado');
  removeItem.addEventListener('click', removeSelectedItem);
};

const inputText = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
function addTask() {
  const item = document.createElement('li');
  item.className = 'item';
  item.innerText = inputText.value;
  list.appendChild(item);
  inputText.value = '';
  item.addEventListener('click', selectingItem);
  item.addEventListener('dblclick', itemComplete);
}

function itemComplete(event) {
  if (event.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.toggle('completed');
  }
}

function selectedItem(event) {
  removeSelected();
  event.target.classList.toggle('selected');
}

function removeSelectedItem() {
  const selectedItem = document.querySelector('.selected');
  selectedItem.remove();
}

function removeSelected() {
  const selection = document.querySelectorAll('.selected');
  for (let index = 0; index < selection.length; index += 1) {
    selection[index].classList.remove('selected');
  }
}
