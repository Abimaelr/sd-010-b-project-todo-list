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

function removeSelected(elemento) {
  let tagItem = elemento;
  for (let index = 0; index < elemento.length; index += 1) {
    tagItem[index].style.backgroundColor = 'white';
    tagItem[index].classList.remove('selected');
  }
}
const lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', (event) => {
  const itens = document.querySelector('ol').children;
  removeSelected(itens);
  const itemSelecionado = event;
  itemSelecionado.target.style.backgroundColor = 'rgb(128, 128, 128)';
  itemSelecionado.target.classList.add('selected');
  console.log(itemSelecionado);
});
