function adicionar() {
  const buttomList = document.querySelector('#criar-tarefa');
  buttomList.addEventListener('click', () => {
    const inputList = document.querySelector('#texto-tarefa');
    const listTexto = inputList.value;
    const tarefaItem = document.createElement('li');
    const listaTarefas = document.querySelector('#lista-tarefas');
    tarefaItem.innerHTML = listTexto;
    listaTarefas.appendChild(tarefaItem);
    inputList.value = '';
    inputList.focus();
  });
}
function trocarCinza() {
  const lista = document.querySelector('#lista-tarefas');
  const listaTamanho = lista.children;
  lista.addEventListener('click', (event) => {
    for (let index = 0; index < listaTamanho.length; index += 1) {
      for (let procurar = 0; procurar < listaTamanho.length; procurar += 1) {
        const tem = listaTamanho[procurar].classList.contains('cor-cinza');
        if (tem) {
          listaTamanho[procurar].classList.remove('cor-cinza');
        }
      }
      (event).target.className = 'cor-cinza';
    }
  });
}
window.onload = function () {
  adicionar();
  trocarCinza();
};
