const listaPai = document.getElementById('lista-tarefas');
let addSkill = document.getElementById('texto-tarefa');
let create = document.getElementById('criar-tarefa');

function addList() {
  const createList = document.createElement('li');
  listaPai.appendChild(createList);
  createList.className = 'item-tarefa';
  createList.innerHTML = addSkill.value;
  addSkill.value = '';
};
create.addEventListener('click', addList);

// https://serfrontend.com/blog/diferenca-entre-this-target-e-currenttarget/index.html
listaPai.addEventListener('click', function (e) {

  const getColor = document.getElementsByClassName('classColor');
  if (getColor.length !== 0) {
    getColor[0].classList.remove('classColor');
    e.target.classList.add('classColor');
  } else if (getColor.length == 0) {
    e.target.classList.add('classColor')
  }
});

listaPai.addEventListener('dblclick', function (e) {
  const putTrace = document.getElementsByClassName('completed');
  const getClick = e.target.classList;

  if (getClick.contains('completed')) {
    getClick.remove('completed');
  } else if (getClick.contains('completed') === false) {
    getClick.add('completed');
  }
})

const getButton = document.getElementById('apaga-tudo');
function apagaLista() {
  listaPai.innerHTML = '';
  
  
}
getButton.addEventListener('click', apagaLista)
