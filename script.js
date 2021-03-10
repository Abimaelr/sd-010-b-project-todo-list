const buttom = document.querySelector('#criar-tarefa');
buttom.innerHTML = 'Adicionar';

const caixaTexto = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('#lista-tarefas');

function listaDeTarefas() {
  buttom.addEventListener('click', function(){
    const listItem = document.createElement('li');
    listItem.innerHTML = caixaTexto.value;
    todoList.appendChild(listItem);
    caixaTexto.value = ''
  })
}
listaDeTarefas();

function coloreFundo(){
  const tag = document.querySelector('ol');
  tag.addEventListener('click', function(evento){
    evento.target.style.backgroundColor = 'rgb(128,128,128)' 
  })
}
coloreFundo();