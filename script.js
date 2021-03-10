// elements
const olList = document.querySelector('#lista-tarefas');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');
const btnAddTodo = document.querySelector('#criar-tarefa');
const inputTodo = document.querySelector('#texto-tarefa');
const childs = olList.children;
const bgColor = 'rgb(128, 128, 128)';

// add to-dos

const addTodo = () => {
  const task = document.createElement('li');
  task.innerText = inputTodo.value;
  task.className = 'task';
  olList.appendChild(task);
  inputTodo.value = '';
};

btnAddTodo.addEventListener('click', addTodo);
inputTodo.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) addTodo();
});

// select to-dos

const taskSelect = (e) => {
  const tasks = document.querySelectorAll('.task');

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i] === e.target) {
      tasks[i].style.backgroundColor = bgColor;
    } else {
      tasks[i].style.backgroundColor = 'transparent';
    }
  }
};

olList.addEventListener('click', taskSelect);

// moveUp to-dos

const moveUp = () => {
  for (let i = 0; i < childs.length; i += 1) {
    const index = Array.prototype.indexOf;
    if (
      childs[i].style.backgroundColor === bgColor && index.call(childs, childs[i]) !== 0
    ) {
      olList.insertBefore(childs[i], childs[i].previousElementSibling);
    }
  }
};

btnMoveUp.addEventListener('click', moveUp);

// moveDown to-dos

const moveDown = () => {
  for (let i = childs.length - 2; i >= 0; i -= 1) {
    if (childs[i].style.backgroundColor === bgColor) {
      olList.insertBefore(childs[i].nextElementSibling, childs[i]);
    }
  }
};

btnMoveDown.addEventListener('click', moveDown);
