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

let buttonCriarTarefa = document.getElementById("criar-tarefa");
buttonCriarTarefa.addEventListener('click', function() {
  adicionaTarefa();
})