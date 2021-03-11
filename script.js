let addTaskBtn = document.getElementById('criar-tarefa')
let listaTarefas = document.getElementById('lista-tarefas')
let allClearBtn = document.getElementById('apaga-tudo')
let clearTaskBtn = document.getElementById('remover-finalizados')
let saveBtn = document.getElementById('salvar-tarefas')
let upBtn = document.getElementById('mover-cima')
let downBtn = document.getElementById('mover-baixo')

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

// SOBRE JSON.stringfy()
// https://www.w3schools.com/js/js_json_stringify.asp
function save() {
  localStorage.clear();
  [...listaTarefas.children].map( (el, index) => {
    let str = {
      class: el.className,
      text: el.innerText
    }
    localStorage.setItem(`${[index]}`, JSON.stringify(str))
  })
}

// SOBRE JSON.parse()
// https://www.w3schools.com/js/js_json_parse.asp
function loadList(){
  for (let i = 0; i < localStorage.length; i+=1){
    let obj = JSON.parse(localStorage[i])
    let li = createElement('li')
    li.className = obj.class
    li.innerText = obj.text
    listaTarefas.appendChild(li)
  }
}

// SOBRE CLONAR UM ELEMENTO HTML COM cloneNode()
// https://gomakethings.com/how-to-copy-or-clone-an-element-with-vanilla-js/#:~:text=Copying%20an%20element%20%23&text=Now%2C%20we%20can%20use%20the,in%20true%20as%20an%20argument.
function moveUp() {
  listaTarefas.childNodes.forEach( el => {
    if (el.classList.contains('selected') && el !== listaTarefas.firstChild){
      let selected = el
      let previous = el.previousSibling.cloneNode(true)
      el.previousSibling.innerText = selected.innerText
      el.previousSibling.className = selected.className
      el.innerText = previous.innerText
      el.className = previous.className      
    }
  })
}

function moveDown() {
    let el = document.querySelector('.selected')
    if (el !== listaTarefas.lastChild){
      let selected = el
      let next = el.nextSibling.cloneNode(true)
      el.nextSibling.innerText = selected.innerText
      el.nextSibling.className = selected.className
      el.innerText = next.innerText
      el.className = next.className      
    }

}

window.onload = function init() {
  loadList()
  addTaskBtn.addEventListener('click', addTask)
  listaTarefas.addEventListener('click', setSelected)
  listaTarefas.addEventListener('dblclick', setTaskDone)
  allClearBtn.addEventListener('click', setEmptyList)
  clearTaskBtn.addEventListener('click', clearTask)
  saveBtn.addEventListener('click', save)
  upBtn.addEventListener('click', moveUp)
  downBtn.addEventListener('click', moveDown)
}

