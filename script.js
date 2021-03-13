function createLiText () {
  let getText = document.getElementById('texto-tarefa').value;
  let element = document.createElement('li');
  if (getText !== '') { 
    element.className = 'list-item';
    document.getElementById('lista-tarefas').appendChild(element).innerText = getText;
    document.getElementById('texto-tarefa').value = '';
  }
}

document.getElementById('criar-tarefa').addEventListener('click', createLiText);

function changeColor (event) {
  let liArray1 = document.getElementsByClassName('list-item');
  for (index = 0; index < liArray1.length; index += 1) {
    liArray1[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function addEventsToLi () {
  let liArray2 = document.getElementsByClassName('list-item');
  for (index = 0; index < liArray2.length; index += 1) {
    liArray2[index].addEventListener('click', changeColor);
    liArray2[index].addEventListener('dblclick', checkItem);
  }
}
 
document.getElementById('criar-tarefa').addEventListener('click', addEventsToLi);

function checkItem (event) {
  if (event.target.className == 'list-item selected'){
  event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
  
function cleanList () {
  let getTaskList = document.getElementById('lista-tarefas');
  while (getTaskList.firstChild) {
    getTaskList.removeChild(getTaskList.firstChild);
    }
  }

document.getElementById('apaga-tudo').addEventListener('click', cleanList);

function cleanCompleted () {
  let liArray = document.querySelectorAll('.list-item.completed');
  let getTaskList2 = document.getElementById('lista-tarefas');
  for (let index = 0; index < liArray.length; index += 1) {
    getTaskList2.removeChild(liArray[index]);
    
  }
}

document.getElementById('remover-finalizados').addEventListener('click', cleanCompleted);

function saveListData () {
  let liArray4 = document.querySelectorAll('.list-item');
  for (let index = 0; index < liArray4.length; index += 1){
    localStorage.setItem('li'+[index], liArray4[index].outerHTML);
  }
}

document.getElementById('salvar-tarefas').addEventListener('click', saveListData);

window.onload = function() {
  loadLocalStorage();
}

function loadLocalStorage () {
let string = '';
  for (let index = 0; index < localStorage.length; index += 1) {
  string += (localStorage.getItem('li'+[index]));
  }
  document.getElementById('lista-tarefas').innerHTML = string;
}

function moveUp () {
  let liArray = document.querySelectorAll('.list-item');
  let dataSaver = {};
  for (let index = 0; index < liArray.length; index += 1) {
    if (liArray[index].classList.contains('selected') && liArray[index] != liArray[0]) {
      dataSaver.text = liArray[index].previousElementSibling.innerText;
      dataSaver.class = liArray[index].previousElementSibling.className;
      Object.freeze(dataSaver);
      liArray[index].previousElementSibling.innerText = liArray[index].innerText;
      liArray[index].previousElementSibling.className = liArray[index].className;
      liArray[index].innerText = dataSaver.text;
      liArray[index].className = dataSaver.class;
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', moveUp);

function moveDown () {
  let liArray = document.querySelectorAll('.list-item');
  let dataSaver = {};
  for (let index = 0; index < liArray.length; index += 1) {
    if (liArray[index].classList.contains('selected') && liArray[index] != liArray[liArray.length - 1]) {
      dataSaver.text = liArray[index].nextElementSibling.innerText;
      dataSaver.class = liArray[index].nextElementSibling.className;
      Object.freeze(dataSaver);
      liArray[index].nextElementSibling.innerText = liArray[index].innerText;
      liArray[index].nextElementSibling.className = liArray[index].className;
      liArray[index].innerText = dataSaver.text;
      liArray[index].className = dataSaver.class;
      break;
    }
  }
}

document.getElementById('mover-baixo').addEventListener('click', moveDown);