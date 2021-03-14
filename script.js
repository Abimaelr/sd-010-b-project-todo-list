const createListButton = document.getElementById('criar-tarefa'); // button Criar Tarefa
const clearButton = document.getElementById('apaga-tudo'); // button Apagar Lista

function createListItem() {
  const listCreate = document.getElementById('lista-tarefas'); // ol gE-ID
  const capture = document.getElementById('texto-tarefa'); // input gE-ID
  const newListItem = document.createElement('li');

  newListItem.innerText = capture.value;
  listCreate.appendChild(newListItem);
  capture.value = '';
}

function createBgColor(cgColor) {
  const listColor = document.querySelectorAll('li'); // li qsAll
  const aux = cgColor;

  for (let index = 0; index < listColor.length; index += 1) {
    listColor[index].style.backgroundColor = 'rgb(256, 256, 256)';
  }

  aux.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completeTask(task) {
  const completedTask = task;
  completedTask.classList.add('completed');
}

function removeCompletedTask(task) {
  const completedTask = task;
  completedTask.classList.remove('completed');
}

function clearList() {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    list[i].remove();
  }
}

createListButton.addEventListener('click', createListItem);
clearButton.addEventListener('click', clearList);

function clickListener() {
  const list = document.querySelectorAll('ol'); // ol qSAll
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', createBgColor);
  }
}
clickListener();

function DblclickListener() {
  document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      removeCompletedTask(event.target);
    } else {
      completeTask(event.target);
    }
  }, false);
}
DblclickListener();
