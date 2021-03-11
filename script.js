const things = document.getElementById('lista-tarefas');
const content = document.getElementById('texto-tarefa');
const buttn = document.getElementById('criar-tarefa');

buttn.addEventListener('click', recebeClick)

function recebeClick () {
   
   let task = content.value;
   const item = document.createElement('li');
   things.appendChild(item);
   item.innerText = task;
   content.value = '';


};

