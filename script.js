const list = document.querySelector('#lista-tarefas'); // ol lista-tarefas
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const delAllButton = document.querySelector('#apaga-tudo');
const delDoneButton = document.querySelector('#remover-finalizados');
const delItemBut = document.querySelector('#remover-selecionado'); // gets Clear Item button
// const delDonn = document.querySelectorAll('')

// add a task to the Task List
// I took this IF idea from Bruno Afonso's PR: https://github.com/tryber/sd-010-b-project-todo-list/blob/brunoAffonso-project-tod-list/script.js
function addTask() {
  button.addEventListener('click', function () {
    const listItem = document.createElement('li');
    listItem.addEventListener('click', selectItem);
    listItem.addEventListener('dblclick', doneNotDone);
    if (input.value !== '') {
      listItem.innerHTML = input.value;
      list.appendChild(listItem);
      input.value = '';
    }
  });
}

addTask();

// change background color when item is selected with a single click
function selectItem() {
  const selectedItem = document.querySelector('.selectedItem');
  if (selectedItem) {
    selectedItem.classList.remove('selectedItem');
    let clickedItem = event.target;
    clickedItem.classList.add('selectedItem');
  } else {
    let clickedItem = event.target;
    clickedItem.classList.add('selectedItem');
  }
}

// strikethroughs the double clicked item
function doneNotDone() {
  let completed = event.target;
  if (completed.classList[0] == 'completed' || completed.classList[1] == 'completed') {
    completed.classList.remove('completed');
  } else {
    completed.classList.add('completed');
  }
}

// clears the whole task list
// I took this innerHTML idea from https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
function deleteALL() {
  delAllButton.addEventListener('click', function () {
    list.innerHTML = '';
  });
}

deleteALL();

// deletes only done tasks
function deleteDoneTasks() {
  delDoneButton.addEventListener('click', function () {
    const doneTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < doneTasks.length; i++) {
      doneTasks[i].remove();
    }
  });
}

deleteDoneTasks();

// save the list on localStorage
function saveList() {
  const saveButton = document.querySelector('#salvar-tarefas');
  saveButton.addEventListener('click', function () {
    localStorage.setItem('list', JSON.stringify(list.innerHTML));
  });
}

saveList();

// fill the OL with the list in localStorage
function loadList() {
  const savedList = localStorage.getItem('list');
  list.innerHTML = JSON.parse(savedList);
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', selectItem);
    lis[i].addEventListener('dblclick', doneNotDone);
  }
}

loadList();

// the next 2 functions I took the idea from https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
// move an item up
function moveUp() {
  const up = document.querySelector('#mover-cima');
  up.addEventListener('click', function () {
    const selected = document.querySelector('.selectedItem');
    if (selected && selected.previousElementSibling) {
      selected.parentNode.insertBefore(selected, selected.previousElementSibling);
    }
  });
}

moveUp();

// move an item down
function moveDown() {
  const down = document.querySelector('#mover-baixo');
  down.addEventListener('click', function () {
    const selected = document.querySelector('.selectedItem');
    if (selected && selected.nextElementSibling) {
      selected.parentNode.insertBefore(selected.nextElementSibling, selected);
    }
  });
}

moveDown();

// remove selected item from list
function delSelected() {
  delItemBut.addEventListener('click', function () {
    const selected = document.querySelector('.selectedItem');
    console.log(selected);
    selected.remove();
  });
}

delSelected();