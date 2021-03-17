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


window.onload = function() {
document.getElementById('criar-tarefa').addEventListener('click', newItem);
document.getElementById('lista-tarefas').addEventListener('click', changeColor);

}