function newItem() {
  let item = document.createElement('li');
  let taskList = document.getElementById('lista-tarefas');
  item.className = 'item-task';
  taskList.appendChild(item);
  let text = document.getElementById('texto-tarefa');
  item.innerHTML = text.value;
  text.value = '';
}

function changeColor(event) {
  let eventSelect = event.target;
  let arr = document.getElementsByClassName('item-task');
  if (eventSelect) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove('selected');
    }
    eventSelect.classList.add('selected');
  }
}

function dblClick(event) {
  let eventClick = event.target;
  if (eventClick) {
    if (eventClick.classList.contains('completed')) {
      eventClick.classList.remove('completed');
    } else {
      eventClick.classList.add('completed');
    }
  }
}

function clearAll() {
  let taskArr = document.querySelectorAll('li');

  for (let i = 0; i < taskArr.length; i++) {
    taskArr[i].remove();
  }
}

window.onload = function() {
document.getElementById('criar-tarefa').addEventListener('click', newItem);
document.getElementById('lista-tarefas').addEventListener('click', changeColor);
document.getElementById('lista-tarefas').addEventListener('dblclick', dblClick);
document.getElementById('apaga-tudo').addEventListener('click', clearAll);
}