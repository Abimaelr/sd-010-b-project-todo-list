const createBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const caixaTexto = document.getElementById('texto-tarefa');
createBtn.innerHTML = 'Criar tarefa';
function clickCreateList () {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = caixaTexto.value;
  taskList.appendChild(listItem);
  caixaTexto.value = ''; 
}
createBtn.addEventListener('click', clickCreateList);