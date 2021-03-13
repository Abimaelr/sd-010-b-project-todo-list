let buttonCriarTarefa = document.getElementById("criar-tarefa");
buttonCriarTarefa.addEventListener('click', function() {
  adicionaTarefa();
})

function adicionaTarefa() {
  let lista = document.getElementById('lista-tarefas');
  let textoTarefa = document.getElementById('texto-tarefa');
  let tarefa = textoTarefa.value;
  let criaItem = document.createElement('li');
  criaItem.innerHTML = tarefa;
  lista.appendChild(criaItem);
  textoTarefa.value = '';
  textoTarefa.focus();
}

function corBackground() {
  let listaTarefas = document.querySelector('#lista-tarefas');
  let items = listaTarefas.children;
  listaTarefas.addEventListener('click', function(evento) {
    for(let index = 0; index < items.length; index++) {
      removerSelected();
      evento.target.classList.add('selected');
    }
  })
}
corBackground();

function removerSelected() {
  let items = document.querySelector('#lista-tarefas').children;
  for(let index = 0; index < items.length; index++) {
    if(items[index].classList.contains('selected')) {
      items[index].classList.remove('selected');
    }
  }
}
