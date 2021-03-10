const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function addActivity() {
  button.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.className = 'activity';
    list.appendChild(listItem);
    listItem.innerHTML = input.value;
    input.value = '';
  });
}
addActivity();
