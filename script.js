const ol = document.getElementById('#lista-tarefas');
let li;
let itemId;
let item;

function adicionar() {
  if (document.getElementById('texto-tarefa').value !== '') {
    item = document.getElementById('texto-tarefa');
    itemId = ol.childElementCount;
    li = createItemElemet(item.value, itemId);
    li.appendChild(removerItemBtn(itemId));
    ol.appendChild(li);
  }
}
function remover() {

}
// cria o elemento dentro de li
function createItemElemet(itemValue, itemId) {
  li = document.createElement('li');
  li.setAttribute('index', itemId);
  li.appendChild(document.createTextNode(itemValue));
  return li;
}
// cria o botão para remover um item da lista
function removerItemBtn(itemId) {
  let btn = document.createElement('button');
  btn.setAttribute('onclick', 'limpaInput('+itemId+')');
  btn.innerHTML = 'x';
  return btn;
}
