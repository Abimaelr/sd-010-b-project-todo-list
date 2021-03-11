const selected = {};

const selector = (id) => document.querySelector(id);
const selectorAll = (id) => document.querySelectorAll(id);

// Create Task
const createTask = () => {
  const button = selector('#criar-tarefa');
  button.addEventListener('click', (create) => {
    const task = document.createElement('li');
    selector('#lista-tarefas').appendChild(task);
    task.textContent = selector('#texto-tarefa').value;
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
  const button = selector('#apaga-tudo');
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
    selected.task.parentNode.removeChild(selected.task);
  });
};
// Save Task
const saveTask = () => {
  let button = selector('#salvar-tarefas');
  button.addEventListener('click', (clear) => {
    if (localStorage.getItem('saveTask')) localStorage.clear();
    const taskObj = {};
    for (task of selectorAll('#lista-tarefas li')) {
      taskObj[`${task.innerText}`] = task.className;
    }
    localStorage.saveTask = JSON.stringify(taskObj);
  });
};

if (localStorage.getItem('saveTask')) {
  const loadTask = JSON.parse(localStorage.saveTask);
  let create;
  for (task in loadTask) {
    create = document.createElement('li');
    selector('#lista-tarefas').appendChild(create);
    create.addEventListener('click', taskSelected);
    create.addEventListener('dblclick', taskCompleted);
    create.className = loadTask[task];
    create.innerText = task;
    if (create.classList.contains('selected')) selected.task = create;
  }
}

let moveTaskUp = () => {
  let button = selector('#mover-cima');
  button.addEventListener('click', (move) => {
    if (selected.task) {
      let target = selected.task.previousElementSibling;
      if (target != null) {
        selected.task.parentNode.insertBefore(
          target,
          selected.task.nextElementSibling
        );
      }
    }
  });
};

let moveTaskDown = () => {
  let button = selector('#mover-baixo');
  button.addEventListener('click', (move) => {
    if (selected.task) {
      let target = selected.task.nextElementSibling;
      if (target != null) {
        selected.task.parentNode.insertBefore(target, selected.task);
      }
    }
  });
};

let checkTaskSelected = (check) => {
  for (task of selectorAll('#lista-tarefas li')) {
    return console.log(task);
  }
};

saveTask();
clearSelected();
clearCompleted();
clearTask();
createTask();
moveTaskUp();
moveTaskDown();
