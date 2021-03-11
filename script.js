const listaTarefas = 'lista-tarefas';

function addSelectedClass(element, selecClass) {
  const selectedClass = selecClass;
  const selected = document.querySelector(`.${selectedClass}`);
  if (selected !== null) {
    selected.classList.remove(selectedClass);
  }
  element.target.classList.add(selecClass);
}

function cleanInput() {
  const input = document.getElementById('texto-tarefa');
  input.value = '';
}

function addEvents(item) {
  item.addEventListener('click', (element) => {
    addSelectedClass(element, 'selected');
  });
  item.addEventListener('dblclick', (element) => {
    element.target.classList.toggle('completed');
  });
}

function addItemToList() {
  const list = document.getElementById(listaTarefas);
  const item = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  item.innerText = input.value;
  addEvents(item);
  list.appendChild(item);
}

function addButtonClick(elementId, clickFunction) {
  const button = document.getElementById(elementId);
  button.addEventListener('click', clickFunction);
}

function cleanList() {
  const list = document.getElementById(listaTarefas);
  while (list.childNodes.length > 0) {
    list.removeChild(list.lastChild);
  }
}

function removeCompletedItems() {
  const list = document.getElementById(listaTarefas);
  const listChildren = list.children;
  const completedClass = 'completed';
  for (let index = (listChildren.length - 1); index >= 0; index -= 1) {
    if (listChildren[index].classList.contains(completedClass)) {
      list.removeChild(listChildren[index]);
    }
  }
}

function saveList() {
  const list = document.getElementById('lista-tarefas');
  const listChildren = list.innerHTML;
  localStorage.setItem('savedList', listChildren);
}

function addEventListenerToReturned(returned) {
  const item = returned.children;
  for (let index = 0; index < item.length; index += 1) {
    addEvents(item[index]);
  }
}

function returnList() {
  const saved = localStorage.getItem('savedList');
  const content = (saved) ? saved.trim() : saved;
  if (content !== '') {
    const list = document.getElementById(listaTarefas);
    list.innerHTML = content;
    addEventListenerToReturned(list);
  }
}

window.onload = () => {
  returnList();
  addButtonClick('criar-tarefa', () => {
    addItemToList();
    cleanInput();
  });

  addButtonClick('apaga-tudo', () => {
    cleanList();
  });

  addButtonClick('remover-finalizados', () => {
    removeCompletedItems();
  });

  addButtonClick('salvar-tarefas', () => {
    saveList();
  });
};
