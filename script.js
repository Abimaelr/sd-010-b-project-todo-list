const list = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const delAllButton = document.querySelector('#apaga-tudo');
const delDoneButton = document.querySelector('#remover-finalizados');
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
    console.log(doneTasks);
    for (let i = 0; i < doneTasks.length; i++) {
      doneTasks[i].remove();
    }
    console.log(doneTasks);
  });
}

deleteDoneTasks();
