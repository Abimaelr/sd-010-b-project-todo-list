// <!-- Requisito 5 -->
// <!-- Requisito 6 -->
let addTask = document.getElementById('criar-tarefa');

addTask.addEventListener('click', function () {
  let addItenList = document.createElement('li')
  let inputText = document.getElementById('texto-tarefa').value
  addItenList.innerText = inputText
  document.getElementById('lista-tarefas').appendChild(addItenList)
  document.getElementById('texto-tarefa').value = ""
})

// <!-- Requisito 7 -->

let liColor = document.getElementById('lista-tarefas');

liColor.addEventListener('click', function (event) {
  event.target.classList.add('itemSelected')
})

