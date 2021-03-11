let button = document.getElementById('criar-tarefa');
let iten = document.getElementById('texto-tarefa');
let list = document.getElementById('lista-tarefas');

function addTask () {
   let task = document.createElement('li');
   list.appendChild(task).innerText = iten.value;
   iten.value = "";
   }

button.addEventListener('click',addTask);