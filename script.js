const button = document.querySelector('#criar-tarefa');
const inputtext = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');

function additen() {
  const iten = document.createElement('li');
  iten.innerText = inputtext.value;
  list.appendChild(iten);
  inputtext.value = '';
}

button.addEventListener('click', additen);
