function criaItemLista() {
  const texto = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const criaItem = document.createElement('li');
  criaItem.innerText = texto.value;
  lista.appendChild(criaItem);
  texto.value = '';
}
const botaoAdicionar = document.querySelector('#criar-tarefa');
botaoAdicionar.addEventListener('click', criaItemLista);
