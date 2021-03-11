const listaPai = document.getElementById('lista-tarefas');
let addSkill = document.getElementById('texto-tarefa');
let create = document.getElementById('criar-tarefa');

function addList() {
  const createList = document.createElement('li');
  listaPai.appendChild(createList);
  createList.className = 'item-tarefa';
  createList.innerHTML = addSkill.value;
  addSkill.value = '';
}


create.addEventListener('click', addList);
