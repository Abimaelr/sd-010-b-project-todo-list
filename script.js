let addTaskBtn = document.getElementById('criar-tarefa')
let listaTarefas = document.getElementById('lista-tarefas')
let allClearBtn = document.getElementById('apaga-tudo')
let clearTaskBtn = document.getElementById('remover-finalizados')

function createElement(tagName) {
  let element = document.createElement(tagName)
  return element
}

function addTask() {
  let inputTask = document.getElementById('texto-tarefa').value
  let liTask = createElement('li')
  liTask.innerText = inputTask
  listaTarefas.appendChild(liTask)
  document.getElementById('texto-tarefa').value = ""
}

function setSelected(event) {
  let el = event.target
  if(el.id === "lista-tarefas"){
    event.preventDefault()
  } else {
    let arr = listaTarefas.childNodes
    arr.forEach( el => el.classList.remove('selected'))
    el.classList.add('selected')
  }
}

function setTaskDone(event) {
  let el = event.target
  if(el.id === "lista-tarefas"){
    event.preventDefault()
  } else {
    el.classList.toggle('completed')
  }
}

function setEmptyList() {
  while(listaTarefas.lastChild){
    listaTarefas.removeChild(listaTarefas.lastChild)
  }
}

// COMO REMOVER ELEMENTOS POR CLASSE
// https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
function clearTask() {
  let tasksDone = document.querySelectorAll('.completed')
  tasksDone.forEach( el => el.remove())  
}

window.onload = function init() {

  addTaskBtn.addEventListener('click', addTask)
  listaTarefas.addEventListener('click', setSelected)
  listaTarefas.addEventListener('dblclick', setTaskDone)
  allClearBtn.addEventListener('click', setEmptyList)
  clearTaskBtn.addEventListener('click', clearTask)

}