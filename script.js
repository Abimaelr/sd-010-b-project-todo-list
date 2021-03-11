const buttom = document.querySelector('#criar-tarefa');

const caixaTexto = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');

function listaDeTarefas() {
  buttom.addEventListener('click', function() {
    const listItem = document.createElement('li'); // Adicionando um elemento a lista
    listItem.innerHTML = caixaTexto.value; // adicionando o valor da caixa texto 
    lista.appendChild(listItem);
    caixaTexto.value = '';
  });
}
listaDeTarefas();

function coloreFundo() {
  lista.addEventListener('click', function(evento) { // adiciono o evento para o pai
    const selecionado = document.querySelector('.selected'); // pego o elem com a classe selected
    if (selecionado) { // se tiver selecionado
    selecionado.classList.remove('selected'); // removo a classe dele
    }
    evento.target.classList.add('selected'); // e adiciono a classe ao clicado
  })
}
coloreFundo();

function tarefaCompleta() {
  lista.addEventListener('dblclick', function(evento){
    evento.target.classList.toggle('completed'); // adiciona e remove a classe quando há o dblclick
  });
}
tarefaCompleta();

const botaoApagaTudo = document.querySelector('#apaga-tudo')

function apagaItensDaLista(){
    const itensLista = lista.getElementsByTagName('li')

    botaoApagaTudo.addEventListener('click', function() {
      for(let i = itensLista.length -1 ; i >= 0; i -=1) { //parto do final da lista até zero removendo os elem
        itensLista[i].remove();
      }
    }) 
}
apagaItensDaLista();

// Requisito 11 - Remove os itens com a classe completed
const botaoRemoveCompletos = document.querySelector('#remover-finalizados');

function removeCompletos(){
  const tarefaFinalizada = document.getElementsByTagName('li');
  for (let i = 0; i < tarefaFinalizada.length; i += 1) {
    if(tarefaFinalizada[i].classList.contains('completed')){ 
      lista.removeChild(tarefaFinalizada[i]); // Para conseguir remover todos usei a mesma ideia da Alessandra Resende
      i -= 1;
    }
  }
}
botaoRemoveCompletos.addEventListener('click', removeCompletos);
  
// Requisito 12 - Salvar tarefas 

const botaoSalvaTarefa = document.querySelector('#salvar-tarefas');

function salvarValoresLista(){
  localStorage.setItem('listaDeTarefas', lista.innerHTML); // salvo os valores da lista(ol) no storage
}
botaoSalvaTarefa.addEventListener('click', salvarValoresLista);

// Pegar as tarefas salvas

function pegaValoresSalvos() {
  if (localStorage.getItem('listaDeTarefas') !== '') { // se a minha lista de tarefas não for vazia
    lista.innerHTML = (localStorage.getItem('listaDeTarefas')); // pego os valores dela
  }
}
window.onload = pegaValoresSalvos; // ao carregar a página chamo essa função