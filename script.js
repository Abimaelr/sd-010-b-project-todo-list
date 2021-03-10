function criaItemLista() {
  const texto = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const criaItem = document.createElement('li');
  criaItem.innerText = texto.value;
  criaItem.classList.add('itens');
  lista.appendChild(criaItem);
  texto.value = '';
}
const botaoAdicionar = document.querySelector('#criar-tarefa');
botaoAdicionar.addEventListener('click', criaItemLista);

const lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', (event) => {
  const itemSelecionado = event;
  itemSelecionado.target.style.backgroundColor = 'rgb(128, 128, 128)';
});
