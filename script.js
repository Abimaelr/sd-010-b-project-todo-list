const botao = document.querySelector('#criar-tarefa');
const listagem = document.querySelector('#lista-tarefas');
const texto = document.querySelector('#texto-tarefa');

function clicar() {
  if (texto.value !== '') {
    const list = document.createElement('li');
    list.className = 'listas';
    list.textContent = texto.value;
    listagem.appendChild(list);
    texto.value = '';
    texto.focus();
  } else {
    alert('Digite um item');
    texto.focus();
  }
}

function entrada(event) {
  const key = event.keyCode;
  if (key === 13) {
    clicar();
  }
}

texto.addEventListener('keydown', entrada);
botao.addEventListener('click', clicar);

const listagem = listagem.children;

