const buttom = document.querySelector('#criar-tarefa');
buttom.innerHTML = 'Adicionar';

const caixaTexto = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('#lista-tarefas');

function listaDeTarefas() {
  buttom.addEventListener('click', function(){
    const listItem = document.createElement('li'); // Adicionando um elemento a lista
    listItem.innerHTML = caixaTexto.value;  // adicionando o valor da caixa texto 
    todoList.appendChild(listItem);
    caixaTexto.value = '';
  })
}
listaDeTarefas();

function coloreFundo(){
  const tag = document.querySelector('ol'); // pego todos os elem de ol
  tag.addEventListener('click', function(evento){ // adiciono o evento para o pai
    let selecionado = document.querySelector('.selected'); //pego o elem com a classe selected
    if(selecionado){ // se tiver selecionado
    selecionado.classList.remove('selected'); //removo a classe dele
    }
    evento.target.classList.add('selected'); // e adiciono a classe ao clicado
  })
}
coloreFundo();

function riscaTarefa(){
    const tarefas = document.querySelector('ol'); 
    tarefas.addEventListener('dblclick', function(evento){
        evento.target.classList.toggle('completed'); // adiciona e remove a classe quando há o dblclick
    })

}
riscaTarefa();