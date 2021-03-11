const createListButton = document.getElementById('criar-tarefa'); // button gE-ID

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

createListButton.addEventListener('click', createListItem);

function clickListener() {
  const generalList = document.querySelectorAll('ol'); // ol qSAll
  for (let index = 0; index < generalList.length; index += 1) {
    generalList[index].addEventListener('click', createBgColor);
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
