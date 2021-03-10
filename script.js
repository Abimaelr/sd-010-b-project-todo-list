const button = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');

function criarLista() {
    const caixaTexto = document.querySelector('#texto-tarefa');
    button.addEventListener('click', function (){
        const li = document.createElement('li');
        lista.appendChild(li);
        li.innerHTML = caixaTexto.value;
        caixaTexto.value = null;
    })
}

criarLista();

function clicarLista() {
  const tarefa = document.getElementsByTagName('li');
  lista.addEventListener('click', function (event){
      for (let index = 0; index < tarefa.length; index += 1){
      tarefa[index].classList.remove('listaClicada');
      event.target.classList.add('listaClicada');
    }
  })
}

clicarLista();