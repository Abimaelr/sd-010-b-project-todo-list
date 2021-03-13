window.onload = function () {
  const creatingTasks = document.querySelector('#criar-tarefa');
  const clearList = document.querySelector('#apaga-tudo');
  const deleteCompletedItem = document.querySelector('#remover-finalizados');
  const saveList = document.querySelector('#salvar-tarefas');
  const removeItemButton = document.querySelector('#remover-selecionado');

  creatingTasks.addEventListener('click', addingTasks);
  clearList.addEventListener('click', deletingList);
  deleteCompletedItem.addEventListener('click', deletingCompletedItem);
  saveList.addEventListener('click', savingList);
  removeItemButton.addEventListener('click', removingSelectedItem);

  retrievingList();
};

const textEntry = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
function addingTasks() {
  const item = document.createElement('li');
  item.className = 'item';
  item.innerText = textEntry.value;
  list.appendChild(item);
  textEntry.value = '';
  item.addEventListener('click', selectingItem);
  item.addEventListener('dblclick', itemComplete);
}
