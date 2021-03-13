function adicionar() {
  let buttomList = document.querySelector('#criar-tarefa');
  buttomList.addEventListener('click', () => {
    let inputList = document.querySelector('#texto-tarefa');
    let listTexto = inputList.value;
    let tarefaItem = document.createElement('li');
    let listaTarefas = document.querySelector('#lista-tarefas');
    tarefaItem.className = 'selected';
    tarefaItem.innerHTML = listTexto;
    listaTarefas.appendChild(tarefaItem);
    inputList.value = '';
    inputList.focus();
  });
}
function trocarCinza() {
  let lista = document.querySelector('#lista-tarefas');
  let listaTamanho = lista.children;
  lista.addEventListener('click', event => {
    for (let index = 0; index < listaTamanho.length; index += 1){
      event.target.style.backgroundColor = 'rgb(128,128,128)';
    }
  });
}
window.onload = function() {
  adicionar();
  trocarCinza();
};
