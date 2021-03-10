const createBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const caixaTexto = document.getElementById('texto-tarefa');
const listItem = document.querySelectorAll(".listItem");
createBtn.innerHTML = 'Criar tarefa';
function clickCreateList () {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = caixaTexto.value;
  taskList.appendChild(listItem);
  caixaTexto.value = ''; 
}
createBtn.addEventListener('click', clickCreateList);
 
document.addEventListener('click', function (event) {
  const select = document.querySelectorAll('.selecionada');
  if (event.target.classList.contains('listItem')) {
    if (select.length !== 0) {
      select[0].className = "listItem";
      event.target.classList.add('selecionada');
    } 
    if (select.length === 0 ) {
      event.target.classList.add('selecionada');
    }
  }
})

document.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('listItem')) {
    if (event.target.classList.contains('completed')) {
    event.target.classList.add('completed');
    }
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    }
  }
})
  
