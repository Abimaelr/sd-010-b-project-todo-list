function adicionadoLista () {
  let butao = document.querySelector('#criar-tarefa');
  let lista = document.querySelector('#lista-tarefas');
  let conteudoItens = document.querySelector('#texto-tarefa');
  butao.addEventListener('click', function () {
    let itemLista = document.createElement('li');
    lista.appendChild(itemLista).innerHTML = conteudoItens.value;
    conteudoItens.value = '';
  });
}
adicionadoLista();

function listaColorida () {
  let corLista = document.querySelector('#lista-tarefas');
  corLista.addEventListener("click", function (evento){
      evento.target.style.background = 'rgb(128, 128, 128)';
  })
}
listaColorida(); 
