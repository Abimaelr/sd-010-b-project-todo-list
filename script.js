const things = document.getElementById('lista-tarefas');
const content = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');

button.addEventListener('click', recebeClick)

function recebeClick () {
   
   const item = document.createElement('li');
   things.appendChild(item);
   item.innerText = content.value;
   content.value = '';
};

