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
function trocarCinza() {
  let lista = document.querySelector('#lista-tarefas');
  let listaTamanho = lista.children;
  lista.addEventListener('click', event => {
    for (let index = 0; index < listaTamanho.length; index += 1){
      for (let procurar = 0; procurar < listaTamanho.length; procurar += 1){
        let tem = listaTamanho[procurar].classList.contains('cor-cinza');
        if (tem) {
          listaTamanho[procurar].classList.remove('cor-cinza');
        }
      };
      event.target.className = 'cor-cinza';
    }
  });
}
window.onload = function() {
  adicionar();
  trocarCinza();
};
