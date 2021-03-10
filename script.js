let addTaskButton = document.getElementById('criar-tarefa')
function createElement(tagName) {
  let element = document.createElement(tagName)
  return element
}

function addTask() {
  let inputTask = document.getElementById('texto-tarefa').value
  let ol = document.getElementById('lista-tarefas')
  let liTask = createElement('li')
  liTask.innerText = inputTask
  ol.appendChild(liTask)
  document.getElementById('texto-tarefa').value = ""
}

window.onload = function init() {

  addTaskButton.addEventListener('click', addTask)

}