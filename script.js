let entradaDeTarefa
let caixaDeEntrada = document.getElementById('texto-tarefa');
caixaDeEntrada.addEventListener('keyup',tarefa);

function tarefa () {
 entradaDeTarefa = caixaDeEntrada.value
}

let paiDaLista = document.getElementById('lista-tarefas')
let botão = document.getElementById('criar-tarefa');
botão.addEventListener('click',vaiPraLista); 

function vaiPraLista () {
  let li = document.createElement('li');
  li.innerText = entradaDeTarefa
  caixaDeEntrada.value = ''
  paiDaLista.appendChild(li);

}



