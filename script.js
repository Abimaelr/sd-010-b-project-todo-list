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

function changeColor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

list.addEventListener('click', changeColor);
