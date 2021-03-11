let criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', makeTarefa);

function makeTarefa() {
  let textoTarefa = document.getElementById('texto-tarefa').value;
  if (textoTarefa == '') {} else {
    let makeLi = document.createElement('li');
    document.getElementById('lista-tarefas').appendChild(makeLi).innerHTML = textoTarefa;
    document.getElementById('texto-tarefa').value = '';
  }
}

let listaTarefas = document.getElementById('lista-tarefas');
listaTarefas.addEventListener('click', changeColor);

function changeColor(event) {
  let element = document.getElementById('lista-tarefas').childNodes;
  for (let index = 0; index < element.length; index += 1) {
    if (event.target[index] != element[index]) {
      element[index].classList.remove('selected');
    }
    if (event.target == element[index]) {
      element[index].classList.add('selected');
    }
  }
}

listaTarefas.addEventListener('dblclick', riscando);

function riscando(event) {
  event.target.classList.toggle('completed');
}
