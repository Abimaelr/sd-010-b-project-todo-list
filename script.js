function completedTask(event) {
  const compTask = event.target;
  if (compTask.classList.contains('completed')) {
    compTask.classList.remove('completed');
  } else {
    compTask.classList.add('completed');
  }
}

// eslint-disable-next-line max-lines-per-function
function createTask() {
  const button = document.getElementById('criar-tarefa');
  const taskList = document.getElementById('lista-tarefas');

  // eslint-disable-next-line max-lines-per-function
  button.addEventListener('click', () => {
    const item = document.createElement('li');
    const input = document.getElementById('texto-tarefa');
    item.innerText = input.value;
    taskList.appendChild(item);

    input.value = '';

    item.addEventListener('click', (event) => {
      const allLis = document.getElementsByTagName('li');
      for (let i = 0; i < allLis.length; i += 1) {
        allLis[i].style.backgroundColor = 'rgba(0, 0, 0, 0.01)';
      }
      // eslint-disable-next-line no-param-reassign
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });

    item.addEventListener('dblclick', completedTask);
  });
}

createTask();

function clearAll() {
  const buttonClearAll = document.getElementById('apaga-tudo');

  buttonClearAll.addEventListener('click', () => {
    document.getElementById('lista-tarefas').innerHTML = '';
  });
}

clearAll();

function removeAllCompletedTasks() {
  const buttonClearAll = document.getElementById('remover-finalizados');

  buttonClearAll.addEventListener('click', () => {
    document.querySelectorAll('.completed').forEach((e) => {
      e.remove();
    });
  });
}

removeAllCompletedTasks();

function removeSelectedtask() {
  const buttonRemoveSelected = document.getElementById('remover-selecionado');

  buttonRemoveSelected.addEventListener('click', () => {
    const lisSelected = document.querySelectorAll('li');
    lisSelected.forEach((e) => {
      if (e.style.backgroundColor === 'rgb(128, 128, 128)') {
        e.remove();
      }
    });
  });
}

removeSelectedtask();

// eslint-disable-next-line max-lines-per-function
function moveUpMoveDown() {
  const buttonMoveUp = document.getElementById('mover-cima');

  const buttonMoveDown = document.getElementById('mover-baixo');

  buttonMoveUp.addEventListener('click', () => {
    const selectedLi = document.querySelectorAll('li');
    for (let i = 1; i < selectedLi.length; i += 1) {
      if (selectedLi[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        selectedLi[i].parentNode.insertBefore(selectedLi[i], selectedLi[i].previousSibling);
      }
    }
  });

  buttonMoveDown.addEventListener('click', () => {
    const selectedLi = document.querySelectorAll('li');
    for (let i = 0; i < selectedLi.length - 1; i += 1) {
      if (selectedLi[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        // eslint-disable-next-line max-len
        selectedLi[i].parentNode.insertBefore(selectedLi[i], selectedLi[i].nextElementSibling.nextSibling);
      }
    }
  });
}

moveUpMoveDown();

function save() {
  const taskList = document.getElementById('lista-tarefas');
  [...taskList.children].map((el, index) => {
    const str = {
      // class: el.className,
      text: el.innerText,
    };
    localStorage.setItem(`${[index]}`, JSON.stringify(str));
    return true;
  });
}

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', save);

function loadList() {
  const taskList = document.getElementById('lista-tarefas');
  for (let i = 0; i < localStorage.length; i += 1) {
    const obj = JSON.parse(localStorage[i]);
    const li = document.createElement('li');
    // li.className = obj.class;
    li.innerText = obj.text;
    taskList.appendChild(li);
  }
  const clearList = document.getElementById('apaga-tudo');

  clearList.addEventListener('click', () => {
    localStorage.clear();
  });
}

window.onload = function init() {
  loadList();
};
