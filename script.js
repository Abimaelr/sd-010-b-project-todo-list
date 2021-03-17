const botao = document.querySelector('#criar-tarefa');
const listagem = document.querySelector('#lista-tarefas');
const texto = document.querySelector('#texto-tarefa');

function click() {
  if (texto.value !== '') {
    const list = document.createElement('li');
    list.className = 'listas';
    list.textContent = texto.value;
    listagem.appendChild(list);
    texto.value = '';
    catchText.focus();
  } else {
    alert('Digite um item');
    texto.focus();
  }
}

function keyEnter(event) {
  const key = event.keyCode;
  if (key === 13) {
    click();
  }
}

texto.addEventListener('keydown', keyEnter);
botao.addEventListener('click', click);

const selectList = listagem.children;

