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
  let getTaskList = document.getElementById('lista-tarefas')
  while (getTaskList.firstChild) {
    getTaskList.removeChild(getTaskList.firstChild);
    }
  }

document.getElementById('apaga-tudo').addEventListener('click', cleanList);