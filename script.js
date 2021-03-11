const createListButton = document.getElementById('criar-tarefa'); // constante recebe button

function createListItem() {
  const listCreate = document.getElementById('lista-tarefas'); // list recebe ol
  const capture = document.getElementById('texto-tarefa'); // capture recebe input text
  const newListItem = document.createElement('li'); // cria novo item de lista

  newListItem.innerText = capture.value; // novo item de lista + innerText recebe input value
  listCreate.appendChild(newListItem); // novo item de lista é acomplado à lista como filho
  capture.value = ''; // limpa o input com string vazia
}

function createBgColor(cgColor) {
  const aux = cgColor;
  const listColor = document.querySelectorAll('ol li');

  for (let index = 0; index < listColor.length; index += 1) {
    listColor[index].style.backgroundColor = 'rgb(256, 256, 256)';
  }

  aux.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function TheListener() {
  const generalList = document.querySelectorAll('ol');

  for (let index = 0; index < generalList.length; index += 1) {
    generalList[index].addEventListener('click', createBgColor);
  }
}

createListButton.addEventListener('click', createListItem); // adiciona função ao button
TheListener();
