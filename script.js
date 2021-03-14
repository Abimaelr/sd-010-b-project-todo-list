let ul = document.getElementById('#lista-tarefas');
let li;
let itemId;
let itens;

function adicionar() {
  if (document.getElementById('#texto-tarefa').value != '') {
    item = document.getElementById('#texto-tarefa').value;
    itemId = ul.childElementCount;
    li = createItemElemet(itemId);
  }
}
// cria o elemento dentro de li
function criarItem(itemValue, itemId) {
  let li = document.createElement('li');
  li.setAttribute('index', itemId);
  li.appendChild(document.createTextNode(itemValue));
  return li;
}

function remover() {

}
