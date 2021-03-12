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
    liArray1[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
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
  if (event.target.className == 'list-item'){
  event.target.className = 'list-item completed';
  } else {
    event.target.className = 'list-item';
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
  let liArray3 = document.querySelectorAll('.list-item.completed');
  let getTaskList2 = document.getElementById('lista-tarefas');
  for (let index = 0; index < liArray3.length; index += 1) {
    getTaskList2.removeChild(liArray3[index]);
    
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

// no window.onload puxar as informações salvas no localstorage através de uma função;
// essas informações precisam ser apendadas na tag ol com id lista-tarefas;

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