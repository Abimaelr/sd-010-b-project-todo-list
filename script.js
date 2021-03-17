const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function selectTask() {
  const listmain = document.querySelector('#lista-tarefas');
  const listitems = document.getElementsByTagName('li');

  listmain.addEventListener('click', (event) => {
    const moment = event.target;

    for (let i = 0; i < listitems.length; i += 1) { listitems[i].style.backgroundColor = ''; }

    moment.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

button.onclick = () => {
  const input = document.getElementById('texto-tarefa');
  const valuein = input.value;

  const item = document.createElement('li');
  item.className = 'item';

  list.appendChild(item);

  item.innerHTML = valuein;

  input.value = '';

  console.log('teste');
};

selectTask();
