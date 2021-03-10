const selected = {};

const selector = (id) => document.querySelector(id);
const selectorAll = (id) => document.querySelectorAll(id);

// Create Task
const createTask = () => {
  let button = selector('#criar-tarefa');
  button.addEventListener('click', (create) => {
    let task = document.createElement('li');
    selector('#lista-tarefas').appendChild(task);
    task.innerHTML = selector('#texto-tarefa').value;
    selector('#texto-tarefa').value = '';
    task.addEventListener('click', taskSelected);
    task.addEventListener('dblclick', taskCompleted);
  });
};
let taskSelected = (elem) => {
  elem = elem.target;
  if (!selected.task) {
    selected.task = elem;
    selected.task.classList.add('selected');
  }
  selected.task.classList.remove('selected');
  selected.task = elem;
  selected.task.classList.add('selected');
};
let taskCompleted = (elem) => {
  elem = elem.target;
  if (elem.classList.contains('completed')) {
    elem.classList.remove('completed');
  } else {
    elem.classList.add('completed');
  }
};
// Clear
const clearTask = () => {
  let button = selector('#apaga-tudo');
  button.addEventListener('click', (clear) => {
    for (task of selectorAll('#lista-tarefas li')) {
      task.parentNode.removeChild(task);
    }
  });
};
// Clear Completed
const clearCompleted = () => {
  let button = selector('#remover-finalizados');
  button.addEventListener('click', (clear) => {
    for (task of selectorAll('.completed')) {
      task.parentNode.removeChild(task);
    }
  });
};
// Clear Completed
const clearSelected = () => {
  let button = selector('#remover-selecionado');
  button.addEventListener('click', (clear) => {
    selected.task.parentNode.removeChild(selected.task)
  });
};
clearSelected();
clearCompleted();
clearTask();
createTask();
