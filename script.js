function criarTarefa(){
const pai = document.getElementById('lista-tarefas');
const tarefa = document.getElementById('texto-tarefa').value;
console.log(pai);
console.log(tarefa);

const li = document.createElement('li');
li.innerHTML = tarefa;
pai.appendChild(li);

document.getElementById('texto-tarefa').value='';
}