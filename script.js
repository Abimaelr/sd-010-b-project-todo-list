const add = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

add.onclick = () => {
  const input = document.getElementById('texto-tarefa');
  const valuein = input.value;

  const item = document.createElement('li');
  item.className = 'item';

  list.appendChild(item);

  item.innerHTML = valuein;

  input.value = '';

  console.log('teste');
};
