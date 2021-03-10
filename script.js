const buttom = document.querySelector('#criar-tarefa');
buttom.innerHTML = 'Adicionar';

const caixaTexto = document.querySelector('#texto-tarefa')
const todoList = document.querySelector('#lista-tarefas')

function listaDeTarefas(){
  buttom.addEventListener('click', function(){
    const listItem = document.createElement('li')
    listItem.innerHTML = caixaTexto.value;
    todoList.appendChild(listItem);
    caixaTexto.value = ''
  })
}
listaDeTarefas();