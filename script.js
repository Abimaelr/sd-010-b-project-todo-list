// <!-- Requisito 5 -->
// <!-- Requisito 6 -->
let addTask = document.getElementById('criar-tarefa');

addTask.addEventListener('click', function () {
  let addItenList = document.createElement('li');
  let inputText = document.getElementById('texto-tarefa').value
  addItenList.innerText = inputText
  document.getElementById('lista-tarefas').appendChild(addItenList)
  document.getElementById('texto-tarefa').value = ""
})

// <!-- Requisito 7 -->
// <!-- Requisito 8 -->
let liColor = document.getElementById('lista-tarefas');

liColor.addEventListener('click', function (event) {
  let itemColorized = document.querySelector('.itemSelected');

  if (itemColorized != null) {
    itemColorized.classList.remove('itemSelected');
  }

  event.target.classList.add('itemSelected');
})

// <!-- Requisito 9 -->
liColor.addEventListener('dblclick', function(event) {
event.target.classList.toggle('completed');
})









