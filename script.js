const createListButton = document.getElementById('criar-tarefa'); // button gE-ID

function createListItem() {
  const listCreate = document.getElementById('lista-tarefas'); // ol gE-ID
  const newListItem = document.createElement('li');
  const capture = document.getElementById('texto-tarefa'); // input gE-ID

  newListItem.innerText = capture.value;
  listCreate.appendChild(newListItem);
  capture.value = '';
}

function createBgColor(cgColor) {
  const listColor = document.querySelectorAll('li'); // ol li qsAll
  const aux = cgColor;

  for (let index = 0; index < listColor.length; index += 1) {
    listColor[index].style.backgroundColor = 'rgb(256, 256, 256)';
  }

  aux.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function doneTask(event) {
  const listCreate = document.getElementById('lista-tarefas'); // ol gE-ID
  const aux = event.target;

  if (aux.id === listCreate) {
    event.preventDefault();
  } else {
    aux.classList.toggle('completed');
  }
}

function TheListener() {
  const generalList = document.querySelectorAll('ol'); // ol qSAll
  for (let index = 0; index < generalList.length; index += 1) {
    generalList[index].addEventListener('click', createBgColor);
    generalList[index].addEventListener('dblclick', doneTask);
  }
}

createListButton.addEventListener('click', createListItem);

TheListener();
