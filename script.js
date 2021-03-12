function adicionar() {
  let buttomList = document.querySelector('#criar-tarefa');
  buttomList.addEventListener('click', () => {
    let inputList = document.querySelector('#texto-tarefa');
    let listTexto = inputList.value;
    let tarefaItem = document.createElement('li');
    let listaTarefas = document.querySelector('#lista-tarefas');
    tarefaItem.innerHTML = listTexto;
    listaTarefas.appendChild(tarefaItem);
    inputList.value = '';
    inputList.focus();
  });
}
window.onload = function(){
  adicionar();
};
