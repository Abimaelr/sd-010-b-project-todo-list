
const buttonCriarTarefa = document.getElementById('criar-tarefa');
buttonCriarTarefa.addEventListener('click', function () {
  adicionaTarefa();
});
function adicionaTarefa() {
  const lista = document.getElementById('lista-tarefas');
  const textoTarefa = document.getElementById('texto-tarefa');
  const tarefa = textoTarefa.value;
  const criaItem = document.createElement('li');
  criaItem.innerHTML = tarefa;
  lista.appendChild(criaItem);
  textoTarefa.value = '';
  textoTarefa.focus();
}


function corBackground() {
  const listaTarefas = document.querySelector('#lista-tarefas');
  let items = listaTarefas.children;
  listaTarefas.addEventListener('click', function (evento) {
    for(let index = 0; index < items.length; index += 1) {
      removerSelected();
      evento.target.classList.add('selected');
    }
  })
}

function removerSelected() {
  let items = document.querySelector('#lista-tarefas').children;
  for(let index = 0; index < items.length; index += 1) {
    if(items[index].classList.contains('selected')) {
      items[index].classList.remove('selected');
    }
  }
}

function doubleClick() {
  let listaTarefas = document.querySelector('#lista-tarefas');
  let items = listaTarefas.children;
  listaTarefas.addEventListener('dblclick', function(event) {
    if(event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    }
    else {
      event.target.classList.add('completed');
    }
  }
  )
}

//document.querySelector('#lista-tarefas').remove('li')
function apagarTudo () {
  const botaoLimpar  = document.getElementById('apaga-tudo');
  const listaTarefas = document.querySelector('#lista-tarefas');
  
  botaoLimpar.addEventListener('click', function(){
    listaTarefas.innerHTML = '';
  })
}
apagarTudo();
doubleClick();
corBackground();