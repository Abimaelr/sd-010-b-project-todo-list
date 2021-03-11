const buttom = document.querySelector('#criar-tarefa');
buttom.innerHTML = 'Adicionar';

const caixaTexto = document.querySelector('#texto-tarefa');
const todoList = document.querySelector('#lista-tarefas');

function listaDeTarefas() {
  buttom.addEventListener('click', function() {
    const listItem = document.createElement('li'); // Adicionando um elemento a lista
    listItem.innerHTML = caixaTexto.value; // adicionando o valor da caixa texto 
    todoList.appendChild(listItem);
    caixaTexto.value = '';
  });
}
listaDeTarefas();

function coloreFundo() {
  const tag = document.querySelector('#lista-tarefas'); // pego todos os elem de ol
  tag.addEventListener('click', function(evento) { // adiciono o evento para o pai
    const selecionado = document.querySelector('.selected'); // pego o elem com a classe selected
    if (selecionado) { // se tiver selecionado
    selecionado.classList.remove('selected'); // removo a classe dele
    }
    evento.target.classList.add('selected'); // e adiciono a classe ao clicado
  })
}
coloreFundo();

function riscaTarefa() {
  const tarefas = document.querySelector('#lista-tarefas'); 
  tarefas.addEventListener('dblclick', function(evento){
    evento.target.classList.toggle('completed'); // adiciona e remove a classe quando há o dblclick
  });
}
riscaTarefa();

const botaoApagaTudo = document.querySelector('#apaga-tudo')
botaoApagaTudo.innerHTML = 'Limpar Lista'

function apagaItensDaLista(){
    const lista = document.querySelector('#lista-tarefas'); // porem a minha lista aqui ainda é zero
    const itensLista = lista.getElementsByTagName('li')

    botaoApagaTudo.addEventListener('click', function() {
      for(let i = itensLista.length -1 ; i >= 0; i -=1) { //parto do final da lista até zero removendo os elem
        itensLista[i].remove();
      }
    }) 
}
apagaItensDaLista();

